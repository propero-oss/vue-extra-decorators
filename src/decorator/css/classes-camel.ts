import {Classes, composeConverter} from "@/decorator/css/classes";
import {camelToPascal, pascalToCamel} from "@/util";



const converter = composeConverter(pascalToCamel, camelToPascal);

export function ClassesCamel(prefix?: string, infix?: string) {
  return Classes(prefix, infix, name => name.replace(/^[A-Z]+/, converter));
}
