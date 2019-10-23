import {calculatedProp} from "@/vue";



export function RouteName() {
  return calculatedProp<string | undefined>(
    function() { return this.$route && this.$route.name; },
    function(value) { this.$router.replace({ name: value }); }
  );
}
