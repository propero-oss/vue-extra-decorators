/**
 * gets or creates a member of vue component options
 * @param options - The vue component options to modify
 * @param member - The member name
 * @param defaultVal - The default value should no member exist.
 * @returns the value
 * @internal
 */
export function ensureOptionMember<T, K extends keyof T>(
  options: T,
  member: K,
  defaultVal: NonNullable<T[K]> = {} as any
): NonNullable<T[K]> {
  return (options[member] as NonNullable<T[K]>) || ((options[member] = defaultVal) as NonNullable<T[K]>);
}
