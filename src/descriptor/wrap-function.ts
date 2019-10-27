import {wrap, WrapperFunction} from "@/function";
import {TFunction} from "@/types";



/**
 * Wrap a function in a wrapper function
 * @param desc - The descriptor to transform
 * @param wrapper - The wrapper function
 * @internal
 */
export function wrapFunction<T extends TFunction>(desc: TypedPropertyDescriptor<T>, wrapper: WrapperFunction<T>) {
  desc.value = wrap(desc.value!, wrapper) as any as T;
}
