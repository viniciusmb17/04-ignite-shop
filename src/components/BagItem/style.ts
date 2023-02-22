import { styled } from '../../styles'

export const BagItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  minHeight: '5.875rem',
  columnGap: '1.25rem',
})

export const ImageContainer = styled('div', {
  width: '6.3712rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483, #7465d4)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '.5rem',
})

export const ItemDetailsName = styled('p', {
  fontSize: '$md',
  lineHeight: 1.6,
})
export const ItemDetailsPrice = styled('span', {
  fontSize: '$md',
  fontWeight: '700',
  lineHeight: 1.6,
})
export const ItemDetailsAction = styled('button', {
  border: 0,
  background: 'transparent',
  color: '$green500',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '700',
  lineHeight: 1.6,
  cursor: 'pointer',

  '&:hover': {
    color: '$green300',
  },
})
