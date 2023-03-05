import axios from 'axios'
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
import { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

export function BagList() {
  const { removeItem, cartDetails, cartCount, totalPrice } = useShoppingCart()
  const formattedTotalPrice = formatCurrencyString({
    value: totalPrice,
    currency: 'BRL',
    language: 'pt-BR',
  })

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cartEntries = Object.values(cartDetails ?? {}).map((item) => (
    <BagItem key={item.id} item={item} removeItem={removeItem} />
  ))

  // TODO: Refazer/ajustar função para criar sessão de checkout
  async function handleCreateCheckoutSession() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

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
              {cartEntries.length === 0 ? <p>O carrinho está vazio.</p> : null}
              {cartEntries.length > 0 && cartEntries}
            </BagItems>
          </BagMain>
          <BagFooter>
            <section>
              <QuantityInfo>
                <p>Quantidade</p>
                <span>
                  {cartCount}
                  {cartCount === 1 ? ' item' : ' itens'}
                </span>
              </QuantityInfo>
              <TotalInfo>
                <strong>Valor total</strong>
                <span>
                  <strong>{formattedTotalPrice}</strong>
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
