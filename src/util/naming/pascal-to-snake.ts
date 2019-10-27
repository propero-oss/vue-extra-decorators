


/**
 * Converts a camelCased name to snake_case.
 * @param str - The string to convert
 * @returns The converted string.
 * @internal
 */
export function pascalToSnake(str: string): string {
  // @ts-ignore
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join("_");
}
