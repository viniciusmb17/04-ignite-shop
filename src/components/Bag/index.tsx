import { BagContainer, BagMain, BagCounter } from './style'
import { Handbag } from 'phosphor-react'

interface BagProps {
  color?: 'gray' | 'green'
  counter?: number
  onClick?: () => void
}

export function Bag({ color = 'gray', counter = 0, onClick }: BagProps) {
  const isFull = counter > 0

  return (
    <BagContainer onClick={onClick}>
      <BagMain color={color} isFull={isFull}>
        <Handbag size={'1.5rem'} weight="bold" />
      </BagMain>
      {isFull && (
        <BagCounter>
          <span>{counter}</span>
        </BagCounter>
      )}
    </BagContainer>
  )
}
