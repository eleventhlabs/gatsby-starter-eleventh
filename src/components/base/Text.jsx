import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Box from './Box'

const Text = styled(Box)`
  ${props => calcTextStyle(props.theme.fonts.body, {
    fontSize: 16,
    lineHeight: 1.5
  })}

  color: ${props => props.theme.colors.text100};
`

Text.defaultProps = {}

export default Text

/**
 * Helper Functions
 */

const calcTextStyle = (font, { fontSize, lineHeight }) => {
  if (!fontSize) return css``

  const rhythm = 16

  const measurements = font.rhythm[rhythm].size[fontSize]
  const targetLineHeight = measurements.lineHeight[lineHeight]
    ? lineHeight
    : Math.min(...Object.keys(measurements.lineHeight))

  const padding = measurements.lineHeight[targetLineHeight]

  return css`
    padding-top: ${padding.top + font.units};
    padding-bottom: ${padding.bottom + font.units};
    font-family: ${font.family};
    font-size: ${fontSize + font.units};
    line-height: ${(targetLineHeight * rhythm + font.units)};
  `
}

export { calcTextStyle }
