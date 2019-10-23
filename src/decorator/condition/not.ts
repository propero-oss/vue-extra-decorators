import {TFunction} from "@/types";



export function not(fn: TFunction<boolean>): TFunction<boolean> {
  return function(...args) { return !fn.apply(this, args); };
}
