import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  // Handle different event types
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      const { plan } = session.metadata

      console.log(`✅ Payment successful for ${plan} plan`)
      console.log(`Customer: ${session.customer_email}`)
      console.log(`Subscription ID: ${session.subscription}`)

      // TODO: Update user subscription status in your database
      // Example:
      // await updateUserSubscription(session.customer_email, plan, session.subscription)

      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object
      console.log(`📝 Subscription updated: ${subscription.id}`)
      // TODO: Update subscription details in your database
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object
      console.log(`❌ Subscription cancelled: ${subscription.id}`)
      // TODO: Update user subscription status to free in your database
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object
      console.log(`⚠️ Payment failed for invoice: ${invoice.id}`)
      // Stripe will automatically retry failed payments
      // You can send an email notification here
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object
      console.log(`✅ Invoice paid: ${invoice.id}`)
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
