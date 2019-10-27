


/**
 * The type of a property get accessor.
 * Can be parameterized with a property type and a context (this) type.
 * @internal
 */
export type Getter<T, THIS = any> = (this: THIS) => T;

/**
 * The type of a property set accessor.
 * Can be parameterized with a property type and a context (this) type.
 * @internal
 */
export type Setter<T, THIS = any> = (this: THIS, value: T) => void;


/**
 * The type of a property get accessor.
 * Can be parameterized with a old and new property type and a context (this) type.
 * {@link wrapGetter}
 * @internal
 */
export type GetWrapper<OLD_T, NEW_T = OLD_T, THIS = any> = (this: THIS, orig: Getter<OLD_T>) => NEW_T;

/**
 * The type of a property set accessor.
 * Can be parameterized with a old and new property type and a context (this) type.
 * {@link wrapSetter}
 * @internal
 */
export type SetWrapper<OLD_T, NEW_T = OLD_T, THIS = any> = (this: THIS, orig: Setter<OLD_T>, value: NEW_T) => void;

