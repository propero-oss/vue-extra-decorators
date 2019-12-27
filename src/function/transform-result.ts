import { extend } from "./extend";
import { ExtendedFunction, ResultTransformFunction } from "./extended-function";
import { TFunction } from "../types";

/**
 * Transforms the result of a given function after execution.
 * @param fn - The function to extend
 * @param ext - The result transformer
 * @returns The extended function
 * @internal
 */
export function transformResult<T extends TFunction>(fn: T | undefined, ext: ResultTransformFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__result.push(ext);
  return efn;
}
