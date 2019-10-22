import {convertToCalculated} from "@/descriptor/convert-to-calculated";
import {GetWrapper} from "@/types";

export function wrapGetter<T, C = any>(desc: TypedPropertyDescriptor<T>, wrapper: GetWrapper<T, any, C>) {
  if ("value" in desc) convertToCalculated(desc);
  const {get} = desc;
  desc.get = function(this: C) { return wrapper.call(this, get!.bind(this)); };
  return desc;
}
