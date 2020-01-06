import {template} from "lodash";
export default template(`
/**
 * <%= name %> v<%= version %>
 * <%= description %>
 * <%= homepage %>
 * (c) 2019 - <%= new Date().getFullYear() %> <%= author %>
 * @license <%= license || "MIT" %>
 */
`)(require("../package.json")).trim();

