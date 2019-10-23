import {Getter, Setter} from "@/types";
import {createDecorator} from "vue-class-component";
import {Vue} from "vue/types/vue";



export function calculatedProp<T>(get: Getter<T, Vue>, set?: Setter<T, Vue>) {
  return createDecorator(((options, key) => {
    (options.computed || (options.computed = {}))[key] = { get, set };
  }));
}
