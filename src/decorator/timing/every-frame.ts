import { AnyFunction } from "../../types";
import { withSideEffects } from "../../vue/with-side-effects";

/**
 * Calls a function every animation frame.
 *
 *
 * @remarks
 * If you want to execute in a specific interval, use
 * {@link Every} instead.
 *
 * @example
 * ```TS
 *   @EveryFrame()
 *   render() {
 *     // on every animation frame
 *   }
 * ```
 *
 * Call limiting decorators:
 * {@link Debounce} {@link Debuffer} {@link LimitToFrames}
 *
 * Delaying decorators:
 * {@link Delay} {@link NextFrame} {@link NextTick} {@link NextMs}
 *
 * Interval decorators:
 * {@link Every} {@link EveryFrame}
 *
 * @public
 */
export function EveryFrame() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<AnyFunction>) => {
    const id = Symbol(`frame:${key}`);

    function scheduler(cxt: any, key: string) {
      cxt[id] = requestAnimationFrame(async () => {
        await cxt[key].call(cxt);
        scheduler(cxt, key);
      });
    }

    return withSideEffects(
      cxt => scheduler(cxt, key),
      cxt => cancelAnimationFrame(cxt[id])
    )(target, key);
  };
}
