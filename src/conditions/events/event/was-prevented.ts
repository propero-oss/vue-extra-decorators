/**
 * A predicate that checks if the first parameter (assumed event)
 * was prevented with {@link Event#preventDefault | preventDefault}.
 *
 * @param ev - The event to check against
 * @returns true, if event was prevented before.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 *
 * Example:
 * ```TS
 *   @IfNot(wasPrevented)
 *   private doSomething(ev: Event) {
 *     // ev was not prevented!
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link keyMatches} {@link mouseButtonMatches}
 * @public
 */
export function wasPrevented(ev: Event) {
  return ev && ev.defaultPrevented || false;
}
