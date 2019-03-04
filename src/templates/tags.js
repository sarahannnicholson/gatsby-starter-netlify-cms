import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const tag = this.props.pageContext.tag
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
        <div key={post.node.fields.slug} className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <img src={post.node.frontmatter.thumbnail} alt={post.node.frontmatter.title}/>
                    </div>
                    <div className="media-content">
                    <Link to={post.node.fields.slug}>
                        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
                    </Link>
                    <p>{post.node.frontmatter.description}</p>
                    {post.node.frontmatter.tags && post.node.frontmatter.tags.length ? (
                        <ul className="taglist">
                            {post.node.frontmatter.tags.map(t => (
                                <li key={t + `tag`}>
                                    <Link className={`${tag === t && 'active'}`} to={`/tags/${kebabCase(t)}/`}>{t}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    </div>
                </div>
            </div>
        </div>
    ))
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="blogList">{postLinks}</ul>
                <p>
                  <Link className="button" to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            description
            thumbnail
          }
        }
      }
    }
  }
`