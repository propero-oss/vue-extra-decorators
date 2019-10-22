import {createListenerDecorator} from "@/decorator/listener/create-listener-decorator";

export function OnParent(...events: string[]) {
  return createListenerDecorator(events, el => el.$parent);
}
