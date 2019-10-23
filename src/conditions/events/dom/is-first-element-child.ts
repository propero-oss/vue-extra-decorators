

export function isFirstElementChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentElement
    && (ev.target as HTMLElement).parentElement!.firstElementChild === ev.target;
}
