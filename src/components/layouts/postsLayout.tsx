import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ItemTooltip from "../itemTooltip";
import Header from "../header";
import Footer from "../footer";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Container from "react-bootstrap/Container";

const shortcodes = {
    ItemTooltip
};

const PostsLayout = ({ data: { mdx } }) => {
    return (
        <>
            <MDXProvider components={shortcodes}>
                <Header/>
                <main>
                    <Container>
                        <div className={"post-page"}>
                            {/*<img className={"post-header"} src={mdx.frontmatter.thumbnail} alt={mdx.frontmatter.title}/>*/}
                            <div className={"parallax"} style={{backgroundImage: `url(${mdx.frontmatter.thumbnail})`}}/>
                            <h2>{mdx.frontmatter.title}</h2>
                            <MDXRenderer>
                                {mdx.body}
                            </MDXRenderer>
                        </div>
                    </Container>
                </main>
                <Footer/>
            </MDXProvider>
        </>
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
                thumbnail
            }
        }
    }
`;
