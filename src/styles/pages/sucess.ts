import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) /2))',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '0 auto',
  paddingTop: '42px',
  height: 656,

  h1: {
    marginTop: '3rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1.5rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '4rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100vh',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,

  overflowX: 'auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  minWidth: 145,
  maxWidth: 145,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483, #7465d4)',
  borderRadius: 99,
  padding: '0.25rem',
  margin: '0 -1.625rem',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
