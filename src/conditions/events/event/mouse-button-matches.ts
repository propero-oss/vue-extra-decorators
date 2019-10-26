import {MouseButton} from "@/types";
import {mouseButtonsToMask} from "@/util/mouse-buttons-to-mask";


/**
 * Creates a predicate that checks if the first parameter (assumed event)
 * is a key event matching one of a given set of mouse buttons.
 *
 * @param buttons - The mouse buttons to check against
 * @returns A predicate that returns true, if the event button is one of the given mouse buttons.
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 *
 * Example:
 * ```TS
 *   @If(mouseButtonMatches("LEFT", "MIDDLE"))
 *   private doSomething(ev: MouseEvent) {
 *     // ev is either left or middle click (or both!)
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link keyMatches} {@link wasPrevented}
 * @public
 */
export function mouseButtonMatches(...buttons: MouseButton[]) {
  const mask = mouseButtonsToMask(buttons);
  return (ev: MouseEvent) => (ev.buttons & mask) !== 0;
}
