import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";
import {callbackToPromise} from "@/util";



/**
 * Delay function calls by a single browser frame.
 *
 * @remarks
 * If you want to delay by one ms, a specific time or a vue tick, look into
 * {@link NextMs}, {@link Delay} or {@link NextTick} instead.
 *
 * @example
 * ```TS
 *   @NextFrame(500)
 *   delayed() {
 *     // Executed on next animation frame
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
export function NextFrame() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    wrapFunction(desc, function({args, orig}) {
      return callbackToPromise(requestAnimationFrame, orig.bind(this, ...args));
    });
  };
}
