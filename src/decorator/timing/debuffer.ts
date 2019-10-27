import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";




/**
 * Debuffer function calls by a specified amount of time
 * The function will only be executed every `ms` milliseconds
 * Every call within this timeframe are blocked and the timeframe
 * reset. Useful for possible multiple event triggersn.
 *
 * @param ms - The amount of milliseconds to debuffer it by
 *
 * @remarks
 * If you want calls to execute the function after the specified time
 * block subsequent calls, use {@link Debounce} instead.
 *
 * @example
 * ```TS
 *   @Debuffer(1000)
 *   onSearchLiveChange(ev: Event) {
 *     // Only ever executed every 1000 ms, immediately after first invocation
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
export function Debuffer(ms: number = 200) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    const lastCall = Symbol(`debuffer:${key}`);

    wrapFunction(desc, function({args, orig}) {
      const now = Date.now();
      const last = this[lastCall] || 0;
      this[lastCall] = now;
      if (last + ms <= now)
        orig.apply(this, args);
    });

    return desc;
  };
}
