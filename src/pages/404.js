import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                404 Not Found
              </h2>
              <p>Nothing to see here, move along folks.</p>
          </div>
        </div>
      </div>
    </section>  
  </Layout>
)

export default NotFoundPage
