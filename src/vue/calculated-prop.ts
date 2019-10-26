import {Getter, Setter, TypedVueDecorator} from "@/types";
import {optionsExtension} from "@/vue/options-extension";
import {Vue} from "vue/types/vue";



export function calculatedProp<T>(get: Getter<T, Vue>, set?: Setter<T, Vue>): TypedVueDecorator<T> {
  return optionsExtension<T>(key => {
    return { computed: { [key]: { get, set } } };
  });
}
