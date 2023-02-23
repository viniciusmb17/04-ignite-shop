import { DialogContent, DialogPortal } from '@radix-ui/react-dialog'
import { BagItem } from '../BagItem'
import {
  BagMain,
  BagListContainer,
  Header,
  BagItems,
  CloseButton,
  BagFooter,
  QuantityInfo,
  TotalInfo,
} from './style'
import { X } from 'phosphor-react'

// TODO: Finalizar implementação funcional de BagList utilizando RadixUi
export function BagList() {
  return (
    <DialogPortal>
      <DialogContent asChild>
        <BagListContainer>
          <Header>
            <h1>Sacola de compras</h1>
            <CloseButton>
              <X size={24} />
            </CloseButton>
          </Header>
          <BagMain>
            <BagItems>
              <BagItem />
              <BagItem />
              <BagItem />
              <BagItem />
              <BagItem />
              <BagItem />
            </BagItems>
          </BagMain>
          <BagFooter>
            <section>
              <QuantityInfo>
                <p>Quantidade</p>
                <span>3 itens</span>
              </QuantityInfo>
              <TotalInfo>
                <strong>Valor total</strong>
                <span>
                  <strong>R$ 270,00</strong>
                </span>
              </TotalInfo>
            </section>
            <button>Finalizar compra</button>
          </BagFooter>
        </BagListContainer>
      </DialogContent>
    </DialogPortal>
  )
}
