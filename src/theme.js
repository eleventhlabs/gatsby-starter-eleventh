/**
 * theme.js
 * Inspired by: https://styled-system.com/theme-specification/
 */

import './styles/reset.css'

import './styles/fonts/pt-sans.css'
import fontsBody from './styles/fonts/pt-sans-config'

import './styles/fonts/pt-serif.css'
import fontsHeading from './styles/fonts/pt-serif-config'

const colors = {
  gray100: '#000000',
  blue100: '#0000ff'
}

export default {
  colors: {
    ...colors,
    accent100: colors.blue100,
    text100: colors.gray100
  },
  fonts: {
    body: {
      ...fontsBody,
      family: `${fontsBody.family}, sans-serif`
    },
    heading: {
      ...fontsHeading,
      family: `${fontsHeading.family}, serif`
    }
  }
}
