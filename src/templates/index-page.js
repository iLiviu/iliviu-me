import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  subheading,
  mainpitch,
  showProducts,
  showLatestPosts,
  products,
  blogPosts,
}) => (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <h3>{subheading}</h3>
            </div>
          </div>
        </div>
      </section>


      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p>{mainpitch.description}</p>
                  </div>
                </div>
                {showProducts && <Features items={products} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      {showLatestPosts && <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">
                Ultimele Postări
                  </h3>
              <BlogRoll posts={blogPosts} />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/blog">
                  Citește mai mult
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  products: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index
  const products = data.products.edges
  const blogPosts = data.blogPosts.edges

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        showProducts={frontmatter.showProducts}
        showLatestPosts={frontmatter.showLatestPosts}
        products={products}
        blogPosts={blogPosts}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        mainpitch {
          title
          description
        }
        showProducts
        showLatestPosts
      }
    }
    products: allMarkdownRemark(filter: {frontmatter: { templateKey: { eq: "product-page" }, featured: { eq: true } } }) {
      edges {
        node {
          frontmatter {
              title
              featured
              url
              gitUrl
              description
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 2) 
    {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

    }

  }
`
