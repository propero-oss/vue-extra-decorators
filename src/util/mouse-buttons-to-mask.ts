import {MouseButton} from "@/types";



const buttonMap: Record<MouseButton, number> = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4,
  BACK: 8,
  FORWARD: 16
};

/**
 * Converts mouse button strings to their respective button codes and creates a joint mask.
 * @param buttons - The mouse buttons to join into a bit mask.
 * @returns The converted bitmask
 * @internal
 */
export function mouseButtonsToMask(buttons: MouseButton[]): number {
  let mask = 0;
  buttons.forEach(button => mask |= buttonMap[button]);
  return mask;
}
