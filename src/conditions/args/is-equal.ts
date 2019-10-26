import {lookup} from "@/util";



/**
 * Create a predicate that checks if the first parameter
 * of the returned function is equal to a given value at
 * a certain json path.
 *
 * @param path - the path to look up in the returned object.
 * @param value - the value to check equality against.
 * @returns A predicate for use in `@If` and `@IfNot`
 *
 * @remarks
 * This function is meant to be a condition for
 * {@link If} alike methods.
 * If you want to check against a set of values,
 * use {@link isOneOf} instead.
 *
 *
 * Example:
 * ```TS
 *   @If(isEqual("foo.bar", "baz"))
 *   private doSomething(foo: any) {
 *     // foo.bar is "baz"
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * @public
 */
export function isEqual(path: string, value: any) {
  return (data: any) => lookup(data, path) === value;
}
