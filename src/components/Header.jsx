import React, { useState, useEffect, Fragment } from "react";
import { Link } from "gatsby";
import GatsbyLogo from "./GatsbyLogo";
// import GatsbyLogo from "../images/gatsby-logo.svg";
import GatsbyLogo2 from "../images/gatsby-logo2.svg";
import GatsbyMonogram from "../images/Gatsby_Monogram.svg";

import DarkToggle from "./DarkToggle";

const samplePageLinks = [
  { title: "Home", text: "Home", url: "/" },
  {
    title: "Page 2",
    text: "Page 2",
    url: "/page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { title: "Profile", text: "Profile", url: "/app/profile" },
  { title: "Test", text: "Test", url: "/test" },
  { title: "Password", text: "Password", url: "/password" },
  { title: "Random", text: "Random", url: "/random" },
  { title: "TypeScript", text: "TypeScript", url: "/using-typescript" },
  { title: "SSR", text: "Server Side Rendering", url: "/ssr" },
  { title: "DSG", text: "Deferred Static Generation", url: "/using-dsg" },
];

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOnMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.getItem("theme") === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  const handleOnToggle = () => {
    setDarkMode(!darkMode);
  };

  const gatsbyIcon = !darkMode ? GatsbyLogo : GatsbyLogo2;

  const navLinkItem = samplePageLinks.map((link, i) => (
    <li key={i}>
      <Link className="nav-link" activeClassName="active" to={link.url}>
        {link.title}
      </Link>
    </li>
  ));

  return (
    <nav className="flex items-center bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center order-1">
          <GatsbyLogo
            className="inline-block h-6 mr-3 sm:h-9"
            isDark={darkMode}
          />
          <span className="self-center hidden text-xl font-semibold md:inline-block whitespace-nowrap dark:text-white">
            {siteTitle}
          </span>
        </a>
        <div className="order-2 lg:order-3">
          <DarkToggle toggle={handleOnToggle} isDark={darkMode} />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center order-3 p-2 ml-3 text-sm text-gray-500 border border-gray-500 rounded-lg lg:order-4 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => handleOnMenuClick()}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="order-4 w-full lg:block lg:w-auto lg:order-2"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinkItem}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
