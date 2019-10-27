import {extend} from "@/function/extend";
import {BeforeFunction, ExtendedFunction} from "@/function/extended-function";
import {TFunction} from "@/types";



/**
 * Prepend a function to another, so it gets called before the original is called.
 * @param fn - The function to extend
 * @param ext - The function to execute before `fn`
 * @returns The extended function
 * @internal
 */
export function prepend<T extends TFunction>(fn: T | undefined, ext: BeforeFunction<T>): ExtendedFunction<T> {
  const efn = extend(fn);
  efn.__before.push(ext);
  return efn;
}
