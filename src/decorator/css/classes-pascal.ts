import {Classes} from "@/decorator/css/classes";
import {camelToPascal} from "@/util";



export function ClassesPascal(prefix?: string, infix?: string): ReturnType<typeof Classes> {
  return Classes(prefix, infix, camelToPascal);
}
