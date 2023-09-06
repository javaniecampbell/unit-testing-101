// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

type Data = {
  session: {

    id: string
    url: string
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});
type CartItem = {
  price: number
  quantity: number
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'POST') {
    const items = req.body as CartItem[]
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      success_url: `http://${req.headers.origin}/success?session={SESSION_ID}`,
      cancel_url: `http://${req.headers.origin}/cart?canceled=true&session={SESSION_ID}`,

    });
    //REPLACE: Replace this with your own logic
    res.status(200).json({
      session: {
        id: session.id,
        url: session?.url!,
      }
    })
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
