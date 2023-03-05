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
  ItemDetailsName,
  ItemDetailsPrice,
} from './style'
import camiseta5 from '../../assets/camisetas/5.png'

interface BagItemProps {
  item: ICartEntry
  removeItem: CartActions['removeItem']
}

export function BagItem({ item, removeItem }: BagItemProps) {
  const formattedPrice = formatCurrencyString({
    value: item?.value,
    currency: 'BRL',
    language: 'pt-BR',
  })

  return (
    <BagItemContainer>
      <ImageContainer>
        <Image src={camiseta5} alt="image" width={101.94} height={93} />
      </ImageContainer>
      <ItemDetails>
        <ItemDetailsName>{item.name}</ItemDetailsName>
        <ItemDetailsPrice>{formattedPrice}</ItemDetailsPrice>
        <ItemDetailsAction onClick={() => removeItem(item.id)}>
          Remover
        </ItemDetailsAction>
      </ItemDetails>
    </BagItemContainer>
  )
}
