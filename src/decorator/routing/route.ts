import {getRoutes, normalizeRoute} from "@/vue";
import {RouteConfig} from "vue-router";



export function Route(route?: string | Partial<RouteConfig>) {
  return function(target: any) {
    getRoutes().push(normalizeRoute(route, target));
    return target;
  }
}
