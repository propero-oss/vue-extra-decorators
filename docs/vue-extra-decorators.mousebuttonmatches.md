<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [mouseButtonMatches](./vue-extra-decorators.mousebuttonmatches.md)

## mouseButtonMatches() function

Creates a predicate that checks if the first parameter (assumed event) is a key event matching one of a given set of mouse buttons.

<b>Signature:</b>

```typescript
export declare function mouseButtonMatches(...buttons: MouseButton[]): (ev: MouseEvent) => boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  buttons | <code>MouseButton[]</code> | The mouse buttons to check against |

<b>Returns:</b>

`(ev: MouseEvent) => boolean`

A predicate that returns true, if the event button is one of the given mouse buttons.

## Remarks

This function is meant to be a condition for [If()](./vue-extra-decorators.if.md) alike methods.

## Example


```TS
  @If(mouseButtonMatches("LEFT", "MIDDLE"))
  private doSomething(ev: MouseEvent) {
    // ev is either left or middle click (or both!)
  }

```
[If()](./vue-extra-decorators.if.md) [IfNot()](./vue-extra-decorators.ifnot.md) [or()](./vue-extra-decorators.or.md) [and()](./vue-extra-decorators.and.md) [not()](./vue-extra-decorators.not.md) [keyMatches()](./vue-extra-decorators.keymatches.md) [wasPrevented()](./vue-extra-decorators.wasprevented.md)
