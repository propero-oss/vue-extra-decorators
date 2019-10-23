

export function isLastElementChild(ev: Event) {
  return ev
    && ev.target
    && (ev.target as HTMLElement).parentElement
    && (ev.target as HTMLElement).parentElement!.lastElementChild === ev.target;
}
