import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";



export function IfNot(...fns: TFunction<boolean>[]) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    wrapFunction(desc, function({args, orig}) {
      if (fns.find(fn => !fn.apply(this, args))) return;
      return orig.apply(this, args);
    });
  };
}
