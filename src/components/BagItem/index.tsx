import Image from 'next/image'
import {
  BagItemContainer,
  ImageContainer,
  ItemDetails,
  ItemDetailsAction,
  ItemDetailsName,
  ItemDetailsPrice,
} from './style'
import camiseta5 from '../../assets/camisetas/5.png'

// TODO: Finalizar implementação funcional de BagItem component

export function BagItem(props) {
  return (
    <BagItemContainer>
      <ImageContainer>
        <Image src={camiseta5} alt="image" width={101.94} height={93} />
      </ImageContainer>
      <ItemDetails>
        <ItemDetailsName>Camiseta Beyond the Limits</ItemDetailsName>
        <ItemDetailsPrice>R$ 79,90</ItemDetailsPrice>
        <ItemDetailsAction>Remover</ItemDetailsAction>
      </ItemDetails>
    </BagItemContainer>
  )
}
