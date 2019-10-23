import {lookup} from "@/util";



export function isEqual(path: string, value: any) {
  return (data: any) => lookup(data, path) === value;
}
