import {createListenerDecorator} from "@/decorator/listener/create-listener-decorator";

export function On(...events: string[]) {
  return createListenerDecorator(events, el => el);
}
