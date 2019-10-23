import {createListenerDecorator} from "@/vue/handler/create-listener-decorator";

export function OnParent(...events: string[]) {
  return createListenerDecorator(events, el => el.$parent);
}
