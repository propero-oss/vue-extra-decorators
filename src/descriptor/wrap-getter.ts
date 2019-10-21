import {wrap, WrapperFunction} from "@/function/index";

export function wrapGetter<T, C = any, GETTER extends (this: C) => T = (this: C) => T>(
  desc: TypedPropertyDescriptor<T>, wrapper: WrapperFunction<GETTER>
) {
  const {get, value} = desc;
  const getter = (get ? get : () => value!) as GETTER;
  desc.get = wrap(getter, wrapper);
  delete desc.value;
}
