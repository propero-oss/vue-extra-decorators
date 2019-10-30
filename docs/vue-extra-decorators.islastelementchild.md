<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [isLastElementChild](./vue-extra-decorators.islastelementchild.md)

## isLastElementChild() function

A predicate that checks if the first parameter (assumed event) is the last child element of its parent element.

<b>Signature:</b>

```typescript
export declare function isLastElementChild(ev: Event): boolean | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  ev | <code>Event</code> | The event to check against |

<b>Returns:</b>

`boolean | null`

true, if the event's target is the last child of its parent.

## Remarks

This function is meant to be a condition for [If()](./vue-extra-decorators.if.md) alike methods. If you want to check if a node is the last child node of its parent, use [isLastChild()](./vue-extra-decorators.islastchild.md) instead.

## Example


```TS
  @If(isLastElementChild)
  private doSomething(ev: Event) {
    // ev.target is it the last child of its parent
  }

```
[If()](./vue-extra-decorators.if.md) [IfNot()](./vue-extra-decorators.ifnot.md) [or()](./vue-extra-decorators.or.md) [and()](./vue-extra-decorators.and.md) [not()](./vue-extra-decorators.not.md) [isFirstChild()](./vue-extra-decorators.isfirstchild.md) [isLastChild()](./vue-extra-decorators.islastchild.md) [isFirstElementChild()](./vue-extra-decorators.isfirstelementchild.md)
