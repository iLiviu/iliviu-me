import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <link rel="icon" type="image/x-icon" href="/img/favicon.png" />
        <meta name="theme-color" content="#2b2523" />
      </Helmet>
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
