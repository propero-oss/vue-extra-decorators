

export function hasProp<
  T extends Y & (K extends keyof Y ? Required<Pick<Y, K>> : Record<K, unknown>),
  Y = any, K extends keyof Y | string = keyof Y
>(it: Y, prop: K): it is T {
  return prop in it;
}


export function hasProps<
  T extends Y & (K[number] extends keyof Y ? Required<Pick<Y, K[number]>> : Record<K[number], unknown>),
  Y = any, K extends (keyof Y | string)[] = (keyof Y)[]
>(it: Y, ...props: K): it is T {
  for (const prop of props)
    if (!(prop in it))
      return false;
  return true;
}
