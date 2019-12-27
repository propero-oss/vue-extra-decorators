/**
 * Create functions for attaching and detaching a dom event handler
 * @param events - The events to listen for
 * @param el - A function resolving the element to attach to.
 * @param key - The name of the event handler function
 * @returns functions to attach and detach event handlers.
 * @internal
 */
export function createElementHandler(events: string[], el: (cxt: any) => EventTarget, key: string) {
  const bound = Symbol(`bound:${key}`);
  return {
    on(this: any & { [bound]: any }) {
      const fn = this[bound] || (this[bound] = this[key].bind(this));
      events.forEach(event => el(this).addEventListener(event, fn));
    },
    off(this: any & { [bound]: any }) {
      events.forEach(event => el(this).removeEventListener(event, this[bound]));
    }
  };
}
