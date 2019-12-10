import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProductPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const ProductContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <ProductContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ProductPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired,
}

const ProductPage = ({ data }) => {
  const { markdownRemark: product } = data
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <Helmet title={`${product.frontmatter.title} | ${siteTitle}`}>
        <meta name="description" content={`${product.frontmatter.description}`} />
      </Helmet>
      <ProductPageTemplate
        content={product.html}
        contentComponent={HTMLContent}
        description={product.frontmatter.description}
        title={product.frontmatter.title}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPageByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        url
        gitUrl
        description
      }
    }
  }
`
