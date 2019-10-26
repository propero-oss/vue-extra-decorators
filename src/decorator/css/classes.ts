import {CalculatedPropertyDescriptor, wrapGetter} from "@/descriptor";
import {ClassesGetter, TFunction} from "@/types";

export function Classes(
  prefix?: string,
  infix: string = "",
  converter: TFunction<string, [string, boolean]> = s => s
) {
  return <T>(target: any, key: string, desc: CalculatedPropertyDescriptor<ClassesGetter<T>>) => {
    if (prefix == null) prefix = converter(target.name, false);
    wrapGetter(desc, function(orig) {
      const val = orig();
      const result: Record<string, boolean> = {};
      if (prefix) result[prefix] = true;
      for (const [key, value] of Object.entries(val))
        result[prefix + infix + converter(key, true)] = value;
      return result;
    });
  };
}

export function composeConverter(className: TFunction<string, [string]>, memberName: TFunction<string, [string]>) {
  return (name: string, member: boolean) => member ? memberName(name) : className(name);
}
