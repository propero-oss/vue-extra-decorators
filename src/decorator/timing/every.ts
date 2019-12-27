import { AnyFunction } from "../../types";
import { withSideEffects } from "../../vue/with-side-effects";

/**
 * Calls a function every `ms` milliseconds.
 *
 * @param ms - The milliseconds between executions
 *
 * @remarks
 * If you want to execute on every animation frame, use
 * {@link EveryFrame} instead.
 *
 * @example
 * ```TS
 *   @Every(1000)
 *   updateCountdown() {
 *     // Executed every 1000 ms
 *     this.date = new Date();
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
export function Every(ms: number = 1000) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<AnyFunction>) => {
    const interval = Symbol(`interval:${key}`);
    return withSideEffects(
      cxt => (cxt[interval] = setInterval(() => cxt[key].bind(cxt), ms)),
      cxt => clearInterval(cxt[interval])
    )(target, key);
  };
}
