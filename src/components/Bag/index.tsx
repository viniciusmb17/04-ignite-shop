import { BagContainer, BagMain, BagCounter } from './style'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

interface BagProps {
  color?: 'gray' | 'green'
  onClick?: () => void
}

export function Bag({ color = 'gray', onClick }: BagProps) {
  const { cartCount } = useShoppingCart()
  console.log(cartCount)
  const isFull = cartCount > 0

  return (
    <BagContainer onClick={onClick}>
      <BagMain color={color} isFull={isFull}>
        <Handbag size={'1.5rem'} weight="bold" />
      </BagMain>
      {isFull && (
        <BagCounter>
          <span>{cartCount}</span>
        </BagCounter>
      )}
    </BagContainer>
  )
}
