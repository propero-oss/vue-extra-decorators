

export function keyMatches(...keys: string[]) {
  return (ev: KeyboardEvent) => !!keys.find(key => ev.key === key);
}
