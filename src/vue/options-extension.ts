import {EntriesOf, TypedVueDecorator} from "@/types";
import {extendOptionMember} from "@/vue/extend-option-member";
import {ComponentOptions} from "vue";
import {createDecorator} from "vue-class-component";
import {Vue} from "vue/types/vue";



/**
 * Creates a vue decorator extending vue component options by the result of a factory function.
 * @param members - The factory function constructing the properties to merge.
 * @internal
 */
export function optionsExtension<P = any, T extends ComponentOptions<Vue> = ComponentOptions<Vue>>(
  members: (key: string, options: T, type: any) => Partial<T>
): TypedVueDecorator<P> {
  return ((target: any, key: string) => {
    const theType = Reflect && "getMetadata" in Reflect && (Reflect as any).getMetadata("design:type", target, key) || undefined;
    return createDecorator(((options, key) => {
      for (const [member, value] of Object.entries(members(key, options as T, theType)) as EntriesOf<T>)
        extendOptionMember(options as T, member, value!);
      return options;
    }))(target, key);
  }) as TypedVueDecorator<P>;
}
