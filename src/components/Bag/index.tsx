import { BagContainer, BagMain, BagCounter } from './style'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

interface BagProps {
  color?: 'gray' | 'green'
  onClick?: () => void
  hasCounter?: boolean
}

export function Bag({ color = 'gray', onClick, hasCounter = false }: BagProps) {
  const { cartCount } = useShoppingCart()
  const isNotEmpty = cartCount > 0

  return (
    <BagContainer onClick={onClick}>
      <BagMain color={color} isNotEmpty={isNotEmpty}>
        <Handbag size={'1.5rem'} weight="bold" />
      </BagMain>
      {isNotEmpty && hasCounter && (
        <BagCounter>
          <span>{cartCount}</span>
        </BagCounter>
      )}
    </BagContainer>
  )
}
