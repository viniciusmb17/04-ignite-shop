import { BagContainer, BagMain, BagCounter } from './style'
import { Handbag } from 'phosphor-react'

interface BagProps {
  color?: 'gray' | 'green'
  isFull?: boolean
}

export function Bag({ color = 'gray', isFull = false }: BagProps) {
  return (
    <BagContainer>
      <BagMain color={color} isFull={isFull}>
        <Handbag size={'1.5rem'} weight="bold" />
      </BagMain>
      {isFull && (
        <BagCounter>
          <span>1</span>
        </BagCounter>
      )}
    </BagContainer>
  )
}
