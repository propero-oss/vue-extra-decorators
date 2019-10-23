import {createElementHandler} from "@/vue/handler/create-element-handler";
import {createVueHandler} from "@/vue/handler/create-vue-handler";
import {append} from "@/function";
import {createDecorator} from "vue-class-component";

export function createListenerDecorator(
  events: string[],
  el: (cxt: any) => any,
  dom: boolean = false,
  attachOn: string[] = ["created"],
  detachOn: string[] = ["destroyed"],
) {
  return createDecorator(((options: any, key) => {
    const {on, off} = dom ? createElementHandler(events, el, key) : createVueHandler(events, el, key);
    attachOn.forEach(one => options[one] = append(options[one], on));
    detachOn.forEach(one => options[one] = append(options[one], off));
  }));
}
