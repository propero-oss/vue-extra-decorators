import {extend} from "@/function/extend";
import {transformResult} from "@/function/transform-result";
import {TFunction} from "@/types";



export function mergeResult<T extends TFunction>(orig: T | undefined, extension: T): T {
  if (!orig) return extend(extension);
  return transformResult(orig, ({args, result, context}) => {
    const val = extension.apply(context, args);
    if (typeof val === "object")
      return {...(result || {}), ...val};
    if (Array.isArray(val))
      return [...(result as any || []), ...val];
    if (typeof val === "function")
      return mergeResult(result, val);
    // tslint:disable-next-line:prefer-object-spread
    return Object.assign(result, val);
  }) as any;
}
