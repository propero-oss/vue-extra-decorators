import {getRoutes, normalizeRoute} from "@/vue";
import {RouteConfig} from "vue-router";



/**
 * Registers a route for a given component
 * Decorator for components
 *
 * @param route - A route string or vue route config
 *
 * @remarks
 * If you want to use all registered routes, use {@link getRoutes}
 * as the value for `routes` of your router.
 *
 * Only works if the file is imported before the router is initialized.
 * Requires "vue-router"
 *
 * If you're looking for binding route parameters or queries to memgers
 * Use {@link RouteParam} {@link RouteQuery} {@link RouteName}.
 *
 * @example
 * ```TS
 * // pages/HelloPage.ts
 * @Route("/hello")
 * @Component({ template: `<div>Hello World</div>` })
 * export class HelloPage extends Vue {}
 *
 * // router.ts
 * import "./pages/HelloPage.ts"
 * import Vue from "vue";
 * import Router from "vue-router";
 * import { getRoutes } from "@propero/vue-extra-decorators";
 * Vue.use(Router);
 * export const router = new Router({
 *   mode: "history",
 *   base: process.env.BASE_URL,
 *   routes: getRoutes(),
 * });
 * ```
 *
 * {@link RouteParam} {@link RouteQuery} {@link RouteName}
 * @public
 */
export function Route(route?: string | Partial<RouteConfig>) {
  return function(target: any) {
    getRoutes().push(normalizeRoute(route, target));
    return target;
  };
}
