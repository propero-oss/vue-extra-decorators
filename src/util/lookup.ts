/**
 * Looks up a json path inside a given object.
 * @param source - The object to look up
 * @param path - The path to resolve
 * @returns the looked up property or undefined / null
 * @internal
 */
export function lookup(source: any, path: string): any {
  const parts = path ? path.split(".") : [];
  return parts.reduce((leaf, part) => {
    if (leaf == null) return leaf;
    return leaf[part];
  }, source);
}
