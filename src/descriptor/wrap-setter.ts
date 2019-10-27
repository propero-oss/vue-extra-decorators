import {convertToCalculated} from "@/descriptor/convert-to-calculated";
import {SetWrapper} from "@/types";



/**
 * Wrap the set accessor of a calculated property in a wrapper function
 * @param desc - The descriptor to transform
 * @param wrapper - The wrapper function
 * @internal
 */
export function wrapSetter<T, C = any>(desc: TypedPropertyDescriptor<T>, wrapper: SetWrapper<T, any, C>) {
  if ("value" in desc) convertToCalculated(desc);
  const {set} = desc;
  desc.set = function(this: C, value: any) { return wrapper.call(this, set!, value); };
  return desc;
}
