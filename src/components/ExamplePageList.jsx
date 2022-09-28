import React, { Fragment } from "react";
import { Link } from "gatsby";

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
];

const LinkItem = samplePageLinks.map((link, i) => (
  <Fragment key={i}>
    <Link className="link" to={link.url}>
      {link.text}
    </Link>
    {i !== samplePageLinks.length - 1 && <> · </>}
  </Fragment>
));

const ExamplePageList = () => {
  return (
    <>
      <div className="mb-4 space-y-2 intro">
        <span className="mr-2 font-bold">Example pages:</span>
        {LinkItem}
        <div className="gap-2">
          Edit<code>src/pages/index.js</code>to update this page.
        </div>
      </div>
    </>
  );
};

export default ExamplePageList;
