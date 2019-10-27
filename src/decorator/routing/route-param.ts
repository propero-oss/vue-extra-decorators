import {TypedVueDecorator} from "@/types";
import {calculatedProp} from "@/vue";



/**
 * Binds a route param to a class member.
 * Decorator for properties.
 * On setting the decorated property, a navigation will
 * occur to the current route with new params using
 * {@link Router#replace}.
 *
 * @remarks
 * If you want to bind a route name or query instead, use
 * {@link RouteName} or {@link RouteQuery}
 * If you want to bind a route to a component, use {@link Route}
 *
 * Requires "vue-router"
 *
 * @example
 * ```TS
 * @Route({ name: "hello", path: "/:firstName" })
 * @Component({ template: `<div>Hello {{thename || "World"}}</div>` })
 * export class HelloPage extends Vue {
 *
 *   @RouteParam("firstName")
 *   private thename!: string; // Inferred from URL
 *
 *   private nav() {
 *     this.thename = "Gustav"; // Navigates to '/Gustav'
 *   }
 * }
 * ```
 *
 * {@link RouteParam} {@link RouteQuery} {@link RouteName} {@link Route}
 * @public
 */
export function RouteParam(name: string): TypedVueDecorator<any> {
  return calculatedProp<string>(
    function() { return this.$route && this.$route.params[name]; },
    function(value) { this.$router.replace({ params: { ...this.$route.params, [name]: value } }); }
  );
}
