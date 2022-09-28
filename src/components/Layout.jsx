/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { Flowbite } from "flowbite-react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Flowbite
        theme={{
          theme: {
            alert: {
              color: {
                primary: "bg-gray-900",
              },
            },
          },
        }}
      >
        <Helmet>
          <script src="/node_modules/material-design-lite/material.min.js" />
        </Helmet>
        <div className="text-gray-800 bg-white dark:text-white dark:bg-stone-800">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Navbar />
          <div className="max-w-4xl p-4 mx-auto mt-6 mb-0">
            <main className="flex flex-col w-full min-h-screen">
              {children}
            </main>
          </div>
          <footer className="mb-0 py-4 px-2 bg-gray-100 dark:bg-[#13293d] w-full">
            <div className="flex items-center justify-end gap-2 p-2 tracking-wider">
              © {new Date().getFullYear()} &middot; Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
          </footer>
        </div>
      </Flowbite>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
