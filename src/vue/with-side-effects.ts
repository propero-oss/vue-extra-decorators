import { append } from "../function";
import { TypedPropertyDecorator } from "../types";
import { createDecorator } from "vue-class-component";

/**
 * Creates a vue decorator that requires setup and teardown
 * @param on - The setup of the decorator
 * @param off - The teardown of the decorator
 * @internal
 */
export function withSideEffects(on: (cxt: any, key: string) => any, off: (cxt: any, key: string) => any): TypedPropertyDecorator<any> {
  return createDecorator((options, key) => {
    options.created = append(options.created, function() {
      on.call(this, this, key);
    });
    options.destroyed = append(options.destroyed, function() {
      off.call(this, this, key);
    });
    return options;
  });
}
