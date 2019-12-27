/**
 * Converts a camelCased name to PascalCase.
 * @param str - The string to convert
 * @returns The converted string.
 * @internal
 */
export function camelToPascal(str: string): string {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}
