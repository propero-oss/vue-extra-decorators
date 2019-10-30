<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [and](./vue-extra-decorators.and.md)

## and() function

Merges multiple predicates into one.

<b>Signature:</b>

```typescript
export declare function and(...fns: TFunction<boolean>[]): TFunction<boolean>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fns | <code>TFunction&lt;boolean&gt;[]</code> | The predicates to combine |

<b>Returns:</b>

`TFunction<boolean>`

A predicate that returns true if all other predicates have returned true.

## Remarks

This function is meant to be a condition for [If()](./vue-extra-decorators.if.md) alike methods.

## Example


```TS
  @If(and(isInPath("drawer"), not(wasPrevented)))
  private doSomething(ev: Event) {
    // only executed if isInPath("drawer") and not(wasPrevented) return true
  }

```
[If()](./vue-extra-decorators.if.md) [IfNot()](./vue-extra-decorators.ifnot.md) [or()](./vue-extra-decorators.or.md) [not()](./vue-extra-decorators.not.md)
