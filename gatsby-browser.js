/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/index.css";
import "./src/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import "material-design-lite/material.min.css";
import "material-design-lite/material";
import React from "react";
import Layout from "./src/components/Layout";

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
