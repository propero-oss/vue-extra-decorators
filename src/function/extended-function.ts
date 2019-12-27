import { TFunction } from "../types";

export type ParamsTransformFunction<T extends TFunction> = (
  this: ThisParameterType<T>,
  params: { args: Parameters<T>; context: ThisParameterType<T> }
) => any[];
export type ResultTransformFunction<T extends TFunction> = (
  this: ThisParameterType<T>,
  params: { result: ReturnType<T>; args: Parameters<T>; context: ThisParameterType<T> }
) => any;
export type BeforeFunction<T extends TFunction> = (
  this: ThisParameterType<T>,
  params: { args: Parameters<T>; context: ThisParameterType<T> }
) => any;
export type AfterFunction<T extends TFunction> = (
  this: ThisParameterType<T>,
  params: { result: ReturnType<T>; args: Parameters<T>; context: ThisParameterType<T> }
) => any;

/**
 * The type of an extended function. Use {@link extend}
 * to convert a function to an extended function.
 * With extended functions you are able to modify params and
 * results and add before and after handlers.
 * @internal
 */
export interface ExtendedFunction<T extends () => unknown = any> extends TFunction<ReturnType<T>, Parameters<T>, ThisParameterType<T>> {
  __params: ParamsTransformFunction<T>[];
  __result: ResultTransformFunction<T>[];
  __before: BeforeFunction<T>[];
  __after: AfterFunction<T>[];
  __extend: true;
  __orig: T;
}
