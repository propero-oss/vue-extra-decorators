import { TFunction, VoidFunction } from "../types";

/**
 * Returns a promise for the execution of a callback based function.
 * @param callbackFn - The callback based function.
 * @param fn - The result generator.
 * @param args - The args to pass to `callbackFn`.
 * @internal
 */
export function callbackToPromise<T extends TFunction>(
  callbackFn: VoidFunction<[TFunction, ...any[]]>,
  fn: T,
  ...args: any[]
): Promise<ReturnType<T>> {
  return resolveCallback(callbackFn, ...args).then(() => fn());
}

/**
 * Creates a promise for a callback based function.
 * @param fn - The callback based function.
 * @param args - The args passed to `fn`.
 * @internal
 */
export function resolveCallback(fn: VoidFunction<[TFunction, ...any[]]>, ...args: any[]): Promise<void> {
  return new Promise(resolve => fn(resolve, ...args));
}
