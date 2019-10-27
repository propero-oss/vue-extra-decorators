import {TFunction} from "@/types";



/**
 * Merges multiple predicates into one.
 * @param fns - The predicates to combine
 * @returns A predicate that returns true if all other predicates have returned true.
 *
 * @remarks
 * This function is meant to be a condition for {@link If} alike methods.
 *
 * @example
 * ```TS
 *   @If(and(isInPath("drawer"), not(wasPrevented)))
 *   private doSomething(ev: Event) {
 *     // only executed if isInPath("drawer") and not(wasPrevented) return true
 *   }
 * ```
 * {@link If} {@link IfNot} {@link or} {@link not}
 * @public
 */
export function and(...fns: TFunction<boolean>[]): TFunction<boolean> {
  return function(...args) { return !fns.find(fn => !fn.apply(this, args)); };
}
