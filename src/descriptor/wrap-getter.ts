import { convertToCalculated } from "./convert-to-calculated";
import { GetWrapper } from "../types";

/**
 * Wrap the get accessor of a calculated property in a wrapper function
 * @param desc - The descriptor to transform
 * @param wrapper - The wrapper function
 * @internal
 */
export function wrapGetter<T, C = any>(desc: TypedPropertyDescriptor<T>, wrapper: GetWrapper<T, any, C>) {
  if ("value" in desc) convertToCalculated(desc);
  const { get } = desc;
  desc.get = function(this: C) {
    return wrapper.call(this, get!.bind(this));
  };
  return desc;
}
