


/**
 * Converts a camelCased name to kebap-case.
 * @param str - The string to convert
 * @returns The converted string.
 * @internal
 */
export function pascalToKebap(str: string): string {
  // @ts-ignore
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join("-");
}
