import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ItemTooltip from "../itemTooltip";
import Header from "../header";
import Footer from "../footer";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Badge from "react-bootstrap/Badge";

const shortcodes = {
    ItemTooltip
};

const PostsLayout = ({ data: { mdx } }) => {
    return (
        <MDXProvider components={shortcodes}>
            <Header/>
            <main>
                <h2>{mdx.frontmatter.title}</h2>
                <MDXRenderer>
                    {mdx.body}
                </MDXRenderer>
            </main>
            <Footer/>
        </MDXProvider>
    );
};

export default PostsLayout;

export const pageQuery = graphql`
    query PostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`;
