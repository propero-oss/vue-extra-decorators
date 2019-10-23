import {VueClass} from "vue-class-component/lib/declarations";
import {RouteConfig} from "vue-router";
import {Vue} from "vue/types/vue";



export function normalizeRoute(it: Partial<RouteConfig> | string | undefined, target: VueClass<Vue>): RouteConfig {
  // No route => assume class name
  if (it == null) it = {
    path: '/' + target.name.toLowerCase(),
    name: target.name.toLowerCase(),
  };
  // String route => assume name
  if (typeof it === "string") it = {
    path: it,
    name: it.substr(1).replace(/[^A-Za-z0-9]/g, '-'),
  };
  it.component = target;
  return it as RouteConfig;
}
