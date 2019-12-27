import { Constructor } from "../../types";

/**
 * Checks if a given object is a type literal option or a record
 * @param opts - the options to check
 * @returns true, if the options is either an array or a constructor
 * @internal
 */
export function isTypeLiteral<T>(opts: unknown): opts is Constructor<T> | Constructor<any>[] {
  return typeof opts === "function" || Array.isArray(opts);
}
