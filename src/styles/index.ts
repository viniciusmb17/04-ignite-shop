import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray700: '#2A2A30',
      gray500: '#8D8D99',
      gray300: '#c4c4cc',
      gray200: '#c4c4c6',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      sm: '0.875rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
