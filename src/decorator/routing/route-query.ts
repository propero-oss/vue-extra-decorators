import { TypedPropertyDecorator } from "../../types";
import { calculatedProp } from "../../vue";
import { Vue } from "vue/types/vue";

export interface RouteQueryOptions<T> {
  default?: T | ((this: Vue) => T);
  literal?: T;
  parser?: (val: string | (string | null)[]) => T;
  serializer?: (val?: T) => string | (string | null)[];
}

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
export function RouteQuery<T = any>(name: string, props: RouteQueryOptions<T> = {}): TypedPropertyDecorator<T> {
  const value: any =
    props.literal != null ? () => props.literal : typeof props.default === "function" ? props.default : () => props.default;
  return calculatedProp<T>(
    function(this: any) {
      if (this.$route == null || this.$route.query[name] == null) return value ? value.call(this) : undefined;
      if (props.parser) return props.parser(this.$route.query[name]);
      return this.$route.query[name] as any;
    },
    function(this: any, value) {
      const serialized = props.serializer ? props.serializer(value) : value;
      if (!this.$route || this.$route.query[name] !== serialized)
        this.$router.replace({ ...this.$route, query: { ...this.$route.query, [name]: serialized as any } });
    }
  );
}
