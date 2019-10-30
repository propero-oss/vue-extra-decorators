<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [RouteName](./vue-extra-decorators.routename.md)

## RouteName() function

Binds the current route name to a class member. Decorator for properties. On setting the decorated property, a navigation will occur to the set route name using .

<b>Signature:</b>

```typescript
export declare function RouteName(): TypedVueDecorator<string>;
```
<b>Returns:</b>

`TypedVueDecorator<string>`

## Remarks

If you want to bind a route param or query instead, use [RouteParam()](./vue-extra-decorators.routeparam.md) or [RouteQuery()](./vue-extra-decorators.routequery.md) If you want to bind a route to a component, use [Route()](./vue-extra-decorators.route.md)

Requires "vue-router"

## Example


```TS
@Route({ name: "hello", path: "/" })
@Component({ template: `<div>Hello World</div>` })
export class HelloPage extends Vue {

  @RouteName()
  private routeName!: string; // Should be hello

  private nav() {
    this.routeName = "otherView"; // Navigates to otherView
  }
}

```
[RouteParam()](./vue-extra-decorators.routeparam.md) [RouteQuery()](./vue-extra-decorators.routequery.md) [RouteName()](./vue-extra-decorators.routename.md) [Route()](./vue-extra-decorators.route.md)
