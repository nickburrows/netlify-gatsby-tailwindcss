import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/Seo";

const SecondPage = () => (
  <>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
