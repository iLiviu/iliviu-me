import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.fields.slug}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="post-meta">
                    <div className="">
                      <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                      {post.frontmatter.title}
                      </Link>
                    </div>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </div>
                </header>
                <div>
                  <p>{post.excerpt}</p>
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Continuă să citești →
                  </Link>
                </div>
              </article>
            </div>
          ))}
      </div>

    )
  }
}

BlogRoll.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.object
      })
    })
  ),
}

export default BlogRoll
