import styled from '@emotion/styled'

import Box from './Box'

const Text = styled(Box)`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text100};`

Text.defaultProps = {}

export default Text
