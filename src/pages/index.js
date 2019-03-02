import React from 'react'
import Layout from '../components/Layout'

const HomePage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/index-hero.jpg')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                backgroundColor: '#f40',
                color: 'white',
                padding: '1rem',
              }}
            >
              Family Recipe Book
          </h1>
          </div>
          <h4>Motivation</h4>
          <p>As a family that loves to cook, we are constantly modifying and sharing recipes with each other. I created this digital recipe book in hopes that we could have a centralized place to share some of our favourite recipes!</p>
          <h4>Features to come</h4>
          <li>
            A tags page that shows all recipes with a certain tag.
            <p>(Lets say you feel like cooking some thai food, you'd be able to see all recipes with the 'Thai' tag)</p>
          </li>
          <li>
            Possibly a bookmark section (for recipes you want to try)
          </li>
          <li>
            Possibly a search
          </li>


        </div>
      </div>
    </section>
  </Layout>
)

export default HomePage
