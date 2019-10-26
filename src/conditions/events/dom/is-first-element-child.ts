/**
 * A predicate that checks if the first parameter (assumed event)
 * is the first child element of its parent element.
 *
 * @param ev - The event to check against
 * @return true, if the event's target is the first child of its parent.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 * If you want to check if a node is the first child node of
 * its parent, use {@link isFirstChild} instead.
 *
 *
 * Example:
 * ```TS
 *   @If(isFirstElementChild)
 *   private doSomething(ev: Event) {
 *     // ev.target is it the first child of its parent
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link isFirstChild} {@link isLastChild} {@link isLastElementChild}
 * @public
 */
export function isFirstElementChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentElement
    && (ev.target as HTMLElement).parentElement!.firstElementChild === ev.target;
}
