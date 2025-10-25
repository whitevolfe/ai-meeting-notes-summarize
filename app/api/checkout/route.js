import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { priceId, planName } = await request.json();

    if (!priceId || !planName) {
      return NextResponse.json(
        { error: 'Missing priceId or planName' },
        { status: 400 }
      );
    }

    // Get the domain and ensure it has a proper scheme
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    if (!domain) {
      console.error('NEXT_PUBLIC_DOMAIN is not set in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: domain not set' },
        { status: 500 }
      );
    }

    // Ensure domain has http:// or https://
    const domainWithScheme =
      domain.startsWith('http://') || domain.startsWith('https://')
        ? domain
        : `http://${domain}`;

    console.log('Using domain for checkout URLs:', domainWithScheme);

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${domainWithScheme}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainWithScheme}/pricing`,
      customer_email: undefined,
      metadata: {
        plan: planName,
      },
    });

    // Stripe may return a hosted session URL in `session.url` which is the
    // recommended redirect target. Return both id and url so the frontend
    // can prefer the hosted URL and avoid client-side Stripe initialization
    // errors like "CheckoutInitError: apiKey is not set".
    return NextResponse.json({
      sessionId: session.id,
      url: session.url || null,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
