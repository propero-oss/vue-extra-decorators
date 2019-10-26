/**
 * A predicate that checks if the first parameter (assumed event)
 * is the last child of its parent node.
 *
 * @param ev - The event to check against
 * @return true, if the event's target is the last child of its parent.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 * If you want to check if a node is the last element child of
 * its parent, use {@link isLastElementChild} instead.
 *
 *
 * Example:
 * ```TS
 *   @If(isLastChild)
 *   private doSomething(ev: Event) {
 *     // ev.target is it the last child of its parent
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link isFirstElementChild} {@link isFirstChild} {@link isLastElementChild}
 * @public
 */
export function isLastChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentNode
    && (ev.target as HTMLElement).parentNode!.lastChild === ev.target;
}
