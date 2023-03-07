import Image from 'next/image'
import {
  CartActions,
  CartEntry as ICartEntry,
  formatCurrencyString,
} from 'use-shopping-cart/core'
import {
  BagItemContainer,
  ImageContainer,
  ItemDetails,
  ItemDetailsAction,
  ItemDetailsCounter,
  ItemDetailsCounterInput,
  ItemDetailsName,
  ItemDetailsPrice,
} from './style'
import camiseta5 from '../../assets/camisetas/5.png'
import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'

interface BagItemProps {
  item: ICartEntry
  quantity: number
  removeItem: CartActions['removeItem']
  incrementItem: CartActions['incrementItem']
  decrementItem: CartActions['decrementItem']
  setItemQuantity: CartActions['setItemQuantity']
}

export function BagItem({
  item,
  quantity,
  removeItem,
  incrementItem,
  decrementItem,
  setItemQuantity,
}: BagItemProps) {
  const formattedPrice = formatCurrencyString({
    value: item?.value,
    currency: 'BRL',
    language: 'pt-BR',
  })

  function handleIncrementItem() {
    incrementItem(item.id)
  }

  function handleDecrementItem() {
    decrementItem(item.id)
  }

  function handleSetItemQuantity(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10)

    setItemQuantity(item.id, value)
  }

  return (
    <BagItemContainer>
      <ImageContainer>
        <Image src={camiseta5} alt="image" width={101.94} height={93} />
      </ImageContainer>
      <ItemDetails>
        <ItemDetailsName>{item.name}</ItemDetailsName>
        <ItemDetailsPrice>{formattedPrice}</ItemDetailsPrice>
        <ItemDetailsCounter>
          <div onClick={handleDecrementItem}>
            <Minus size={'0.875rem'} weight={'bold'} />
          </div>
          <ItemDetailsCounterInput
            value={quantity}
            onChange={handleSetItemQuantity}
          />
          <div onClick={handleIncrementItem}>
            <Plus size={'0.875rem'} weight={'bold'} />
          </div>
        </ItemDetailsCounter>
        <ItemDetailsAction onClick={() => removeItem(item.id)}>
          Remover
        </ItemDetailsAction>
      </ItemDetails>
    </BagItemContainer>
  )
}
