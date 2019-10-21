import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles'

const Template = ({ children, description, title }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>

    {children}
  </div>
)

Template.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Template
