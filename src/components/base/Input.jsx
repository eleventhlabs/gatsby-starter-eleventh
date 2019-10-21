import styled from '@emotion/styled'

import Box from './Box'

const Input = styled(Box)`
  -webkit-appearance: none;

  padding: 0;
  border: none;
  font-size: inherit;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text100};
`

Input.defaultProps = {
  as: 'input'
}

export default Input
