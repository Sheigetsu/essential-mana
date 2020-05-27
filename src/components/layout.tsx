import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children: content }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const temp = [
    {
      url: "/awoo",
      text: "achoo",
    },
    {
      url: "/awoo2",
      text: "achoo2",
    },
  ];

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} categories={temp} />
      <main>{content}</main>
      <Footer author={data.site.siteMetadata.author} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array,
};

export default Layout;
