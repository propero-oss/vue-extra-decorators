import { wrapFunction } from "../../descriptor";
import { AnyFunction } from "../../types";
import { callbackToPromise } from "../../util";

/**
 * Delay function calls by a specified amount of time.
 *
 * @param ms - The milliseconds to delay calls by.
 *
 * @remarks
 * If you want to delay by one ms, a browser frame or a vue tick, look into
 * {@link NextMs}, {@link NextFrame} or {@link NextTick} instead.
 *
 * @example
 * ```TS
 *   @Delay(500)
 *   delayed() {
 *     // Executed 500 ms after invocation
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
export function Delay(ms: number = 1000) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<AnyFunction>) => {
    wrapFunction(desc, function({ args, orig }) {
      return callbackToPromise(setTimeout, orig.bind(this, ...args), ms);
    });
  };
}
