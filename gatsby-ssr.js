/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react");

const HtmlAttributes = {
  lang: "en",
};
exports.onRenderBody = ({ setHtmlAttributes }, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes);
};
