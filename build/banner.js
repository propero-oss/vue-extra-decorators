import {template} from "lodash";
export default template(`
/**
 * <%= name %> v<%= version %>
 * <%= description %>
 * <%= homepage %>
 * (c) <%= new Date().getFullYear() %> <%= author %>
 * @license <%= license || "MIT" %>
 */
`)(require("../package.json")).trim();

