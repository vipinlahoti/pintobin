import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/main.sass'

const TemplateWrapper = ({ children }) => (
  <div className="has-navbar-fixed-top">
    <Helmet
      title="PintoBin Techno Solutions Pvt Ltd"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    
    {children()}

    <Footer />
    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
