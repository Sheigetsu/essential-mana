import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import Container from "react-bootstrap/Container";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          source
          title
          author
          devs
        }
      }
    }
  `);

    return (
        <footer className={"main-footer fixed-bottom"}>
            <Container>
                <span>Copyright © 2020 - {data.site.siteMetadata.title}</span>
                <span>Designed by <a href={data.site.siteMetadata.source}>{data.site.siteMetadata.devs}</a> - Built with <a
                    href={"https://www.gatsbyjs.org/"}>Gatsby</a></span>
            </Container>
        </footer>
    );
};

Footer.propTypes = {
    source: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    devs: PropTypes.string
};

export default Footer;
