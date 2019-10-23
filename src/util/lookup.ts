export function lookup(source: any, path: string): any {
  const parts = path ? path.split('.') : [];
  return parts.reduce((leaf, part) => {
    if (leaf == null) return leaf;
    return leaf[part];
  }, source);
}
