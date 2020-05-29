/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("ERROR: loading \"createPages\" query");
    }

    const posts = result.data.allMdx.edges;
    posts.forEach(({ node }, index) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/components/layouts/postsLayout.tsx`),
            context: {
                id: node.id
            }
        });
    });

    const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));
    exports.onCreatePage = ({ page, actions }) => {
        const { createPage, deletePage } = actions;
        const oldPage = Object.assign({}, page);

        page.path = replacePath(page.path);

        if (page.path !== oldPage.path) {
            deletePage(oldPage);
            createPage(page);
        }
    };
};