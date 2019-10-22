import {TFunction} from "@/types";
import {withSideEffects} from "@/vue/with-side-effects";


export function EveryFrame() {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    const id = Symbol(`frame:${key}`);

    function scheduler(cxt: any, key: string) {
      cxt[id] = requestAnimationFrame(() => {
        cxt[key].call(cxt);
        scheduler(cxt, key);
      });
    }

    return withSideEffects(
      cxt => scheduler(cxt, key),
      cxt => cancelAnimationFrame(cxt[id])
    )(target, key);
  };
}
