import {Constructor, SingleArgFunction, TFunction, TypedVueDecorator} from "@/types";
import {optionsExtension} from "@/vue";

export type RecordPropOpts<T> = {
  type?: Constructor<T> | Constructor<any>[];
  default?: T | TFunction<T>;
  literal?: T;
  required?: boolean;
  twoWay?: boolean;
  validator?: SingleArgFunction<boolean, T>;
  model?: boolean | string
};

export type PropOpts<T> = Constructor<T> | Constructor<any>[] | RecordPropOpts<T>;

export function isTypeLiteralOption<T>(opts: PropOpts<T>): opts is (Constructor<T> | Constructor<any>[]) {
  return typeof opts === "function" || Array.isArray(opts);
}

export function Prop<T>(opts: PropOpts<T> = {}, typeOverride?: Constructor<T>): TypedVueDecorator<T> {

  // Type literal to record def
  if (isTypeLiteralOption<T>(opts))
    opts = { type: opts };

  const {default: def, literal, model} = opts;

  // Possible to pass arrays and objects as default values
  if ("default" in opts && typeof def === "object" || Array.isArray(def))
    opts.default = () => def as T;

  // Possible to pass literal functions as default values
  if (opts.literal) opts.default = () => literal as T;
  delete opts.literal;
  delete opts.model;

  return optionsExtension((key, allOpts, theType) => {
    // Metadata if not overridden
    if (!(opts as any).type) (opts as any).type = typeOverride || theType;
    const props = { [key]: opts };
    // Simple Property
    if (!model) return { props };

    if (allOpts.model)
      throw new Error("Cannot define more than one model");
    // Model Property
    return { props, model: {
      prop: key,
      event: typeof model === "string" ? model : `update:${key}`
    }};
  });
}
