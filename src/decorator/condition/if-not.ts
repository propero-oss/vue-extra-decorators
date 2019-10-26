import {wrapFunction} from "@/descriptor";
import {TFunction} from "@/types";



/**
 * Wraps a function and only calls through if a given set of predicates return falsy
 *
 * @param fns - The predicates to check before executing the decorated function
 *
 * @remarks
 * Example:
 * ```TS
 *   @IfNot(wasPrevented)
 *   private doSomething(ev: Event) {
 *     // only executed if wasPrevented returns false
 *   }
 * ```
 * {@link If} {@link or} {@link and} {@link not}
 * @public
 */
export function IfNot(...fns: TFunction<boolean>[]) {
  return (target: any, key: string, desc: TypedPropertyDescriptor<TFunction>) => {
    wrapFunction(desc, function({args, orig}) {
      if (fns.find(fn => fn.apply(this, args))) return;
      return orig.apply(this, args);
    });
  };
}
