import { extend } from "./extend";
import { AfterFunction, ExtendedFunction } from "./extended-function";
import { TFunction } from "../types";

/**
 * Append a function to another, so it gets called after the original has been called.
 * @param fn - The function to extend
 * @param ext - The function to execute after `fn`
 * @returns The extended function
 * @internal
 */
export function append<T extends TFunction>(fn: T | undefined, ext: AfterFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__after.unshift(ext);
  return efn;
}
