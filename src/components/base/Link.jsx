import styled from '@emotion/styled'

import Box from './Box'

const Link = styled(Box)`
  display: block;

  text-decoration: none;
  cursor: pointer;
`

Link.defaultProps = {
  as: 'a'
}

export default Link
