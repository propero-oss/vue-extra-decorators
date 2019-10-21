import {wrap, WrapperFunction} from "@/function/index";
import {TFunction} from "@/types/index";

export function wrapFunction<T extends TFunction>(desc: TypedPropertyDescriptor<T>, wrapper: WrapperFunction<T>) {
  desc.value = wrap(desc.value!, wrapper) as any as T;
}
