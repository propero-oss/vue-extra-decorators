import {ExtendedFunction} from "@/function/extended-function";

const enumerable = false;
const def = (it: any, name: string, value: any) => Object.defineProperty(it, name, {value, enumerable});

export function extend<T extends () => unknown>(fn?: T): ExtendedFunction<T> & T {
  if (fn && "__extended" in fn) return fn as any;

  const ext: ExtendedFunction<T> & T = function(this: ThisParameterType<T>, ...origArgs: Parameters<T>): ReturnType<T> {
    const context = this;
    const args = ext.__params.reduce((args: any, fn) => fn.call(this, {context, args}), origArgs);
    ext.__before.forEach(fn => fn.call(this, {context, args}));
    const result = ext.__orig.apply(this, args) as ReturnType<T>;
    ext.__after.forEach(fn => fn.call(this, {result, args, context}));
    return ext.__result.reduce((ret: any, fn) => fn.call(this, {context, args, result}), result);
  } as any;

  def(ext, "__after", []);
  def(ext, "__before", []);
  def(ext, "__params", []);
  def(ext, "__result", []);
  def(ext, "__orig", fn || (() => undefined));
  def(ext, "__extend", true);

  return ext;
}
