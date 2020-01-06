import Component from "vue-class-component";
import { AnyFunction } from "../types";
import { createListenerDecorator } from "./handler";
import Vue from "vue";

@Component
export class EventBus extends Vue {
  On(...events: string[]) {
    return createListenerDecorator(events, () => this);
  }
  on(this: Vue, events: string[] | string, handler: AnyFunction) {
    this.$on(events, handler);
    return this;
  }
  off(this: Vue, events: string[] | string, handler: AnyFunction) {
    this.$off(events, handler);
    return this;
  }
  once(this: Vue, events: string[] | string, handler: AnyFunction) {
    this.$once(events, handler);
    return this;
  }
  emit(this: Vue, event: string, ...args: any[]) {
    this.$emit(event, ...args);
    return this;
  }

}

const busses: Record<string, EventBus> = {};

export function Bus(instance: string = ""): EventBus {
  // tslint:disable-next-line
  return busses[instance] ?? (busses[instance] = new EventBus());
}

const defaultBus = Bus();
const { On, on, off, once, emit } = defaultBus;
Bus.On = On.bind(defaultBus);
Bus.on = on.bind(defaultBus);
Bus.off = off.bind(defaultBus);
Bus.once = once.bind(defaultBus);
Bus.emit = emit.bind(defaultBus);
