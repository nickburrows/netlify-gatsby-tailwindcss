import * as React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";
import * as styles from "../components/index.module.css";
import CardTemplate from "../components/CardTemplate";
import ExamplePageList from "../components/ExamplePageList";
import MoreLink from "../components/MoreLink";

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const cardLinks = links.map((link, i) => (
  <CardTemplate
    key={i}
    title={link.text}
    description={link.description}
    link={`${link.url}${utmParameters}`}
  />
));
const IndexPage = () => (
  <>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <ExamplePageList />
    </div>
    <div className="grid grid-cols-2 gap-4">{cardLinks}</div>
    <div className="flex justify-center gap-2 mt-8">
      <MoreLink />
    </div>
  </>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
