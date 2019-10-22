import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";

export function NextTick() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    wrapFunction(desc, function({args, orig}) {
      return this.$nextTick().then(() => orig.apply(this, args));
    });
  }
}
