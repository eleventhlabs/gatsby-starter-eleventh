import styled from '@emotion/styled'

import Text, { calcTextStyle } from './Text'

const Heading = styled(Text)`
  ${props => calcTextStyle(props.theme.fonts.heading, {
    fontSize: 16,
    lineHeight: 1.5
  })}

  font-weight: bold;
  color: ${props => props.theme.colors.text100};
`

Heading.defaultProps = {
  as: 'h1'
}

export default Heading
