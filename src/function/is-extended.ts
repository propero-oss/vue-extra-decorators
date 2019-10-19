import {ExtendedFunction} from "@/function/extended-function";

export function isExtended<T extends () => unknown>(fn: T): fn is ExtendedFunction<T> & T {
  return fn && "__extended" in fn;
}
