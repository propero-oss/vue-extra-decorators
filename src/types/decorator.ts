/**
 * A typed decorator for typescript classes
 * @internal
 */
export type TypedPropertyDecorator<T = any, C = any, K extends keyof C = keyof C> = (
  target: C,
  key: K,
  desc?: TypedPropertyDescriptor<T>
) => any;
