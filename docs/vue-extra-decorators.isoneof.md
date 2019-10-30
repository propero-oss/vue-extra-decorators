<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [isOneOf](./vue-extra-decorators.isoneof.md)

## isOneOf() function

Create a predicate that checks if the first parameter of the returned function is equal to one of many a given values at a certain json path.

<b>Signature:</b>

```typescript
export declare function isOneOf(path: string, ...values: any[]): (data: any) => boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | <code>string</code> | the path to look up in the returned object. |
|  values | <code>any[]</code> | the value to check equality against. |

<b>Returns:</b>

`(data: any) => boolean`

A predicate for use in `@If` and `@IfNot`

## Remarks

This function is meant to be a condition for [If()](./vue-extra-decorators.if.md) alike methods. If you only want to check against a single value, use [isEqual()](./vue-extra-decorators.isequal.md) instead.

## Example


```TS
  @If(isOneOf("foo.bar", "baz", "qux"))
  private doSomething(foo: any) {
    // foo.bar is either "baz" or "qux"
  }

```
[If()](./vue-extra-decorators.if.md) [IfNot()](./vue-extra-decorators.ifnot.md) [or()](./vue-extra-decorators.or.md) [and()](./vue-extra-decorators.and.md) [not()](./vue-extra-decorators.not.md)
