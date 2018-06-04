import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ContentIndex from '../components/ContentIndex'
import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className='blog-post-container'>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header />
        <Sidebar />
        <ContentIndex />
        <div className='blog-post'>
          <h1 className='blog-post__header'>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <Bio />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

// {
//   site {
//     siteMetadata {
//       title
//       author
//     }
//   }
//   markdownRemark(fields: {slug: {eq: "/2018-05-15-golang-error-stack-trace/"}}) {
//     id
//     frontmatter {
//       categoriesA
//       title
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
//   related: allMarkdownRemark(limit: 1000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {categoriesA: {in: ["go"]}}}) {
//     totalCount
//     edges {
//       node {
//         id
//         frontmatter {
//           categoriesA
//           title
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
// }
