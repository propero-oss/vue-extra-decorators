<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [OnParent](./vue-extra-decorators.onparent.md)

## OnParent() function

Registers the decorated method as a vue event listener of the parent vue component. if more than one event is given, it will listen for multiple events All event parameters are passed as arguments to the decorated method.

<b>Signature:</b>

```typescript
export declare function OnParent(...events: string[]): import("vue-class-component").VueDecorator;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  events | <code>string[]</code> | The events to listen for |

<b>Returns:</b>

`import("vue-class-component").VueDecorator`

## Remarks

This decorator doesn't work for dom events, only for vue events. If you want to attach to dom events, use [OnParentElement()](./vue-extra-decorators.onparentelement.md) instead.

## Example


```TS
  @OnParent("toggle-fade")
  private onToggleFade() {
    // Called when this.$parent.$emit("toggle-fade") is called
  }

```
[On()](./vue-extra-decorators.on.md) [OnElement()](./vue-extra-decorators.onelement.md) [OnDocument()](./vue-extra-decorators.ondocument.md) [OnWindow()](./vue-extra-decorators.onwindow.md) [OnParent()](./vue-extra-decorators.onparent.md) [OnParentElement()](./vue-extra-decorators.onparentelement.md)
