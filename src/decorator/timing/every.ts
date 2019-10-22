import {TFunction} from "@/types";
import {withSideEffects} from "@/vue/with-side-effects";


export function Every(ms: number = 1000) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    const interval = Symbol(`interval:${key}`);
    return withSideEffects(
      cxt => cxt[interval] = setInterval(() => cxt[key].bind(cxt), ms),
      cxt => clearInterval(cxt[interval])
    )(target, key);
  };
}
