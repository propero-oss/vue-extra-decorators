import {createListenerDecorator} from "@/decorator/listener/create-listener-decorator";

export function OnDocument(...events: string[]) {
  return createListenerDecorator(events, () => document, true);
}
