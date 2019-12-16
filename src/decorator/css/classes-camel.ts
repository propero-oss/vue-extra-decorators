import {Classes, composeConverter} from "@/decorator/css/classes";
import {camelToPascal, pascalToCamel} from "@/util";



const converter = composeConverter(pascalToCamel, camelToPascal);

/**
 * Camel case specific flavor of {@link Classes} decorator.
 * Prefixes a css classes getter keys with a given
 * prefix and adds a css class to its body.
 * transforms the class name to camelCase and all members to PascalCase.
 *
 * @param prefix - The class prefix to prefix object keys with.
 *  If none is given, it will default to the converted class name.
 * @param infix  - The infix to insert between prefix and key.
 *  By default this will be an empty string.
 *
 * @remarks
 * This Decorator should be used on class getters.
 * There are various favors of this decorator preconfigured for certain styles:
 * {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 *
 * @example
 * ```TS
 * @Component({ template: `<div :class="classes">Hello World</div>` })
 * class MyVueComponent extends Vue {
 *   @ClassesCamel()
 *   private get classes() {
 *     return {
 *       alignLeft: true,
 *       alignRight: false,
 *       direction: "left"
 *     }
 *   }
 * }
 * ```
 * Renders:
 * ```HTML
 * <div class="myVueComponent myVueComponentAlignLeft myVueComponentDirectionLeft">Hello World</div>
 * ```
 *
 * {@link Classes} {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 * @public
 */
export function ClassesCamel(prefix?: string, infix?: string): ReturnType<typeof Classes> {
  return Classes(prefix, infix, converter);
}
