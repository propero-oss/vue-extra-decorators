import {createDecorator} from "vue-class-component";
import {append} from "@/function";
import {createElementHandler} from "@/decorator/listener/create-element-handler";



export function OnElement(...events: string[]) {
  return createDecorator(((options, key) => {
    const {on, off} = createElementHandler(events, el => el.$el, key);
    options.mounted = append(options.mounted!, on);
    options.updated = append(options.updated!, on);
    options.destroyed = append(options.destroyed!, off);
    options.beforeUpdate = append(options.beforeUpdate!, off);
    return options;
  }));
}
