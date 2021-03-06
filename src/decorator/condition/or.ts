import { TFunction } from "../../types";

/**
 * Merges multiple predicates into one.
 * @param fns - The predicates to combine
 * @returns A predicate that returns true if one of the given predicates returns true.
 *
 * @remarks
 * This function is meant to be a condition for {@link If} alike methods.
 *
 * @example
 * ```TS
 *   @If(or(isInPath("drawer"), not(wasPrevented)))
 *   private doSomething(ev: Event) {
 *     // only executed if isInPath("drawer") or not(wasPrevented) return true
 *   }
 * ```
 * {@link If} {@link IfNot} {@link and} {@link not}
 * @public
 */
export function or(...fns: TFunction<boolean>[]): TFunction<boolean> {
  return function(...args) {
    return !!fns.find(fn => fn.apply(this, args));
  };
}
