import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";

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
    <header className="site-header">
      <div className="header-logo">
        <Link to="/">{siteTitle.toUpperCase()}</Link>
      </div>
      <div className="header-links">
        <Link to="/">Gear</Link>
        <Link to="/">Dungeons</Link>
        <Link to="/">Patch Notes</Link>
      </div>
      <div className="header-search">
        <Link to="/searchTesting">SEARCH</Link>
      </div>
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
