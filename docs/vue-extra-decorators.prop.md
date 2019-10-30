<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [Prop](./vue-extra-decorators.prop.md)

## Prop() function

Declares a Vue property.

<b>Signature:</b>

```typescript
export declare function Prop<T>(opts?: PropOpts<T>, typeOverride?: Constructor<T>): TypedVueDecorator<T>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | <code>PropOpts&lt;T&gt;</code> | The property options to pass to vue, it can either be a constructor function like String or Number, an array of constructor functions or a property object [RecordPropOpts](./vue-extra-decorators.recordpropopts.md)<!-- -->. If a property object is given, in addition to the normal vue options some additional values can be provided. |
|  typeOverride | <code>Constructor&lt;T&gt;</code> | an optional type override if no type is specified using both provided options or reflected decorator metadata. |

<b>Returns:</b>

`TypedVueDecorator<T>`

## Remarks

There are various preconfigured flavors of this decorator for different types already available: [SProp()](./vue-extra-decorators.sprop.md) [NProp()](./vue-extra-decorators.nprop.md) [DProp()](./vue-extra-decorators.dprop.md) [BProp()](./vue-extra-decorators.bprop.md)

## Example


```TS
  @Prop()                    private simpleFlag!: boolean;
  @Prop(Number)              private simpleNumber!: number;
  @Prop([String, Number])    private stringOrNumber!: string | number;
  @Prop({default: null})     private defaultsToNull!: null | string;
  @Prop({literal: parseInt}) private parser!: (str: string) => number;
  @Prop({model: "change"})   private modelValue!: string;

```
[SProp()](./vue-extra-decorators.sprop.md) [NProp()](./vue-extra-decorators.nprop.md) [DProp()](./vue-extra-decorators.dprop.md) [BProp()](./vue-extra-decorators.bprop.md)
