import {lookup} from "@/util";



export function isOneOf(path: string, ...values: any[]) {
  return (data: any) => values.indexOf(lookup(data, path)) !== -1;
}
