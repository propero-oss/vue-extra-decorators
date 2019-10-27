/**
 * A predicate that checks if the first parameter (assumed event)
 * is the last child element of its parent element.
 *
 * @param ev - The event to check against
 * @returns true, if the event's target is the last child of its parent.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 * If you want to check if a node is the last child node of
 * its parent, use {@link isLastChild} instead.
 *
 *
 * @example
 * ```TS
 *   @If(isLastElementChild)
 *   private doSomething(ev: Event) {
 *     // ev.target is it the last child of its parent
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link isFirstChild} {@link isLastChild} {@link isFirstElementChild}
 * @public
 */
export function isLastElementChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentElement
    && (ev.target as HTMLElement).parentElement!.lastElementChild === ev.target;
}
