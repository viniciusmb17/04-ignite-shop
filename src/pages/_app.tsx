import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
import { Bag } from '../components/Bag'
import { BagList } from '../components/BagList'
import { Dialog as DialogRoot, DialogTrigger } from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter()
  const isSuccessPage = pathname === '/success'

  return (
    <>
      <Container>
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
                <Bag counter={5} />
              </DialogTrigger>
              <BagList />
            </DialogRoot>
          )}
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
