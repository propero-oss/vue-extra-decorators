/**
 * Used for strongtyping {@link Classes} decorator.
 * @internal
 */
export type ClassesGetter<T> = { [K in keyof T]: boolean | string } & { [k: string]: boolean | string };
