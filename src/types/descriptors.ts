
export type Getter<T, THIS = any> = (this: THIS) => T;
export type Setter<T, THIS = any> = (this: THIS, value: T) => void;

export type GetWrapper<OLD_T, NEW_T = OLD_T, THIS = any> = (this: THIS, orig: Getter<OLD_T>) => NEW_T;
export type SetWrapper<OLD_T, NEW_T = OLD_T, THIS = any> = (this: THIS, orig: Setter<OLD_T>, value: NEW_T) => void;

