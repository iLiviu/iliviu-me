import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const ProductListPageTemplate = ({
  title,
  description,
  products,
}) => (
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features items={products} />
              </div>
            </div>
        </div>
      </section>
    </div>
  )

ProductListPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    products: PropTypes.array,
  }),
}

const ProductListPage = ({ data }) => {
  const { frontmatter } = data.main
  const { edges: products } = data.products
  return (
    <Layout>
      <ProductListPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        products={products}
      />
    </Layout>
  )
}

ProductListPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductListPage

export const ProductListPageQuery = graphql`
  query ProductListPage($id: String!) {
    main: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    products: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: {frontmatter: { templateKey: { eq: "product-page" } } }
      ) {
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
  }
`
