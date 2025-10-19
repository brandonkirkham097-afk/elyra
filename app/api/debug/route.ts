import { NextResponse } from "next/server";

export async function GET() {
  const hasKey = !!process.env.STRIPE_SECRET_KEY;
  return NextResponse.json({
    stripeKeyLoaded: hasKey,
    stripeKeyLength: hasKey ? process.env.STRIPE_SECRET_KEY!.length : 0,
  });
}
