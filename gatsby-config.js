module.exports = {
  siteMetadata: {
    title: `Essentialmana`,
    description: `A TERA Online guide site`,
    author: `bobbuzuwu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/layouts/postsLayout.tsx"),
          default: require.resolve("./src/components/layouts/defaultLayout.tsx"),
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [
                `400`,
                `700`
            ]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          }
        ]
      }
    }
  ],
}
