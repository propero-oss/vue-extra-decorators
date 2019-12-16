import {WatchOptions} from "vue";
import {createDecorator} from "vue-class-component";

interface WatchOptionsWithProp extends WatchOptions {
  prop: string;
}

export function Watch(property: string): import("vue-class-component").VueDecorator;
export function Watch(opts: WatchOptionsWithProp): import("vue-class-component").VueDecorator;
export function Watch(opts: string | WatchOptionsWithProp): import("vue-class-component").VueDecorator {
  if (typeof opts === "string")
    opts = { prop: opts };
  const { prop } = opts;
  delete opts.prop;
  return createDecorator((options, key) => {
    if (!options.watch)
      options.watch = {};
    if (!Array.isArray(options.watch[key]))
      options.watch[key] = options.watch[key] == null ? [] as any : [options.watch[key]];
    (options.watch[key] as any).push({...(opts as any), handler: key });
  });
}
