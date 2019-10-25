import styled from '@emotion/styled'

import Box from './Box'

const Button = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 96px;
  padding: 0;
  border: none;
  font-family: ${props => props.theme.fonts.body.family};
  font-size: inherit;
  color: white;
  background: gray;
  cursor: pointer;
`

Button.defaultProps = {
  as: 'button'
}

export default Button
