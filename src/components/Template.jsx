import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles'
import theme from '../theme'

const Template = ({ children, description, title }) => (
  <ThemeProvider
    theme={theme}
  >
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
    <Global
      styles={css`
        html {
          text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />

    {children}
  </ThemeProvider>
)

Template.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Template
