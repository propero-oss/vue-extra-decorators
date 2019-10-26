import {Prop, PropOpts} from "@/decorator";
import {TypedVueDecorator} from "@/types";


export function SProp(opts?: PropOpts<string>): TypedVueDecorator<string> {
  return Prop<string>(opts, String as any);
}

export function NProp(opts?: PropOpts<number>): TypedVueDecorator<number> {
  return Prop<number>(opts, Number as any);
}

export function BProp(opts?: PropOpts<boolean>): TypedVueDecorator<boolean> {
  return Prop<boolean>(opts, Boolean as any);
}

export function DProp(opts?: PropOpts<Date>): TypedVueDecorator<Date> {
  return Prop<Date>(opts, Date);
}
