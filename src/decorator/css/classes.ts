import {CalculatedPropertyDescriptor, wrapGetter} from "@/descriptor";
import {ClassesGetter, TFunction} from "@/types";



/**
 * Prefixes a css classes getter keys with a given
 * prefix and adds a css class to its body.
 * supports transforming object keys for conventional class names.
 *
 * @param prefix - The class prefix to prefix object keys with.
 *  If none is given, it will default to the converted class name.
 * @param infix  - The infix to insert between prefix and key.
 *  By default this will be an empty string.
 * @param converter - The converter used to convert object keys with.
 *  By default it does nothing.
 *
 * @remarks
 * This Decorator should be used on class getters.
 * There are various favors of this decorator preconfigured for certain styles:
 * {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 *
 * @example
 * ```TS
 * const lower = (str: string) => str.toLowerCase();
 * @Component({ template: `<div :class="classes">Hello World</div>` })
 * class MyVueComponent extends Vue {
 *   @Classes("my-prefix", "--", lower)
 *   private get classes() {
 *     return {
 *       alignLeft: true,
 *       alignRight: false
 *     }
 *   }
 * }
 * ```
 * Renders:
 * ```HTML
 * <div class="my-prefix my-prefix--alignleft">Hello World</div>
 * ```
 *
 * {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 * @public
 */
export function Classes(
  prefix?: string,
  infix: string = "",
  converter: TFunction<string, [string, boolean]> = s => s
) {
  return <T>(target: any, key: string, desc: CalculatedPropertyDescriptor<ClassesGetter<T>>) => {
    if (prefix == null) prefix = converter(target.constructor ? target.constructor.name : target.name, false);
    wrapGetter(desc, function(orig) {
      const val = orig();
      const result: Record<string, boolean> = {};
      if (prefix) result[prefix] = true;
      for (const [key, value] of Object.entries(val))
        result[prefix + infix + converter(key, true)] = value;
      return result;
    });
  };
}

/**
 * Creates a key converter function for use in {@link Classes}.
 * @param className - The transformation to apply to the class name
 * @param memberName - The transformation to apply to the object key
 *
 * {@link Classes} {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 * @public
 */
export function composeConverter(className: TFunction<string, [string]>, memberName: TFunction<string, [string]>) {
  return (name: string, member: boolean) => member ? memberName(name) : className(name);
}
