import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    // ✅ Your live deployment URL
    const baseUrl = "https://elyra-chi.vercel.app";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Elyra Pro Access" },
            unit_amount: 900, // $9.00 USD
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/paywall`,
    });

    console.log("✅ Stripe session created:", session.url);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("🚨 Stripe Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
