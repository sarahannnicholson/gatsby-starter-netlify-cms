import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  featuredImage: {
    backgroundPositionY: '50%',
    height: '50vw',
    [theme.breakpoints.up('md')]:{
      height: '33vw'
    },
    backgroundImage: props => `url(${
      !!props.thumbnail && !!props.thumbnail.childImageSharp
        ? props.thumbnail.childImageSharp.fluid.src
        : props.thumbnail
    })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export const BlogPostTemplate = ({ content, contentComponent, description, tags, thumbnail, title,  helmet }) => {
  const PostContent = contentComponent || Content
  const classes = useStyles({thumbnail: thumbnail})
 
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className={`full-width-image-container margin-top-0 ${classes.featuredImage}`}/>
        <div className="columns">
  
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        thumbnail={post.frontmatter.thumbnail}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        description
        tags
      }
    }
  }
`
