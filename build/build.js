const start = new Date();

const {afs, v, kbs} = require("./util");
const configs = require("./config");
const {mkdir, exists, writeFile} = afs;

const gzip = require("util").promisify(require("zlib").gzip);
const {minify} = require("uglify-js");
const {rollup} = require("rollup");
const chalk = require("chalk");
const outDir = v("main").split("/")[0].asPath;

const uglyOpts = (output) => ({
  output: {
    preamble: output.banner,
    ascii_only: true,
  },
});


(async () => {
  if (!await exists(outDir))
    await mkdir(outDir);

  await Promise.all(Object.values(configs).map(async config => {
    const start = new Date();

    const {input, output, min, zip, dry, format, file, globals} = config;
    Object.assign(output, {format, file, globals: globals || {}});

    const bundle = await rollup(input);
    let {output: [{code}]} = await bundle.generate(output);

    let zipped;
    if (min) code = minify(code, uglyOpts(output)).code;

    if (!dry)
      await writeFile(file, code);
    if (!dry && zip)
      zipped = await gzip(code);

    const totalTime = new Date() - start;

    console.log(chalk`{yellow [${code.kbs}]} {blue.bold ${file.relative}}: ${totalTime}ms${zipped ? chalk`   {green (gzipped: ${kbs(zipped)})}` : ''}`);
  }));
  const totalTime = new Date() - start;
  console.log(chalk`{green.bold Build Complete in} {bold ${totalTime}ms}`);
})();
