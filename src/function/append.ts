import {extend} from "@/function/extend";
import {AfterFunction, ExtendedFunction} from "@/function/extended-function";
import {TFunction} from "@/types";


export function append<T extends TFunction>(fn: T, ext: AfterFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__after.unshift(ext);
  return efn;
}

