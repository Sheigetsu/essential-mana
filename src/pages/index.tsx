import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    Have a link to a <Link to="/owo">broken page</Link>
  </Layout>
);

export default IndexPage;
