import {Classes} from "@/decorator/css/classes";
import {pascalToSnake} from "@/util";



export function ClassesSnake(prefix?: string, infix: string = "--"): ReturnType<typeof Classes> {
  return Classes(prefix, infix, pascalToSnake);
}
