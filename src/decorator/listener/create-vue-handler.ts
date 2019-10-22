
export function createVueHandler(events: string[], el: (cxt: any) => any, key: string) {
  const bound = Symbol(`bound:${key}`);
  return {
    on(this: any & {[bound]: any}) {
      const fn = this[bound] || (this[bound] = this[key].bind(this));
      el(this).$on(events, fn);
    },
    off(this: any & {[bound]: any}) {
      el(this).$off(events, this[bound]);
    }
  };
}
