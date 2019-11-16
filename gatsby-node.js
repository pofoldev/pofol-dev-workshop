const path = require('path')


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Mdx') {
        const parent = getNode(node.parent)

        createNodeField({
            node,
            name: `slug`,
            value: `/tutorials/${parent.relativeDirectory}`
        })
    }
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query AllMdx {
          allMdx {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
        }
    `)

    const pages = result.data.allMdx.edges
    pages.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('src/layouts/tutorial.js'),
            context: {
                id: node.id
            }
        })
    })
}
