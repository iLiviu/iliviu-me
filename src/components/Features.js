import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ items }) => (
  <div className="columns is-multiline">
    {items.map(({ node: item }) => (
      <div key={item.frontmatter.title} className="column is-6">
        <div className=" card">
          <div className="card-content">
            <div className="title">
              {item.frontmatter.title}
            </div>
            <p className="has-text-justified">{item.frontmatter.description}</p>
          </div>
          <footer className="card-footer">
            {item.frontmatter.url && <a href={item.frontmatter.url} className="card-footer-item">Mergi la aplicație</a>}
            {item.frontmatter.gitUrl && <a href={item.frontmatter.gitUrl} className="card-footer-item">Github</a>}
          </footer>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      gitUrl: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
