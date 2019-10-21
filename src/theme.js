/**
 * theme.js
 * Inspired by: https://styled-system.com/theme-specification/
 */

const COLORS = {
  gray100: '#000000',
  blue100: '#0000ff'
}

export default {
  colors: {
    ...COLORS,
    accent100: COLORS.blue100,
    text100: COLORS.gray100
  },
  fonts: {
    body: 'sans-serif',
    heading: 'serif'
  }
}
