const path = require('path')

module.exports = {
    plugins: [
        `gatsby-plugin-stylus`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `tutorials`,
                path: `${__dirname}/tutorial/`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    tutorials: require.resolve('./src/layouts/tutorial.js')
                }
            }
        }
    ]
}