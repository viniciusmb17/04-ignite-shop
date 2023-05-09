import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'
import { CartDetails } from 'use-shopping-cart/core'

type CartDetailsType = CartDetails

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { cartDetails }: { cartDetails: CartDetailsType } = req.body
  const cartDetailsArray = Object.values(cartDetails)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const lineItems = cartDetailsArray.map((cartItem) => {
    if (!cartItem?.defaultPriceId) {
      res.status(400).json({ error: 'Price not found.' })
      return {}
    }

    return {
      price: cartItem.defaultPriceId,
      quantity: cartItem.quantity,
    }
  })

  const succesUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: succesUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return res.status(201).json({
    sessionId: checkoutSession.id,
  })
}
