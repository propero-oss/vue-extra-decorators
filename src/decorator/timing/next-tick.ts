import { wrapFunction } from "../../descriptor";
import { AnyFunction } from "../../types";

/**
 * Delay function calls by a vue tick using this.$nextTick.
 *
 * @remarks
 * If you want to delay by one ms, a browser frame or a specific amout of time, look into
 * {@link NextMs}, {@link NextFrame} or {@link Delay} instead.
 *
 * @example
 * ```TS
 *   @NextTick
 *   delayed() {
 *     // Executed on this.$nextTick
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
export function NextTick() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<AnyFunction>) => {
    wrapFunction(desc, function({ args, orig }) {
      return this.$nextTick().then(() => orig.apply(this, args));
    });
  };
}
