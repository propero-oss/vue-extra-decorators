import {TypedVueDecorator} from "@/types";
import {calculatedProp} from "@/vue";



export function RouteQuery(name: string): TypedVueDecorator<any> {
  return calculatedProp<string | (string | null)[]>(
    function() { return this.$route && this.$route.query[name]; },
    function(value) { this.$router.replace({ query: { ...this.$route.params, [name]: value } }); }
  );
}
