import {MouseButton} from "@/types";



const buttonMap: Record<MouseButton, number> = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4,
  BACK: 8,
  FORWARD: 16
};

export function mouseButtonsToMask(buttons: MouseButton[]): number {
  let mask = 0;
  buttons.forEach(button => mask |= buttonMap[button]);
  return mask;
}
