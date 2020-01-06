const {readFileSync, writeFileSync, readdirSync, unlinkSync} = require("fs");

const defsFile = "dist/VueExtraDecorators.d.ts";

const defs = readFileSync(defsFile).toString("utf8");
const clean = defs.replace(/([A-Za-z0-9]+)_\$0/g, (all, match) => match === "Vue" ? all : match);
readdirSync("dist").filter(it => it.endsWith(".d.ts")).forEach(it => unlinkSync("dist/" + it));
writeFileSync(defsFile, clean);

