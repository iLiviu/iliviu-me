import React from 'react'

import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {

  pagePath(pageIndex) {
    return (pageIndex > 1) ? '/blog/' + pageIndex : '/blog';
  }

  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-10 is-offset-1">

                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Postări
                </h2>

                <BlogRoll posts={posts} />

                {numPages > 1 && <div className="column is-full">
                  <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    {previousPage > 0 && <Link className="pagination-previous" to={this.pagePath(previousPage)}>Previous</Link>}
                    {currentPage < numPages && <Link className="pagination-next" to={this.pagePath(nextPage)}>Next page</Link>}

                    <ul className="pagination-list">
                      {previousPage > 0 &&
                        <li key='first'><Link className="pagination-link" aria-label="Goto page 1" to={this.pagePath(1)}>
                          1
                        </Link></li>
                      }
                      {previousPage > 0 &&
                        <li key='prev-dots'><span className="pagination-ellipsis">&hellip;</span></li>}
                      {previousPage > 1 &&
                        <li key='prev'><Link className="pagination-link" aria-label="Goto page {previousPage}" to={this.pagePath(previousPage)}>
                          {previousPage}
                        </Link></li>
                      }

                      <li key='current'><Link className="pagination-link is-current" aria-label={"Page " + currentPage} aria-current="page" to={this.pagePath(currentPage)}>{currentPage}</Link></li>
                      {currentPage < numPages - 1 &&
                        <li key='next'><Link className="pagination-link" aria-label={"Goto page " + nextPage} to={this.pagePath(nextPage)}>{nextPage}</Link></li>
                      }
                      {currentPage < numPages &&
                        <li key='next-dots'><span className="pagination-ellipsis">&hellip;</span></li>
                      }
                      {currentPage < numPages &&
                        <li key='last'><Link className="pagination-link" aria-label={"Goto page " + numPages} to={this.pagePath(numPages)}> {numPages}</Link></li>
                      }
                    </ul>
                  </nav>
                </div>
                }

              </div>
            </div>
          </div>

        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
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
