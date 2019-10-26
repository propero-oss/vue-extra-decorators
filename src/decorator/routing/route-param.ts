import {TypedVueDecorator} from "@/types";
import {calculatedProp} from "@/vue";



export function RouteParam(name: string): TypedVueDecorator<any> {
  return calculatedProp<string>(
    function() { return this.$route && this.$route.params[name]; },
    function(value) { this.$router.replace({ params: { ...this.$route.params, [name]: value } }); }
  );
}
