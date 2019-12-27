import { ExtendedFunction } from "./extended-function";

/**
 * Checks if a given function is an {@link ExtendedFunction}.
 * @param fn - The function to check the type of
 * @internal
 */
export function isExtended<T extends () => unknown>(fn: T | undefined): fn is ExtendedFunction<T> & T {
  return !!fn && "__extended" in fn;
}
