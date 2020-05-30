import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className="site-footer">
      {data.site.siteMetadata.author} © {new Date().getFullYear()} Built with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.string,
};

Footer.defaultProps = {
  author: `Bobbuzuwu`,
};

export default Footer;
