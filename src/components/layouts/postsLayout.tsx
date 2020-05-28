import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ItemTooltip from "../itemTooltip";
import Header from "../header";
import Footer from "../footer";
import { graphql, useStaticQuery } from "gatsby";
import Badge from "react-bootstrap/Badge";

const shortcodes = {
    ItemTooltip
};

const PostsLayout = ({ children: content }) => {
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              author
              description
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    `);

    return (
        <MDXProvider components={shortcodes}>
            <Header/>
            <div>
                <div>
                    <h1>{data.allMdx.nodes[0].frontmatter.title}<Badge variant="secondary">{data.allMdx.nodes[0].frontmatter.author}</Badge></h1>
                    <sub>{data.allMdx.nodes[0].frontmatter.date}</sub>
                </div>
                <div>{content}</div>
            </div>
            <Footer/>
        </MDXProvider>
    );
};

export default PostsLayout;
