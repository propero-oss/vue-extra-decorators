import {createListenerDecorator} from "@/vue/handler/create-listener-decorator";

export function On(...events: string[]) {
  return createListenerDecorator(events, el => el);
}
