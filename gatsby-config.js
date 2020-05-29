module.exports = {
  siteMetadata: {
    title: `Essential Mana`,
    description: `TERA (Non-official) Fansite`,
    author: `Bobbuz`,
    version: '0.1.0'
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
