import {extend} from "@/function/extend";
import {BeforeFunction, ExtendedFunction} from "@/function/extended-function";
import {TFunction} from "@/types";



export function prepend<T extends TFunction>(fn: T | undefined, ext: BeforeFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__before.push(ext);
  return efn;
}
