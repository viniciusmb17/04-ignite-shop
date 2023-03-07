import { styled } from '../../styles'

export const BagContainer = styled('button', {
  display: 'block',
  height: 52,
  border: 0,
  background: 'transparent',
})

export const BagMain = styled('main', {
  width: 48,
  height: 48,
  padding: 12,
  border: 0,

  borderRadius: 6,
  cursor: 'pointer',

  variants: {
    color: {
      green: {
        background: '$green500',
        color: '$white',

        '&:hover': {
          background: '$green300',
        },
      },
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
    },
    isNotEmpty: {
      true: {
        color: '$gray300',
      },
    },
  },
})

export const BagCounter = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',

  position: 'relative',
  bottom: 56,
  left: 28,

  width: 28,
  height: 28,

  fontFamily: 'Roboto, sans-serif',
  fontSize: '$sm',
  fontWeight: 700,
  lineHeight: 1.6,

  background: '$green500',
  borderRadius: 33,
  border: '3px solid #121214',

  span: {
    color: '$white',
  },
})
