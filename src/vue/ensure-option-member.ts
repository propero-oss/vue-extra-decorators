

export function ensureOptionMember<T, K extends keyof T>(options: T, member: K, defaultVal: NonNullable<T[K]> = {} as any): NonNullable<T[K]> {
  return options[member] as NonNullable<T[K]> || (options[member] = defaultVal) as NonNullable<T[K]>;
}
