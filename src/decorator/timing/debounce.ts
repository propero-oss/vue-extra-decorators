import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";



export function Debounce(ms: number = 200) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    const timeout = Symbol(`debounce:${key}`);

    wrapFunction(desc, function({args, orig}) {
      if (this[timeout] != null)
        clearTimeout(this[timeout]);
      this[timeout] = setTimeout(() => {
        delete this[timeout];
        orig.apply(this, args);
      }, ms);
    });

    return desc;
  };
}
