import { DialogClose, DialogTitle } from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const BagListContainer = styled('aside', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 9999,
  width: 480,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  paddingInline: 48,
  paddingTop: 72,
  paddingBottom: 48,
})

export const Header = styled(DialogTitle, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  margin: '0 auto',

  h1: {
    fontSize: '$lg',
  },
})

export const BagMain = styled('main', {
  display: 'flex',
  width: '100%',
  marginLeft: 'auto',
})

export const BagItems = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(330px + 158px)',
  gap: '1.5rem',
  overflowY: 'auto',
})

export const CloseButton = styled(DialogClose, {
  display: 'flex',
  position: 'relative',
  background: 'transparent',
  border: 0,
  bottom: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray-500',
})

export const BagFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '40px',
  gap: 55,

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})

export const QuantityInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$md',
  },
})

export const TotalInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '$md',
  lineHeight: 1.6,

  span: {
    fontSize: '$lg',
    lineHeight: 1.4,
  },
})
