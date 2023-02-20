import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { BagContainer, Container, Header } from '../styles/pages/app'
import { Handbag } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" width={129.74} height={52} />
        <BagContainer color="gray">
          <Handbag size={'1.5rem'} weight="bold" />
        </BagContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
