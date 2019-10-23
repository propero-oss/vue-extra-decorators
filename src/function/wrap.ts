import {extend} from "@/function/extend";
import {ExtendedFunction} from "@/function/extended-function";
import {TFunction} from "@/types";

export type WrapperFunction<T extends TFunction = any, THIS extends ThisParameterType<T> = any>
  = TFunction<ReturnType<T>, [{args: Parameters<T>, orig: T}], THIS>;


export function wrap<T extends TFunction>(fn: T | undefined, ext: WrapperFunction<T>): ExtendedFunction<T> {
  return extend(function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    return ext.call(this, {args, orig: fn || (() => undefined) as any});
  } as any as T);
}
