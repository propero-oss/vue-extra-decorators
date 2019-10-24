import {Getter, Setter} from "@/types";



export type CalculatedPropertyDescriptor<T> = PropertyDescriptor & {
  get?: Getter<T>;
  value?: T;
  set?: Setter<T>;
}

