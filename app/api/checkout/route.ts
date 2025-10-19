import 'dotenv/config';
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error("❌ Missing STRIPE_SECRET_KEY in environment");
    return NextResponse.json({ error: "Stripe secret key missing" }, { status: 500 });
  }

  const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://teal-macaron-91b86b.netlify.app";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Elyra Pro Access",
              description: "Full Profit Reports + Launch Blueprints",
            },
            unit_amount: 900,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/paywall`,
    });

    console.log("✅ Stripe session created:", session.id);
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("🚨 Stripe Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
