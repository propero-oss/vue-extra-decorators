

export function wasPrevented(ev: Event) {
  return ev && ev.defaultPrevented || false;
}
