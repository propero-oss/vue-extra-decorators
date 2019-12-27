/**
 * Create functions for attaching and detaching a vue event handler
 * @param events - The events to listen for
 * @param el - A function resolving the element to attach to.
 * @param key - The name of the event handler function
 * @returns functions to attach and detach event handlers.
 * @internal
 */
export function createVueHandler(events: string[], el: (cxt: any) => any, key: string) {
  const bound = Symbol(`bound:${key}`);
  return {
    on(this: any & { [bound]: any }) {
      const fn = this[bound] || (this[bound] = this[key].bind(this));
      el(this).$on(events, fn);
    },
    off(this: any & { [bound]: any }) {
      el(this).$off(events, this[bound]);
    }
  };
}
