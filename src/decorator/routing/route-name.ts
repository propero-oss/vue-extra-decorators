import {TypedVueDecorator} from "@/types";
import {calculatedProp} from "@/vue";



export function RouteName(): TypedVueDecorator<string> {
  return calculatedProp<string | undefined>(
    function() { return this.$route && this.$route.name; },
    function(value) { this.$router.replace({ name: value }); }
  );
}
