


/**
 * Used for strongtyping {@link Classes} decorator.
 * @internal
 */
export type ClassesGetter<T> = {[K in keyof T]: boolean} & {[k: string]: boolean};
