import { Constructor } from "../../types";
import { RouteConfig } from "./routes";
import { Vue } from "vue/types/vue";

/**
 * Normalizes a string / partial {@link RouteConfig} / class name into a {@link RouteConfig}
 * @param it - The config to normalize
 * @param target - The class that is the configs component.
 * @returns the normalized config.
 * @internal
 */
export function normalizeRoute(it: Partial<RouteConfig> | string | undefined, target: Constructor<Vue | any>): RouteConfig {
  // No route => assume class name
  if (it == null)
    it = {
      path: `/${target.name.toLowerCase()}`,
      name: target.name.toLowerCase()
    };
  // String route => assume name
  if (typeof it === "string")
    it = {
      path: it,
      name: it.substr(1).replace(/[^A-Za-z0-9]/g, "-")
    };
  it.component = target;
  return it as RouteConfig;
}
