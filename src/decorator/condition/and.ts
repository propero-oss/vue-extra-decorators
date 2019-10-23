import {TFunction} from "@/types";



export function and(...fns: TFunction<boolean>[]): TFunction<boolean> {
  return function(...args) { return !fns.find(fn => !fn.apply(this, args)); };
}
