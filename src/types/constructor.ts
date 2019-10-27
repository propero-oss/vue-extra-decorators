


/**
 * A constructor function
 * it can be parameterized with a type to construct and parameter types
 * @internal
 */
export type Constructor<T, PARAMS extends any[] = any[]> = new (...args: PARAMS) => T;

/**
 * A constructor function that takes no arguments
 * it can be parameterized with a type to construct
 * @internal
 */
export type NoArgsConstructor<T> = Constructor<T, []>;

/**
 * A constructor function that takes no one argument
 * it can be parameterized with a type to construct and the argument type
 * @internal
 */
export type SingleArgConstructor<T, ARG = any> = Constructor<T, [ARG]>;

/**
 * A named constructor function
 * it can be parameterized with a type to construct and parameter types
 * @internal
 */
export type NamedConstructor<T, PARAMS extends any[] = any[]> = Constructor<T, PARAMS> & { name: string };
