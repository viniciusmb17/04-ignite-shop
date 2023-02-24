import { styled } from '../../../..'

const ArrowBase = styled('svg', {
  width: 30,
  height: 30,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  '-webkit-transform': 'translateY(-50%)',
  fill: '$gray200',
  cursor: 'pointer',
})
export const ArrowLeft = styled(ArrowBase, {
  left: 5,
})
export const ArrowRight = styled(ArrowBase, {
  left: 'auto',
  right: 5,
})
