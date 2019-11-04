import React from 'react'
import PropTypes from 'prop-types'
import { ProductListPageTemplate } from '../../templates/product-list'

const ProductListPagePreview = ({ entry }) => {


  return (
    <ProductListPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      products={[]}
    />
  )
}

ProductListPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ProductListPagePreview
