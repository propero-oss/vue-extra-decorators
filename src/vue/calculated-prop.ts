import {Getter, Setter, TypedVueDecorator} from "@/types";
import {optionsExtension} from "@/vue/options-extension";
import {Vue} from "vue/types/vue";



/**
 * Creates a vue calculated property decorator
 * @param get - The property getter
 * @param set - The property setter
 * @internal
 */
export function calculatedProp<T>(get: Getter<T, Vue>, set?: Setter<T, Vue>): TypedVueDecorator<T> {
  return optionsExtension<T>(key => {
    return { computed: { [key]: { get, set } } };
  });
}
