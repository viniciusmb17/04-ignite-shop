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
  const {
    removeItem,
    cartDetails,
    cartCount,
    totalPrice,
    incrementItem,
    decrementItem,
    setItemQuantity,
    redirectToCheckout,
  } = useShoppingCart()
  const formattedTotalPrice = formatCurrencyString({
    value: totalPrice,
    currency: 'BRL',
    language: 'pt-BR',
  })

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cartEntries = Object.values(cartDetails ?? {}).map((item) => {
    console.log(item)
    return (
      <BagItem
        key={item.id}
        item={item}
        quantity={item.quantity}
        removeItem={removeItem}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        setItemQuantity={setItemQuantity}
      />
    )
  })

  // TODO: Refazer/ajustar função para criar sessão de checkout
  async function handleCreateCheckoutSession() {
    if (cartCount > 0) {
      setIsCreatingCheckoutSession(true)
      try {
        const response = await axios.post('/api/checkout', {
          cartDetails,
        })

        const { data } = response

        if (data?.sessionId) {
          redirectToCheckout(data.sessionId)
        }
      } catch (err) {
        // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
        console.error(err)

        alert('Falha ao redirecionar para o checkout')
      } finally {
        setIsCreatingCheckoutSession(false)
      }
    } else {
      alert('O carrinho está vazio')
    }
  }

  if (isCreatingCheckoutSession) {
    return <div>Loading...</div>
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
              {cartEntries.length === 0 && <p>O carrinho está vazio.</p>}
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
            <button onClick={handleCreateCheckoutSession}>
              Finalizar compra
            </button>
          </BagFooter>
        </BagListContainer>
      </DialogContent>
    </DialogPortal>
  )
}
