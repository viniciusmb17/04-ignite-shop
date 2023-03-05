import { Suspense, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { HomeContainer, Product, ProductFooter } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { Bag } from '../components/Bag'
import { CardSkeleton } from '../styles/pages/home/components/CardSkeleton'
import { Arrow } from '../styles/pages/home/components/Arrow'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

// TODO: Create a useCustomHook for slider arrows functionality

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loadedSlider, setLoadedSlider] = useState(false)
  const perViewSlider = 3
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: perViewSlider,
      spacing: 48,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoadedSlider(true)
    },
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Suspense
              key={product.id}
              fallback={
                <CardSkeleton key={product.id} className="keen-slider__slide" />
              }
            >
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                prefetch={false}
              >
                <Product className="keen-slider__slide">
                  <Image
                    src={product.imageUrl}
                    width={654}
                    height={480}
                    alt=""
                  />

                  <ProductFooter>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <Bag color="green" onClick={() => alert('Clicou')} />
                  </ProductFooter>
                </Product>
              </Link>
            </Suspense>
          )
        })}
        {loadedSlider && instanceRef.current && (
          <>
            {currentSlide !== 0 && (
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            )}
            {currentSlide !==
              instanceRef.current.track.details.slides.length -
                perViewSlider && (
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            )}
          </>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
