import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import {
  formatCurrencyString,
  Product as IProduct,
} from 'use-shopping-cart/core'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { CardSkeleton } from '../../styles/pages/product/CardSkeleton'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addItem } = useShoppingCart()
  const formattedPrice = formatCurrencyString({
    value: product?.price,
    currency: 'BRL',
    language: 'pt-BR',
  })

  function handleAddToCart() {
    addItem(product)
  }

  return (
    <>
      {product && (
        <Head>
          <title>{product.name} | Ignite Shop</title>
        </Head>
      )}

      {isFallback && <p>Loading...</p>}
      {!isFallback && (
        <ProductContainer>
          <Suspense fallback={<CardSkeleton />}>
            <ImageContainer>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
            </ImageContainer>
          </Suspense>
          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{formattedPrice}</span>

            <p>{product.description}</p>

            <button onClick={handleAddToCart}>Colocar na sacola</button>
          </ProductDetails>
        </ProductContainer>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NMAeYuGzXJdPbw' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        price_data: {
          price_id: price.id,
        },
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
