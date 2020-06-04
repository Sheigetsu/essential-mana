import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Search from "./search";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            frontmatter {
              tags
              title
              author
              slug
              date(formatString: "dddd MMMM Do, YYYY")
              description
              thumbnail
            }
            id
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

  // const removeDupes = (data: string[]): string[] => {
  //   let result = [];

  //   for (let tag of data) {
  //     if (!result.includes(tag)) result.push(tag);
  //   }

  //   return result;
  // };

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges.map(edge => {
    return Object.assign(edge.node.frontmatter, { id: edge.node.id });
  });

  // const tags = removeDupes(
  //   [].concat.apply(
  //     [],
  //     data.allMdx.edges.map(edge => edge.node.frontmatter.tags)
  //   )
  // );

  return (
    <header>
      <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
        <Container>
          <Navbar.Brand href={"/"}>
            <img
              alt={""}
              src={
                "https://cdn.discordapp.com/attachments/346495559214956546/717068165858983946/d38ea5afc43027bc7cc46436fcab77e4_1.png"
              }
              width={"30"}
              height={"30"}
              className={"d-inline-block align-top"}
            />{" "}
            {siteTitle}
          </Navbar.Brand>
          <Nav className={"em-nav"}>
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Search items={posts} />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  categories: PropTypes.array,
};

Header.defaultProps = {
  siteTitle: ``,
  categories: [],
};

export default Header;
