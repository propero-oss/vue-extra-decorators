

export function isFirstChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentNode
    && (ev.target as HTMLElement).parentNode!.firstChild === ev.target;
}
