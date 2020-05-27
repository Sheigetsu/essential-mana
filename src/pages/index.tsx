// @ts-ignore
import React from "react";
import { Link } from "gatsby";

import DefaultLayout from "../components/layouts/defaultLayout";

const IndexPage = () => (
  <DefaultLayout>
    <h1>Hello World</h1>
    Have a link to a <Link to="/owo">broken page</Link>
  </DefaultLayout>
);

export default IndexPage;
