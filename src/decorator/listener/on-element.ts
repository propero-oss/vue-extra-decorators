import {createListenerDecorator} from "@/decorator/listener/create-listener-decorator";

export function OnElement(...events: string[]) {
  return createListenerDecorator(events, el => el.$el, false, ["mouted", "updated"], ["destroyed", "beforeUpdate"]);
}
