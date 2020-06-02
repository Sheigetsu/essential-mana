import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
        <footer className={"main-footer"}>
            <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
                <Container>
                    <Navbar.Brand href={"/"}>
                        Copyright © 2020 - {data.site.siteMetadata.title}
                    </Navbar.Brand>
                    <Navbar.Text>
                        Designed by <a href={data.site.siteMetadata.source}>{data.site.siteMetadata.devs}</a> - Built with <a
                        href={"https://www.gatsbyjs.org/"}>Gatsby</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
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
