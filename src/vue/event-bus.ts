import {AnyFunction} from "@/types";
import {createListenerDecorator} from "@/vue/handler";
import Vue from "vue";



const busses: Record<string, typeof Bus.methods & Vue> = {};
export const Bus = {
  methods: {
    On(this: Vue, ...events: string[]) {
      return createListenerDecorator(events, () => this);
    },
    on(this: Vue, events: string[] | string, handler: AnyFunction) {
      this.$on(events, handler);
      return this;
    },
    off(this: Vue, events: string[] | string, handler: AnyFunction) {
      this.$off(events, handler);
      return this;
    },
    once(this: Vue, events: string[] | string, handler: AnyFunction) {
      this.$once(events, handler);
      return this;
    },
    emit(this: Vue, event: string, ...args: any[]) {
      this.$emit(event, ...args);
      return this;
    }
  }
};

export function EventBus(instance: string = ""): typeof Bus.methods & Vue {
  // tslint:disable-next-line
  return busses[instance] ?? (busses[instance] = new Vue(Bus) as any);
}

const defaultBus = EventBus();
const { On, on, off, once, emit } = defaultBus;
EventBus.On   = On.bind(defaultBus);
EventBus.on   = on.bind(defaultBus);
EventBus.off  = off.bind(defaultBus);
EventBus.once = once.bind(defaultBus);
EventBus.emit = emit.bind(defaultBus);
