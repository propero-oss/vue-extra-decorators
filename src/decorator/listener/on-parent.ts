import {append} from "@/function";
import {createVueHandler} from "@/decorator/listener/create-vue-handler";
import {createDecorator} from "vue-class-component";

export function OnParent(...events: string[]) {
  return createDecorator((options, key) => {
    const {on, off} = createVueHandler(events, el => el.$parent, key);
    options.mounted = append(options.mounted!, on);
    options.destroyed = append(options.destroyed!, off);
    return options;
  });
}
