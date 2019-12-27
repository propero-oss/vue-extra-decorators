/**
 * Configuration for a route, stripped down version of the actial config
 * used in "vue-router".
 *
 * @remarks
 * All options valid in the route config of vue-router except component
 * are allowed and working.
 *
 * {@link RouteParam} {@link RouteQuery} {@link RouteName}
 * @public
 */
export type RouteConfig = { name?: string; path?: string; meta?: any } & any;

const routes: RouteConfig[] = [];

/**
 * Returns an array of routes registered with {@link Route}.
 * @internal
 */
export function getRoutes() {
  return routes;
}
