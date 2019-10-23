import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";
import {callbackToPromise} from "@/util";



export function NextMs() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    wrapFunction(desc, function({args, orig}) {
      return callbackToPromise(setTimeout, orig.bind(this, ...args), 0);
    });
  };
}
