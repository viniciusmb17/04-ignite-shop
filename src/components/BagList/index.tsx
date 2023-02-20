import { DialogContent, DialogPortal } from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  BagMain,
  BagListContainer,
  Header,
  BagItems,
  BagItemContainer,
  CloseButton,
} from './style'

// TODO: Finalizar implementação visual e funcional de BagList utilizando RadixUi
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
            </BagItems>
          </BagMain>
        </BagListContainer>
      </DialogContent>
    </DialogPortal>
  )
}

function BagItem(props) {
  return (
    <BagItemContainer>
      <div>teste</div>
    </BagItemContainer>
  )
}
