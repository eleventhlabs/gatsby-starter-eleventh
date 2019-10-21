import styled from '@emotion/styled'

import Text from './Text'

const Heading = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  color: ${props => props.theme.colors.text100};
`

Heading.defaultProps = {
  as: 'h1'
}

export default Heading
