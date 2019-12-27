import { extend } from "./extend";
import { transformResult } from "./transform-result";
import { TFunction } from "../types";

/**
 * Merges the return results of multiple functions.
 * When the returned function is called, both, the original
 * and the extension are called and then their results
 * are merged.
 * If the result is an object, the merged result will be a
 * combined object of both results, with the extended results
 * values overwriting the originals.
 * If the result is an array, the merged result will be the
 * first array, with the second one appended.
 * @param orig - The function to extend
 * @param extension - The result transformer
 * @returns The transformed function
 * @internal
 */
export function mergeResult<T extends TFunction>(orig: T | undefined, extension: T): T {
  if (!orig) return extend(extension);
  return transformResult(orig, ({ args, result, context }) => {
    const val = extension.apply(context, args);
    if (typeof val === "object") return { ...(result || {}), ...val };
    if (Array.isArray(val)) return [...((result as any) || []), ...val];
    if (typeof val === "function") return mergeResult(result, val);
    // tslint:disable-next-line:prefer-object-spread
    return Object.assign(result, val);
  }) as any;
}
