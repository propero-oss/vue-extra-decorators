/**
 * Checks if a given property exists in an object.
 * Narrows the type of the object to include that property.
 * @param it - The object
 * @param prop - The property to check for
 * @returns true, if the property exists in the object.
 * @internal
 */
export function hasProp<
  T extends Y & (K extends keyof Y ? Required<Pick<Y, K>> : Record<K, unknown>),
  Y = any,
  K extends keyof Y | string = keyof Y
>(it: Y, prop: K): it is T {
  return prop in it;
}

/**
 * Checks if a given set of properties exists in an object.
 * Narrows the type of the object to include that property.
 * @param it - The object
 * @param props - The properties to check for
 * @returns true, if all properties exist in the object.
 * @internal
 */
export function hasProps<
  T extends Y & (K[number] extends keyof Y ? Required<Pick<Y, K[number]>> : Record<K[number], unknown>),
  Y = any,
  K extends (keyof Y | string)[] = (keyof Y)[]
>(it: Y, ...props: K): it is T {
  for (const prop of props) if (!(prop in it)) return false;
  return true;
}
