import {createListenerDecorator} from "@/vue/handler/create-listener-decorator";

export function OnWindow(...events: string[]) {
  return createListenerDecorator(events, () => window, true);
}
