const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;
//
//   if (node.internal.type == 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')
//
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/template/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost (
        sort: {
          fields: date,
          order: DESC
        }
        
      ){
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
  
}