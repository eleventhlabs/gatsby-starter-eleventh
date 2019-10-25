import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'

import { Box, calcTextStyle, Heading, Paragraph } from '../components/base'
import theme from '../theme'

const Baseliner = () => (
  <ThemeProvider
    theme={theme}
  >
    <BaselinerInner>
      <Global
        styles={getBaselinesCSS('16px')}
      />
      <Heading
        css={css`
          ${calcTextStyle(theme.fonts.heading, {
            fontSize: 24
          })}
        `}
      >
        Heading 1<br />Line
      </Heading>
      <Paragraph
        css={css`
          ${calcTextStyle(theme.fonts.body, {
            fontSize: 16
          })}
        `}
      >
        Paragraph 1<br />Line
      </Paragraph>
    </BaselinerInner>
  </ThemeProvider>
)

export default Baseliner

/**
 * Styles
 */

const BaselinerInner = styled(Box)`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  padding-top: 64px;
`

/**
 * Helper Functions
 */

const getBaselinesCSS = rhythm => css`
  html {
    position: relative;

    ::before {
      content: '';

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      min-height: 100vh;
      background-image:
        repeating-linear-gradient(
          to bottom,
          rgba(255, 0, 0, 0.2),
          rgba(255, 0, 0, 0.2) 1px,
          transparent 1px,
          transparent ${rhythm}
        );
      background-position: 0;
      z-index: 999;
      pointer-events: none;
    }
  }
`
