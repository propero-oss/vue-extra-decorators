<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [isEqual](./vue-extra-decorators.isequal.md)

## isEqual() function

Create a predicate that checks if the first parameter of the returned function is equal to a given value at a certain json path.

<b>Signature:</b>

```typescript
export declare function isEqual(path: string, value: any): (data: any) => boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | <code>string</code> | the path to look up in the returned object. |
|  value | <code>any</code> | the value to check equality against. |

<b>Returns:</b>

`(data: any) => boolean`

A predicate for use in `@If` and `@IfNot`

## Remarks

This function is meant to be a condition for [If()](./vue-extra-decorators.if.md) alike methods. If you want to check against a set of values, use [isOneOf()](./vue-extra-decorators.isoneof.md) instead.

## Example


```TS
  @If(isEqual("foo.bar", "baz"))
  private doSomething(foo: any) {
    // foo.bar is "baz"
  }

```
[If()](./vue-extra-decorators.if.md) [IfNot()](./vue-extra-decorators.ifnot.md) [or()](./vue-extra-decorators.or.md) [and()](./vue-extra-decorators.and.md) [not()](./vue-extra-decorators.not.md)
