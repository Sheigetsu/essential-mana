import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
          allMdx {
            edges {
              node {
                frontmatter {
                  tags
                  title
                }
              }
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    const removeDupes = (data: string[]): string[] => {
        let result = [];

        for (let tag of data) {
            if (!result.includes(tag)) result.push(tag);
        }

        return result;
    };

    const siteTitle = data.site.siteMetadata.title;
    const tags = removeDupes(
        [].concat.apply(
            [],
            data.allMdx.edges.map(edge => edge.node.frontmatter.tags)
        )
    );

    return (
        <header>
            <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
                <Container>
                    <Navbar.Brand href={"/"}>
                        <img alt={""}
                             src={"https://cdn.discordapp.com/attachments/346495559214956546/717068165858983946/d38ea5afc43027bc7cc46436fcab77e4_1.png"}
                             width={"30"}
                             height={"30"}
                             className={"d-inline-block align-top"}/>{" "}
                        {siteTitle}
                    </Navbar.Brand>
                    <Nav className={"em-nav"}>
                        <Nav.Link href={"/"}>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    categories: PropTypes.array
};

Header.defaultProps = {
    siteTitle: ``,
    categories: []
};

export default Header;
