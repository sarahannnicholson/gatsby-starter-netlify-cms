import React from 'react'
import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

const HomePage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Typography variant="h2" >
        Family Recipe Book
      </Typography>

      <Typography variant="h6" >
        Motivation
      </Typography>

      <Typography variant="body2" >
        As a family that loves to cook, we are constantly modifying and sharing recipes with each other. 
        I created this digital recipe book in hopes that we could have a centralized place to share some of 
        our favourite recipes!
      </Typography>


      <Typography variant="h6" >
        Features to come
      </Typography>
      <ul>
        <li>
          A tags page
        </li>
        <li>
          Search recipes by tags, titles, or ingredients?
        </li>
        <li>
          Possibly a bookmark section (for recipes you want to try)
        </li>
      </ul>  
    </Layout>
  )
}

export default HomePage
