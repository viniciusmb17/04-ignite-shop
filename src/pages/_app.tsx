import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import { Bag } from '../components/Bag'
import { BagList } from '../components/BagList'
import { Dialog as DialogRoot, DialogTrigger } from '@radix-ui/react-dialog'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter()
  const isSuccessPage = pathname === '/success'
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  return (
    <>
      <Container>
        <CartProvider
          cartMode="checkout-session"
          stripe={stripeKey}
          currency="BRL"
          loading={<p aria-live="polite">Loading redux-persist...</p>}
          shouldPersist
        >
          <Header isSuccessPage={isSuccessPage}>
            <Image
              src={logoImg}
              alt=""
              width={129.74}
              height={52}
              onClick={() => push('/')}
            />
            {!isSuccessPage && (
              <DialogRoot>
                <DialogTrigger asChild>
                  <Bag hasCounter />
                </DialogTrigger>
                <BagList />
              </DialogRoot>
            )}
          </Header>
          <Component {...pageProps} />
        </CartProvider>
      </Container>
    </>
  )
}
