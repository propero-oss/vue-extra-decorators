import {wrap, WrapperFunction} from "@/function";
import {TFunction} from "@/types";

export function wrapFunction<T extends TFunction>(desc: TypedPropertyDescriptor<T>, wrapper: WrapperFunction<T>) {
  desc.value = wrap(desc.value!, wrapper) as any as T;
}
