

export function isLastChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentNode
    && (ev.target as HTMLElement).parentNode!.lastChild === ev.target;
}
