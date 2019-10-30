<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [AfterFunction](./vue-extra-decorators.afterfunction.md)

## AfterFunction type

<b>Signature:</b>

```typescript
export declare type AfterFunction<T extends TFunction> = (this: ThisParameterType<T>, params: {
    result: ReturnType<T>;
    args: Parameters<T>;
    context: ThisParameterType<T>;
}) => any;
```