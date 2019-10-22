import {convertToCalculated} from "@/descriptor/convert-to-calculated";
import {SetWrapper} from "@/types";

export function wrapSetter<T, C = any>(desc: TypedPropertyDescriptor<T>, wrapper: SetWrapper<T, any, C>) {
  if ("value" in desc) convertToCalculated(desc);
  const {set} = desc;
  desc.set = function(this: C, value: any) { return wrapper.call(this, set!, value); };
  return desc;
}
