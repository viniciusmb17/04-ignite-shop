import { keyframes, styled } from '../../..'

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
  width: 576,
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

  background: 'linear-gradient(270deg, $gray800, $gray700)',
  backgroundSize: '400% 400%',
  animation: `${skeletonLoading} 1.5s infinite`,
})
