import { Classes, composeConverter } from "./classes";
import { camelToPascal } from "../../util";

const converter = composeConverter(camelToPascal, camelToPascal);

/**
 * Pascal case specific flavor of {@link Classes} decorator.
 * Prefixes a css classes getter keys with a given
 * prefix and adds a css class to its body.
 * transforms the class name and all members to PascalCase.
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
 *   @ClassesPascal()
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
 * <div class="MyVueComponent MyVueComponentAlignLeft MyVueComponentDirectionLeft">Hello World</div>
 * ```
 *
 * {@link Classes} {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 * @public
 */
export function ClassesPascal(prefix?: string, infix?: string): ReturnType<typeof Classes> {
  return Classes(prefix, infix, converter);
}
