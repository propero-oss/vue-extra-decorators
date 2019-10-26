

export type EntryOf<T, K extends keyof T = keyof T> = [K, T[K]];
export type EntriesOf<T> = EntryOf<T>[];
