import { TypedPropertyDecorator } from "../../types";
import { calculatedProp } from "../../vue";

/**
 * Creates an accessor to a Vue reference.
 * @param ref - The reference to bind to.
 * @example
 * ```TS
 * @Component({ template: `<div><div ref="example">Hello World</div></div>` })
 * class MyVueComponent extends Vue {
 *   @Ref("example") private example!: HTMLDivElement;
 *   private someMethod() {
 *     const {scrollLeft, clientWidth} = this.example;
 *     this.example.scrollTo({ left: scrollLeft + clientWidth * .6, behavior: "smooth" });
 *   }
 * }
 * ```
 * @public
 */
export function Ref(ref: string): TypedPropertyDecorator<any> {
  return calculatedProp(function() {
    return this.$refs[ref as any];
  });
}
