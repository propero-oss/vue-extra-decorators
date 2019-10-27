type CB = (err?: any) => any;

const {src, dest, parallel, series, task} = require("gulp");
const shell = require("gulp-shell");
const rollup = require("rollup");
const {uglify} = require("rollup-plugin-uglify");
const babel = require("rollup-plugin-babel");
const sourcemaps = require("rollup-plugin-sourcemaps");
const nodeResolve = require("rollup-plugin-node-resolve");
const pkg = require("./package.json");
const path = require("path");

const camelish = (str: string) => str.replace(/[-_@\/]+([A-Za-z])/g, (_, x) => x.toUpperCase());
const pascal   = (str: string) => { const cam = camelish(str); return cam[0].toUpperCase() + cam.substr(1); };
const camel    = (str: string) => { const cam = camelish(str); return cam[0].toLowerCase() + cam.substr(1); };

const dirs = {
  entryTs: "src",
  entryJs: "lib",
  output:  "dist",
  temp:    "temp",
  docs: "docs",
};
Object.entries(dirs).forEach(([name, file]) => (dirs as any)[name] = path.resolve(__dirname, file));

const files = {
  entryTs:    "src/index.ts",
  entryDts:   "lib/index.d.ts",
  entryJs:    "lib/index.js",
  outputCjs:  "dist/main.cjs.js",
  outputUmd:  "dist/main.js",
  outputMin:  "dist/main.min.js",
  outputEsm:  "dist/main.esm.js",
  outputDts:  "dist/main.d.ts",
};
Object.entries(files).forEach(([name, file]) => (files as any)[name] = path.resolve(__dirname, file));

const externals = Object.keys(pkg.dependencies || {}).concat("vue");
const globals = externals.reduce((all, name) => Object.assign(all, {[name]: camel(name)}), {});

const banner = `/**
 * {name} v{version}
 * {description}
 * {homepage}
 * (c) {year} {author}
 * @license {license=MIT}
 */`
.replace(/{([^}]+)}/g, (_, value) => {
  const [key, fallback] = value.split("=");
  if (key === "year") return new Date().getFullYear();
  return pkg[key] || fallback || "";
});

const rollupInput = {
  input: files.entryJs,
  external: externals,
  plugins: [
    nodeResolve(),
    sourcemaps(),
  ],
  onwarn: (...args: any[]) => {},
};
const rollupOutput = {
  exports: "named",
  name: pascal(pkg.name),
  globals,
  sourcemap: true,
  banner,
};

const rollupTask = (output = {}, input: any = {}) => {
  return async () => {
    input = Object.assign({}, rollupInput, input);
    if (input.plugins !== rollupInput.plugins)
      input.plugins.unshift(...rollupInput.plugins);
    const bundle = await rollup.rollup(input);
    return bundle.write({...rollupOutput, ...output});
  };
};

const cleanTask = (dir: string) => (cb: CB) => require("rimraf")(dir, cb);



task("clean:typescript",    cleanTask(dirs.entryJs));
task("clean:declaration",   cleanTask(dirs.temp));
task("clean:bundle",        cleanTask(dirs.output));
task("clean:documentation", cleanTask(dirs.docs));
task("clean", series(
  task("clean:typescript"),
  task("clean:declaration"),
  task("clean:bundle"),
  task("clean:documentation"),
));


task("build:typescript", shell.task("ttsc -p ./"));
task("build:declaration", shell.task(`api-extractor run --local`));
task("build:documentation", shell.task(`api-documenter markdown -i "${dirs.output}" -o "${dirs.docs}"`));
task("build:cjs", rollupTask({ format: "cjs", file: files.outputCjs }));
task("build:esm", rollupTask({ format: "esm", file: files.outputEsm }));
task("build:umd", rollupTask({ format: "umd", file: files.outputUmd }, { plugins: [sourcemaps(), babel({ presets: ["@babel/env"] })] }));
task("build:min", rollupTask({ format: "umd", file: files.outputMin }, { plugins: [sourcemaps(), babel({ presets: ["@babel/env"] }), uglify()] }));
task("build", series(
  task("build:typescript"),
  task("build:declaration"),
  task("build:documentation"),
  task("build:cjs"),
  task("build:esm"),
  task("build:umd"),
  task("build:min"),
  task("clean:typescript"),
  task("clean:declaration"),
));

task("lint", shell.task("tslint -p tsconfig.json"));
task("lint:fix", shell.task("tslint -p tsconfig.json --fix"));


task("default", task("build"));
