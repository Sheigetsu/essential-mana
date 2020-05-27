import React from "react";
import {MDXProvider} from "@mdx-js/react";
import ItemTooltip from "../itemTooltip";
import Header from "../header";
import Footer from "../footer";

const shortcodes = {
    ItemTooltip
}

const PostsLayout = ({children: content}) => {
    return (
        <MDXProvider components={shortcodes}>
            <Header />
            <div>
                <h1>Testing</h1>
                <div>{content}</div>
            </div>
            <Footer />
        </MDXProvider>
    );
}

export default PostsLayout;
