import {Classes} from "@/decorator/css/classes";
import {pascalToKebap} from "@/util";



export function ClassesKebap(prefix?: string, infix?: string) {
  return Classes(prefix, infix, pascalToKebap);
}
