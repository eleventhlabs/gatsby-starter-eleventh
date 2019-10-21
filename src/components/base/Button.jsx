import styled from '@emotion/styled'

import Box from './Box'

const Button = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;
  font-size: inherit;
  font-family: ${props => props.theme.fonts.body};
  color: white;
  background: ${props => props.theme.colors.gray100};
  cursor: pointer;
`

Button.defaultProps = {
  as: 'button'
}

export default Button
