import { Getter, Setter, TypedPropertyDecorator } from "../types";
import { optionsExtension } from "./options-extension";
import { Vue } from "vue/types/vue";

/**
 * Creates a vue calculated property decorator
 * @param get - The property getter
 * @param set - The property setter
 * @internal
 */
export function calculatedProp<T>(get: Getter<T, Vue>, set?: Setter<T, Vue>): TypedPropertyDecorator<T> {
  return optionsExtension<T>(key => {
    return { computed: { [key]: set ? { get, set } : { get } } };
  });
}
