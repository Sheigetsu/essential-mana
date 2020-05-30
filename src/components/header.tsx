import React from "react";
import PropTypes from "prop-types";
import {Link, useStaticQuery, graphql} from "gatsby";
import Container from "react-bootstrap/Container";

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
        <header className="main-header">
            <Container>
                <h1 className={"em-logo"}>
                    <Link to={"/"}>{siteTitle.toUpperCase()}</Link>
                </h1>
                <nav className={"main-nav"}>
                    <ul className={"nav-list"}>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/test"}>Gear</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Dungeons</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Patch Notes</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
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
