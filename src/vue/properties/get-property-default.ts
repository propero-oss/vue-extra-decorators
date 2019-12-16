


export function getPropertyDefault<T>(opts: { default?: T | (() => T), literal?: T }) {
  const {literal, default: def} = opts;
  return literal !== undefined ? literal
    : Array.isArray(def) || typeof def === "object" ? () => def
    : def === undefined ? null : def;
}
