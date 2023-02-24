import { keyframes, styled } from '../../../..'

const skeletonLoading = keyframes({
  '0% ': {
    backgroundPosition: '0% 50%',
  },
  '50% ': {
    backgroundPosition: '100% 51%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

export const CardContainer = styled('div', {
  width: 696,
  height: 656,
  opacity: 0.5,
  borderRadius: 8,
  rowGap: 24,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
})

export const ItemOne = styled('section', {
  width: 696,
  height: 600,
  borderRadius: 8,

  background: 'linear-gradient(270deg, $gray800, $gray700)',
  backgroundSize: '400% 400%',
  animation: `${skeletonLoading} 1.5s infinite`,
})
export const ItemTwo = styled('section', {
  width: 330,
  height: 32,
  borderRadius: 8,
  background: 'linear-gradient(270deg, $gray800, $gray700)',
  backgroundSize: '400% 400%',
  animation: `${skeletonLoading} 1.5s infinite`,
})
export const ItemThree = styled('section', {
  width: 100,
  height: 32,
  borderRadius: 8,
  background: 'linear-gradient(270deg, $gray800, $gray700)',
  backgroundSize: '400% 400%',
  animation: `${skeletonLoading} 1.5s infinite`,
})
