import styled from '@emotion/styled'

import Box from './Box'

const Link = styled(Box)`
  ${props => {
    switch (props.display) {
      case 'block':
        return `
          display: block;
          text-decoration: none;
          cursor: pointer;
        `
      case 'block-zero':
        return `
          display: block;
          font-size: 0;
          text-decoration: none;
          cursor: pointer;
        `
      case 'inline':
      default:
        return `
        `
    }
  }}
`

Link.defaultProps = {
  as: 'a',
  display: 'inline' // ['block', 'block-zero', 'inline']
}

export default Link
