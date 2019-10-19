import {extend} from "@/function/extend";
import {ExtendedFunction, ResultTransformFunction} from "@/function/extended-function";
import {TFunction} from "@/types";



export function transformResult<T extends TFunction>(fn: T, ext: ResultTransformFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__result.push(ext);
  return efn;
}
