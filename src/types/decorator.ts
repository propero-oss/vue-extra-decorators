

export type TypedPropertyDecorator<T, C = any, K extends keyof C = keyof C>
  = (target: C, key: K, desc?: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

export type TypedVueDecorator<T, C = any, K extends keyof C = keyof C>
  = (target: T, key: K, index?: number) => void;
