/**
 * Creates a predicate that checks if the first parameter (assumed event)
 * is a key event matching one of a given set of keys.
 *
 * @param keys - The keys to check against
 * @returns A predicate that returns true, if the event key is one of the given keys.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 *
 * @example
 * ```TS
 *   @If(keyMatches("Enter", "ArrowUp", "A"))
 *   private doSomething(ev: KeyboardEvent) {
 *     // ev.key is either "Enter", "ArrowUp" or "A"
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link mouseButtonMatches} {@link wasPrevented}
 * @public
 */
export function keyMatches(...keys: string[]) {
  return (ev: KeyboardEvent) => keys.indexOf(ev.key) !== -1;
}
