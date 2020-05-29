import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const HeaderLink = ({ title, path }) => (
  <div>
    <a href={path}>{title}</a>
  </div>
);

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
      <HeaderLink title={siteTitle} path="#" />
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
