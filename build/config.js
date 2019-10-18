const {pkg, v} = require("./util");

const banner = `/**
 * ${v("name")} v${v("version")}
 * ${v("description")}
 * (c) ${v("year", new Date().getFullYear())} ${v("author")}
 * ${v("homepage")}
 * @license ${v("license", "MIT")}
 */`;

const defaults = {
  input: {
    input:    "lib/index.js".asPath,
    external: Object.keys({...pkg.dependencies}),
    plugins:  [],
  },
  output: {
    banner,
    name:      v("name").pascal,
    exports:  "named",
    globals:  {},
  },
};


const umd = {
  ...defaults,
  file: v("main").replace(".cjs", "").asPath,
  format: "umd",
};

const min = {
  ...defaults,
  file: v("main").replace("cjs", "min").asPath,
  format: "umd",
  min: true,
  zip: true,
};

const cjs = {
  ...defaults,
  file: v("main").asPath,
  format: "cjs",
};

const esm = {
  ...defaults,
  file: v("module").asPath,
  format: "esm",
};

module.exports = {
  umd, min, cjs, esm,
};
