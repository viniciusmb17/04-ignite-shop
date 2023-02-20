import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const BagContainer = styled('div', {
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
      },
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
    },
  },
})
