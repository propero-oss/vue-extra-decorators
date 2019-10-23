import {MouseButton} from "@/types";
import {mouseButtonsToMask} from "@/util/mouse-buttons-to-mask";



export function mouseButtonMatches(...buttons: MouseButton[]) {
  const mask = mouseButtonsToMask(buttons);
  return (ev: MouseEvent) => (ev.buttons & mask) === mask;
}
