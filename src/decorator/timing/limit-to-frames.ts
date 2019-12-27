import { wrapFunction } from "../../descriptor";
import { AnyFunction } from "../../types";

/**
 * Limit function calls to browser frames.
 * Useful for animations.
 * Every subsequent call before the next frame is blocked.
 *
 * @remarks
 * If you want specific time frames, look at {@link Debounce} or
 * {@link Debuffer} instead.
 *
 * @example
 * ```TS
 *   @LimitToFrame()
 *   render() {
 *     // Only executed on every frame at max
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
export function LimitToFrames() {
  return (target: any, propertyKey: string, desc: TypedPropertyDescriptor<AnyFunction>) => {
    const frame = Symbol(`Frame: ${propertyKey as string}`);

    wrapFunction(desc, function(this: any, { args, orig }) {
      if (this[frame] != null) return;
      this[frame] = requestAnimationFrame(() => {
        delete this[frame];
        orig.apply(this, args);
      });
    });

    return desc;
  };
}
