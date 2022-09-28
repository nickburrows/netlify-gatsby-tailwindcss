import React, { Fragment } from "react";

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const linkItem = moreLinks.map((link, i) => (
  <Fragment key={i}>
    <a
      href={`${link.url}${utmParameters}`}
      className="text-blue-400 no-underline hover:underline hover:text-blue-500"
    >
      {link.text}
    </a>
    {i !== moreLinks.length - 1 && <> · </>}
  </Fragment>
));

const MoreLink = () => {
  return <>{linkItem}</>;
};

export default MoreLink;
