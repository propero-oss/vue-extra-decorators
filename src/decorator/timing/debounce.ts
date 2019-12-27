import { wrapFunction } from "../../descriptor";
import { AnyFunction } from "../../types";

/**
 * Debounce function calls by a specified amount of time
 * The function will only be executed `ms` milliseconds after
 * the last invocation. If it is invoked again within this
 * timeframe, the timeframe is reset. Useful for search completion.
 *
 * @param ms - The amount of milliseconds to debounce it by
 *
 * @remarks
 * If you want calls to execute the function immediately, then block
 * subsequent calls until a specific time is over, use
 * {@link Debuffer} instead.
 *
 * @example
 * ```TS
 *   @Debounce(1000)
 *   onSearchLiveChange(ev: Event) {
 *     // Only ever executed every 1000 ms, 1000 ms after last invocation
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
export function Debounce(ms: number = 200) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<AnyFunction>) => {
    const timeout = Symbol(`debounce:${key}`);

    wrapFunction(desc, function({ args, orig }) {
      if (this[timeout] != null) clearTimeout(this[timeout]);
      this[timeout] = setTimeout(() => {
        delete this[timeout];
        orig.apply(this, args);
      }, ms);
    });

    return desc;
  };
}
