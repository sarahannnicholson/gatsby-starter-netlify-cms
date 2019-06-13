import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  gridContainer:{
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#808080',
  },
}));

const BlogRoll = ({data}) => {

  const classes = useStyles();
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="columns is-multiline">
      <Grid classes={{root: classes.gridContainer}} container spacing={2}>
        {posts && (posts
          .map(({ node: post }) => (
            <Grid item xs={12} sm={6} lg={4} component={Link} to={post.fields.slug}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={post.frontmatter.thumbnail}
                  title={post.frontmatter.title}
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      S
                    </Avatar>
                  }
                  title={post.frontmatter.title}
                  subheader={post.frontmatter.date}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.frontmatter.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )))}
      </Grid>
    </div>
  );
}


BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}



export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              templateKey
              date(formatString: "MMMM DD, YYYY")
              thumbnail
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)

