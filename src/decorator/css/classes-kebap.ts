import {Classes} from "@/decorator/css/classes";
import {pascalToKebap} from "@/util";



/**
 * Kebap case specific flavor of {@link Classes} decorator.
 * Prefixes a css classes getter keys with a given
 * prefix and adds a css class to its body.
 * transforms the class name and all members to kebap-case.
 *
 * @param prefix - The class prefix to prefix object keys with.
 *  If none is given, it will default to the converted class name.
 * @param infix  - The infix to insert between prefix and key.
 *  By default this will be two dashes (`--`).
 *
 * @remarks
 * This Decorator should be used on class getters.
 * There are various favors of this decorator preconfigured for certain styles:
 * {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 *
 * Example:
 * ```TS
 * const lower = (str: string) => str.toLowerCase();
 * @Component({ template: `<div :class="classes">Hello World</div>` })
 * class MyVueComponent extends Vue {
 *   @ClassesKebap()
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
 * <div class="my-vue-component my-vue-component--align-left">Hello World</div>
 * ```
 *
 * {@link Classes} {@link ClassesCamel} {@link ClassesKebap} {@link ClassesPascal} {@link ClassesSnake}
 * @public
 */
export function ClassesKebap(prefix?: string, infix: string = "--"): ReturnType<typeof Classes> {
  return Classes(prefix, infix, pascalToKebap);
}
