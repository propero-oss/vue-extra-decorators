import { TypedPropertyDecorator } from "../../types";
import { calculatedProp } from "../../vue";

/**
 * Binds the current route name to a class member.
 * Decorator for properties.
 * On setting the decorated property, a navigation will
 * occur to the set route name using {@link Router#replace}.
 *
 * @remarks
 * If you want to bind a route param or query instead, use
 * {@link RouteParam} or {@link RouteQuery}
 * If you want to bind a route to a component, use {@link Route}
 *
 * Requires "vue-router"
 *
 * @example
 * ```TS
 * @Route({ name: "hello", path: "/" })
 * @Component({ template: `<div>Hello World</div>` })
 * export class HelloPage extends Vue {
 *
 *   @RouteName()
 *   private routeName!: string; // Should be hello
 *
 *   private nav() {
 *     this.routeName = "otherView"; // Navigates to otherView
 *   }
 * }
 * ```
 *
 * {@link RouteParam} {@link RouteQuery} {@link RouteName} {@link Route}
 * @public
 */
export function RouteName(): TypedPropertyDecorator<string | undefined> {
  return calculatedProp<string | undefined>(
    function(this: any) {
      return this.$route && this.$route.name;
    },
    function(this: any, value) {
      if (!this.$route || this.$route.name !== value) this.$router.replace({ name: value });
    }
  );
}
