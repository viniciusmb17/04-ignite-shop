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
  minHeight: 656,
})

export const BagItems = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '20.625rem',
  gap: '1.5rem',
})

export const BagItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
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
