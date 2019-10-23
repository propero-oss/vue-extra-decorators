import {TFunction, VoidFunction} from "@/types";


export function callbackToPromise<T extends TFunction>(
  callbackFn: VoidFunction<[TFunction, ...any[]]>,
  fn: T, ...args: any[]
): Promise<ReturnType<T>> {
  return resolveCallback(callbackFn, ...args).then(() => fn());
}

export function resolveCallback(fn: VoidFunction<[TFunction, ...any[]]>, ...args: any[]): Promise<void> {
  return new Promise(resolve => fn(resolve, ...args));
}
