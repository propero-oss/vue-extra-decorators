


export type Constructor<T, PARAMS extends any[] = any[]> = new (...args: PARAMS) => T;
export type NoArgsConstructor<T> = Constructor<T, []>;
export type SingleArgConstructor<T, ARG = any> = Constructor<T, [ARG]>;

export type NamedConstructor<T, PARAMS extends any[] = any[]> = Constructor<T, PARAMS> & { name: string };
