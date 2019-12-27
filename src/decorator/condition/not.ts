import { TFunction } from "../../types";

/**
 * Inverts a given predicate (negates its output)
 * @param fn - The predicate to invert
 * @returns The negated predicate.
 *
 * @remarks
 * This function is meant to be a condition for {@link If} alike methods.
 *
 * @example
 * ```TS
 *   @If(not(wasPrevented))
 *   private doSomething(ev: Event) {
 *     // wasPrevented returns false
 *   }
 * ```
 * {@link If} {@link IfNot} {@link or} {@link and}
 * @public
 */
export function not(fn: TFunction<boolean>): TFunction<boolean> {
  return function(...args) {
    return !fn.apply(this, args);
  };
}
