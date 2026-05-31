import { NextRequest, NextResponse } from "next/server";
import { checkoutService } from "@/lib/checkout/checkout-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (
      !body.items ||
      !Array.isArray(body.items) ||
      body.items.length === 0
    ) {
      return NextResponse.json(
        {
          error: "items is required",
        },
        {
          status: 400,
        }
      );
    }

    const result = await checkoutService(body.items);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      {
        error: "Failed to create checkout",
      },
      {
        status: 500,
      }
    );
  }
}