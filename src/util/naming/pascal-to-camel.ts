


export function pascalToCamel(str: string): string {
  return str.replace(
    /^[A-Z]+/,
    uppers => uppers.length === 1 ? uppers.toLowerCase() : uppers.slice(0, -1).toLowerCase() + uppers.slice(-1)
  );
}
