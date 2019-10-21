import styled from '@emotion/styled'

import Box from './Box'

const Separator = styled(Box)`
  border-style: solid;
`

Separator.defaultProps = {
  as: 'hr'
}

export default Separator
