import { TypedPropertyDecorator } from "../../types";
import { calculatedProp } from "../../vue";
import { Vue } from "vue/types/vue";

export interface RouteParamOptions<T> {
  default?: T | ((this: Vue) => T);
  literal?: T;
  parser?: (val?: string) => T;
  serializer?: (val?: T) => string | undefined;
}

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
export function RouteParam(name: string, props: RouteParamOptions<any> = {}): TypedPropertyDecorator<string | undefined> {
  const value = props.literal != null ? () => props.literal : typeof props.default === "function" ? props.default : () => props.default;
  return calculatedProp<string | undefined>(
    function(this: any) {
      if (this.$route == null || this.$route.params[name] == null) return value ? value.call(this) : undefined;
      if (props.parser) return props.parser(this.$route.params[name]);
      return this.$route.params[name];
    },
    function(this: any, value) {
      const serialized = props.serializer ? props.serializer(value) : value;
      if (!this.$route || this.$route.params[name] !== serialized)
        this.$router.replace({ ...this.$route, params: { ...this.$route.params, [name]: serialized } });
    }
  );
}
