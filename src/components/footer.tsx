import React from "react";
import PropTypes from "prop-types";

const Footer = ({ author }) => (
  <footer>
    {author} © {new Date().getFullYear()} Built with{" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.string,
};

Footer.defaultProps = {
  author: `Bobbuzuwu`,
};

export default Footer;
