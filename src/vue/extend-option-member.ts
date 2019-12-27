import { mergeResult } from "../function";

/**
 * gets or creates a member of vue component options and merges it with a given value.
 * @param options - The vue component options to modify
 * @param member - The member name
 * @param val - The default value to merge with the existing.
 * @returns the merged value
 * @internal
 */
export function extendOptionMember<T, K extends keyof T>(options: T, member: K, val: NonNullable<T[K]> = {} as any): NonNullable<T[K]> {
  if (typeof val === "object") return (options[member] = { ...(options[member] || {}), ...val });
  if (Array.isArray(val)) return (options[member] = [...((options[member] as any) || []), ...val] as any);
  if (typeof val === "function") return (options[member] = mergeResult(options[member] as any, val));
  // tslint:disable-next-line:prefer-object-spread
  return Object.assign(options[member] || {}, val);
}
