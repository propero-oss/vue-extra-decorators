import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";



export function LimitToFrames() {
  return (target: any, propertyKey: string | symbol, desc: TypedPropertyDescriptor<TFunction>) => {
    const frame = Symbol(`Frame: ${propertyKey as string}`);

    wrapFunction(desc, function({ args, orig }) {
      if (this[frame] != null) return;
      this[frame] = requestAnimationFrame(() => {
        delete this[frame];
        orig.apply(this, args);
      });
    });

    return desc;
  };
}
