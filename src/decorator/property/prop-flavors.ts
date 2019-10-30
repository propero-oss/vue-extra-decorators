import {Prop, PropOpts} from "@/decorator";
import {TypedVueDecorator} from "@/types";



/**
 * Declares a Vue property.
 * String flavor of {@link Prop | @Prop} decorator
 * @param opts - The property options to pass to vue, it can either be
 *  a constructor function like String or Number, an array of constructor
 *  functions or a property object {@link RecordPropOpts}.
 *  If a property object is given, in addition to the normal vue options
 *  some additional values can be provided.
 *
 * @remarks
 * There are various preconfigured flavors of this decorator for different
 * types already available:
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp}
 *
 * @example
 * ```TS
 *   @SProp()                      private simpleString!: string;
 *   @SProp({default: null})       private defaultsToNull!: null | string;
 *   @SProp({default: () => "hi"}) private defaultsToHi!: string;
 *   @SProp({model: "change"})     private modelValue!: string;
 * ```
 *
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp} {@link Prop}
 * @public
 */
export function SProp(opts?: PropOpts<string>): TypedVueDecorator<string> {
  return Prop<string>(opts, String as any);
}

/**
 * Declares a Vue property.
 * Number flavor of {@link Prop | @Prop} decorator
 * @param opts - The property options to pass to vue, it can either be
 *  a constructor function like String or Number, an array of constructor
 *  functions or a property object {@link RecordPropOpts}.
 *  If a property object is given, in addition to the normal vue options
 *  some additional values can be provided.
 *
 * @remarks
 * There are various preconfigured flavors of this decorator for different
 * types already available:
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp}
 *
 * @example
 * ```TS
 *   @NProp()                       private simpleNumber!: number;
 *   @NProp({default: null})        private defaultsToNull!: null | number;
 *   @NProp({default: Math.random}) private defaultsToRandom!: number;
 *   @NProp({model: "change"})      private modelValue!: number;
 * ```
 *
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp} {@link Prop}
 * @public
 */
export function NProp(opts?: PropOpts<number>): TypedVueDecorator<number> {
  return Prop<number>(opts, Number as any);
}

/**
 * Declares a Vue property.
 * Boolean flavor of {@link Prop | @Prop} decorator
 * @param opts - The property options to pass to vue, it can either be
 *  a constructor function like String or Number, an array of constructor
 *  functions or a property object {@link RecordPropOpts}.
 *  If a property object is given, in addition to the normal vue options
 *  some additional values can be provided.
 *
 * @remarks
 * There are various preconfigured flavors of this decorator for different
 * types already available:
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp}
 *
 * @example
 * ```TS
 *   @BProp()                  private simpleFlag!: boolean;
 *   @BProp({default: null})   private defaultsToNull!: null | boolean;
 *   @BProp({default: false})  private defaultsToFalse!: boolean;
 *   @BProp({model: "change"}) private modelValue!: boolean;
 * ```
 *
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp} {@link Prop}
 * @public
 */
export function BProp(opts?: PropOpts<boolean>): TypedVueDecorator<boolean> {
  return Prop<boolean>(opts, Boolean as any);
}

/**
 * Declares a Vue property.
 * Date flavor of {@link Prop | @Prop} decorator
 * @param opts - The property options to pass to vue, it can either be
 *  a constructor function like String or Number, an array of constructor
 *  functions or a property object {@link RecordPropOpts}.
 *  If a property object is given, in addition to the normal vue options
 *  some additional values can be provided.
 *
 * @remarks
 * There are various preconfigured flavors of this decorator for different
 * types already available:
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp}
 *
 * @example
 * ```TS
 *   @DProp()                            private simpleDate!: Date;
 *   @DProp({default: null})             private defaultsToNull!: null | Date;
 *   @DProp({default: () => new Date()}) private defaultsToNow!: Date;
 *   @DProp({model: "change"})           private modelValue!: Date;
 * ```
 *
 * {@link SProp} {@link NProp} {@link DProp} {@link BProp} {@link Prop}
 * @public
 */
export function DProp(opts?: PropOpts<Date>): TypedVueDecorator<Date> {
  return Prop<Date>(opts, Date);
}
