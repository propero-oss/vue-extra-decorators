import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";
import {callbackToPromise} from "@/util";

export function NextFrame() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    wrapFunction(desc, function({args, orig}) {
      return callbackToPromise(requestAnimationFrame, orig.bind(this, ...args));
    });
  };
}
