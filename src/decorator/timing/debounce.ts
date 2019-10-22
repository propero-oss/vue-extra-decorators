import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";


export function Debounce(ms: number = 200) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    const lastCall = Symbol(`debounce:${key}`);

    wrapFunction(desc, function({args, orig}) {
      const now = Date.now();
      const last = this[lastCall] || 0;
      this[lastCall] = now;
      if (last + ms <= now)
        orig.apply(this, args);
    });

    return desc;
  };
}
