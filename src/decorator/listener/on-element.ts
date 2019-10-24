import {createListenerDecorator} from "@/vue/handler/create-listener-decorator";

export function OnElement(...events: string[]) {
  return createListenerDecorator(events, el => el.$el, true, ["mouted", "updated"], ["destroyed", "beforeUpdate"]);
}
