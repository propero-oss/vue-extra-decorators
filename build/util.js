require("dotenv-flow").config();
const pkg = require("../package.json");
const tsc = require("../tsconfig.json");
const env = Object.entries(process.env).reduce((cfg, [key, val]) => ({...cfg, [key.toLowerCase()]: val}), {});
const getVar = (name, fallback) => env[name] || env['project_' + name] || pkg[name] || fallback;


const {promisify} = require("util");
const path_ = require("path");
const resolve = path => path_.resolve(__dirname, "..", path);
const kbs = str => (0 | Math.ceil(str.length / 1024)) + "kb";
const camelish = str => str.replace(/[-_@\/]+([A-Za-z])/g, (_, x) => x.toUpperCase());
const camel = str => { const cam = camelish(str); return cam[0].toLowerCase() + cam.substr(1); };
const pascal = str => { const cam = camelish(str); return cam[0].toUpperCase() + cam.substr(1); };
const relative = str => path_.relative(process.cwd(), str);

Object.defineProperties(String.prototype, {
  "camel": { get() { return camel(this); } },
  "pascal": { get() { return pascal(this); } },
  "kbs": { get() { return kbs(this); } },
  "asPath": { get() { return resolve(String(this)); } },
  "relative": { get() { return relative(String(this)); } },
});

const afs = Object.entries(require("fs")).reduce((afs, [key, value]) => {
  // Ignore classes, nonfunctions and sync functions
  if (typeof value !== "function" || key[0].toLowerCase() !== key[0] || key.indexOf("Sync") !== -1 || !key)
    afs[key] = value;
  else try {
    afs[key] = promisify(value);
  } catch (ex) {
    afs[key] = value;
  }
  return afs;
}, {});



module.exports = {
  v: getVar,
  pkg,
  env,
  tsc,
  afs,
  kbs,
  resolve,
  camel,
  pascal,
  relative
};
