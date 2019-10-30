<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@propero/vue-extra-decorators](./vue-extra-decorators.md) &gt; [ClassesKebap](./vue-extra-decorators.classeskebap.md)

## ClassesKebap() function

Kebap case specific flavor of [Classes()](./vue-extra-decorators.classes.md) decorator. Prefixes a css classes getter keys with a given prefix and adds a css class to its body. transforms the class name and all members to kebap-case.

<b>Signature:</b>

```typescript
export declare function ClassesKebap(prefix?: string, infix?: string): ReturnType<typeof Classes>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  prefix | <code>string</code> | The class prefix to prefix object keys with. If none is given, it will default to the converted class name. |
|  infix | <code>string</code> | The infix to insert between prefix and key. By default this will be two dashes (<code>--</code>). |

<b>Returns:</b>

`ReturnType<typeof Classes>`

## Remarks

This Decorator should be used on class getters. There are various favors of this decorator preconfigured for certain styles: [ClassesCamel()](./vue-extra-decorators.classescamel.md) [ClassesKebap()](./vue-extra-decorators.classeskebap.md) [ClassesPascal()](./vue-extra-decorators.classespascal.md) [ClassesSnake()](./vue-extra-decorators.classessnake.md)

## Example


```TS
const lower = (str: string) => str.toLowerCase();
@Component({ template: `<div :class="classes">Hello World</div>` })
class MyVueComponent extends Vue {
  @ClassesKebap()
  private get classes() {
    return {
      alignLeft: true,
      alignRight: false
    }
  }
}

```
Renders:

```HTML
<div class="my-vue-component my-vue-component--align-left">Hello World</div>

```
[Classes()](./vue-extra-decorators.classes.md) [ClassesCamel()](./vue-extra-decorators.classescamel.md) [ClassesKebap()](./vue-extra-decorators.classeskebap.md) [ClassesPascal()](./vue-extra-decorators.classespascal.md) [ClassesSnake()](./vue-extra-decorators.classessnake.md)
