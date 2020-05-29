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
                  fileAbsolutePath
                }
              }
            }
          }
    `);

    if (result.errors) {
        reporter.panicOnBuild("ERROR: loading \"createPages\" query");
    }

    const slugFromPath = (path) => {
        const slugRegex = /(\/[^\/]+).mdx?/g;
        return path.match(slugRegex)[0].replace(/.mdx?/, "");
    }

    const posts = result.data.allMdx.edges;
    posts.forEach(({ node }, index) => {
        createPage({
            path: node.frontmatter.slug || slugFromPath(node.fileAbsolutePath),
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