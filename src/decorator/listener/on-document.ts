import {createDecorator} from "vue-class-component";
import {append} from "@/function";
import {createElementHandler} from "@/decorator/listener/create-element-handler";

export function OnDocument(...events: string[]) {
  return createDecorator((options, key) => {
    const {on, off} = createElementHandler(events, () => document, key);
    options.created = append(options.created!, on);
    options.destroyed = append(options.destroyed!, off);
    return options;
  });
}
