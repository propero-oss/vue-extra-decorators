import {Getter, Setter} from "@/types";



/**
 * A descriptor of a calculated property (get/set | value)
 * @internal
 */
export type CalculatedPropertyDescriptor<T> = PropertyDescriptor & {
  get?: Getter<T>;
  value?: T;
  set?: Setter<T>;
};

