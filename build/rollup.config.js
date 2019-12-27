import sourcemaps from "rollup-plugin-sourcemaps";
import commonjs from "rollup-plugin-commonjs";
import ts from "@wessberg/rollup-plugin-ts";
import banner from "./banner";



const vueConfig = require("../vue.config");

export default {
  input: "src/main.ts",
  output: {
    name: "VueExtraDecorators",
    exports: "named",
    sourceMap: true,
    globals: vueConfig.configureWebpack.externals,
    banner
  },
  external: Object.keys(vueConfig.configureWebpack.externals),
  plugins: [
    ts({ tsconfig: "tsconfig-build.json" }),
    sourcemaps(),
    commonjs(),
  ]
};
