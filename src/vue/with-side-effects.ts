import {append} from "@/function";
import {createDecorator} from "vue-class-component";



export function withSideEffects(on: ((cxt: any, key: string) => any), off: ((cxt: any, key: string) => any)) {
  return createDecorator((options, key) => {
    options.created   = append(options.created,   function() {  on.call(this, this, key); });
    options.destroyed = append(options.destroyed, function() { off.call(this, this, key); });
    return options;
  });
}



