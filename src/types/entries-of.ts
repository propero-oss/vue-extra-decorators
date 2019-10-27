

/**
 * An entry of {@link Object.entries}, strong typed.
 * @internal
 */
export type EntryOf<T, K extends keyof T = keyof T> = [K, T[K]];

/**
 * Entries of {@link Object.entries}, strong typed.
 * @internal
 */
export type EntriesOf<T> = EntryOf<T>[];
