import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    // Scrollbar
    /* width */
    '&::-webkit-scrollbar': {
      width: 15,
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '$gray900',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '$green500',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      background: '$green300',
    },
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
