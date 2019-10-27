import {extend} from "@/function/extend";
import {ExtendedFunction, ParamsTransformFunction} from "@/function/extended-function";
import {TFunction} from "@/types";



/**
 * Transforms the parameters of a given function before execution.
 * @param fn - The function to extend
 * @param ext - The parameter transformer
 * @returns The extended function
 * @internal
 */
export function transformParams<T extends TFunction>(fn: T | undefined, ext: ParamsTransformFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__params.push(ext);
  return efn;
}
