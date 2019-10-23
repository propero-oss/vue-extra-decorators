import {createListenerDecorator} from "@/vue/handler/create-listener-decorator";

export function OnElement(...events: string[]) {
  return createListenerDecorator(events, el => el.$el, false, ["mouted", "updated"], ["destroyed", "beforeUpdate"]);
}
