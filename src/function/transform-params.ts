import {extend} from "@/function/extend";
import {ExtendedFunction, ParamsTransformFunction} from "@/function/extended-function";
import {TFunction} from "@/types";



export function transformParams<T extends TFunction>(fn: T | undefined, ext: ParamsTransformFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__params.push(ext);
  return efn;
}
