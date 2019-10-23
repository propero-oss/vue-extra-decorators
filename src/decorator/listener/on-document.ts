import {createListenerDecorator} from "@/vue/handler/create-listener-decorator";

export function OnDocument(...events: string[]) {
  return createListenerDecorator(events, () => document, true);
}
