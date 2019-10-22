import {append} from "@/function";
import {createVueHandler} from "@/decorator/listener/create-vue-handler";
import {createDecorator} from "vue-class-component";

export function On(...events: string[]) {
  return createDecorator((options, key) => {
    const {on, off} = createVueHandler(events, el => el, key);
    options.created   = append(options.created!, on);
    options.destroyed = append(options.destroyed!, off);
    return options;
  });
}
