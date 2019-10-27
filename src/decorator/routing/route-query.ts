import {TypedVueDecorator} from "@/types";
import {calculatedProp} from "@/vue";



/**
 * Binds a route query to a class member.
 * Decorator for properties.
 * On setting the decorated property, a navigation will
 * occur to the current route with new query using
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
 * @Route({ name: "hello", path: "/" })
 * @Component({ template: `<div>Hello {{thename || "World"}}</div>` })
 * export class HelloPage extends Vue {
 *
 *   @RouteQuery("firstName")
 *   private thename!: string; // Inferred from URL
 *
 *   private nav() {
 *     this.thename = "Gustav"; // Navigates to '/?firstName=Gustav'
 *   }
 * }
 * ```
 *
 * {@link RouteParam} {@link RouteQuery} {@link RouteName} {@link Route}
 * @public
 */
export function RouteQuery(name: string): TypedVueDecorator<any> {
  return calculatedProp<string | (string | null)[]>(
    function() { return this.$route && this.$route.query[name]; },
    function(value) { this.$router.replace({ query: { ...this.$route.params, [name]: value } }); }
  );
}
