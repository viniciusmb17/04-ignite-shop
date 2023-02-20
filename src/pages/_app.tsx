import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import { Bag } from '../components/Bag'
import { BagList } from '../components/BagList'
import { Dialog as DialogRoot, DialogTrigger } from '@radix-ui/react-dialog'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          <Image src={logoImg} alt="" width={129.74} height={52} />
          <DialogRoot>
            <DialogTrigger asChild>
              <Bag counter={5} />
            </DialogTrigger>
            <BagList />
          </DialogRoot>
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
