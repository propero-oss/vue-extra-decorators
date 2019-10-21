import {wrap, WrapperFunction} from "@/function/index";

export function wrapSetter<T, C = any, SETTER extends (this: C, value: T) => void = (this: C, value: T) => void>(
  desc: TypedPropertyDescriptor<T>, wrapper: WrapperFunction<SETTER>
) {
  desc.set = wrap(desc.set! as SETTER, wrapper) as any as SETTER;
}
