import {createListenerDecorator} from "@/decorator/listener/create-listener-decorator";

export function OnWindow(...events: string[]) {
  return createListenerDecorator(events, () => window, true);
}
