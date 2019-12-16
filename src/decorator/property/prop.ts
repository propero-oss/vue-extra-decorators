import {Constructor, SingleArgFunction, TFunction, TypedVueDecorator} from "@/types";
import {isTypeLiteral} from "@/vue/properties/is-type-literal-options";
import {optionsExtension} from "@/vue";



/**
 * Parameters of the {@link Prop | @Prop} decorator and its flavors
 * @public
 */
export interface RecordPropOpts<T> {
  /**
   * The type of the property. Should be a constructor function or
   * an array of constructor functions.
   * @public
   */
  type?: Constructor<T> | Constructor<any>[];
  /**
   * A default value or a function constructing a default value.
   * Arrays or objects are supported, if you want to use a literal
   * function as a default value, use literal instead.
   * @public
   */
  default?: T | TFunction<T>;
  /**
   * A default value. If a function is given, it will be passed as a
   * literal value instead of being executed as a factory.
   * @public
   */
  literal?: T;
  /**
   * Whether or not the property is required.
   * @public
   */
  required?: boolean;
  /**
   * Whether or not the property is a two way property.
   * @public
   */
  twoWay?: boolean;
  /**
   * A validator function returning true if a given value is valid
   * and false otherwise.
   * @public
   */
  validator?: SingleArgFunction<boolean, T>;
  /**
   * Marks this property as a model property, if true is given, it
   * will use the event 'update:PROPNAME' as the binding trigger,
   * where PROPNAME is the name of the decorated property. If a
   * string is given, it will be used in place of the event instead.
   * @public
   */
  model?: boolean | string;
}

/**
 * Parameters of the {@link Prop | @Prop} decorator and its flavors
 * @public
 */
export type PropOpts<T> = Constructor<T> | Constructor<any>[] | RecordPropOpts<T>;

/**
 * Declares a Vue property.
 * @param opts - The property options to pass to vue, it can either be
 *  a constructor function like String or Number, an array of constructor
 *  functions or a property object {@link RecordPropOpts}.
 *  If a property object is given, in addition to the normal vue options
 *  some additional values can be provided.
 * @param typeOverride - an optional type override if no type is specified
 *  using both provided options or reflected decorator metadata.
 *
 * @remarks
 * There are various preconfigured flavors of this decorator for different
 * types already available:
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp}
 *
 * @example
 * ```TS
 *   @Prop()                    private simpleFlag!: boolean;
 *   @Prop(Number)              private simpleNumber!: number;
 *   @Prop([String, Number])    private stringOrNumber!: string | number;
 *   @Prop({default: null})     private defaultsToNull!: null | string;
 *   @Prop({literal: parseInt}) private parser!: (str: string) => number;
 *   @Prop({model: "change"})   private modelValue!: string;
 * ```
 *
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp}
 * @public
 */
export function Prop<T>(opts: PropOpts<T> = {}, typeOverride?: Constructor<T>): TypedVueDecorator<T> {

  // Type literal to record def
  if (isTypeLiteral(opts))
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
    if (!(opts as any).type)
      (opts as any).type = typeOverride || theType;

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
