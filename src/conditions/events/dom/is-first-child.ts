/**
 * A predicate that checks if the first parameter (assumed event)
 * is the first child of its parent node.
 *
 * @param ev - The event to check against
 * @returns true, if the event's target is the first child of its parent.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 * If you want to check if a node is the first element child of
 * its parent, use {@link isFirstElementChild} instead.
 *
 *
 * @example
 * ```TS
 *   @If(isFirstChild)
 *   private doSomething(ev: Event) {
 *     // ev.target is it the first child of its parent
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link isFirstElementChild} {@link isLastChild} {@link isLastElementChild}
 * @public
 */
export function isFirstChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentNode
    && (ev.target as HTMLElement).parentNode!.firstChild === ev.target;
}
