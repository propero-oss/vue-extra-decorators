import { lookup } from "../../util";

/**
 * Create a predicate that checks if the first parameter
 * of the returned function is equal to one of many a given
 * values at a certain json path.
 *
 * @param path - the path to look up in the returned object.
 * @param values - the value to check equality against.
 * @returns A predicate for use in `@If` and `@IfNot`
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 * If you only want to check against a single value,
 * use {@link isEqual} instead.
 *
 * @example
 * ```TS
 *   @If(isOneOf("foo.bar", "baz", "qux"))
 *   private doSomething(foo: any) {
 *     // foo.bar is either "baz" or "qux"
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * @public
 */
export function isOneOf(path: string, ...values: any[]) {
  return (data: any) => values.indexOf(lookup(data, path)) !== -1;
}
