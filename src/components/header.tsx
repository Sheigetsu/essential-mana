import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  // add categories / tags query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div>
        <ul>
          <li>
            <a href="/">{data.site.siteMetadata.title}</a>
          </li>
          {/* {categories.map(link => {
            <li>
              <a href={link.url}>{link.text}</a>
            </li>;
          })} */}
        </ul>
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
