import { getProducts } from "./get-products";
import { calculateTotal } from "./calculate-total";
import { createPreference } from "../payments/mercado-pago";

export async function checkoutService(
  items: {
    productId: string;
    quantity: number;
  }[]
) {
  const products = getProducts(items);

  const total = calculateTotal(products);

  const preference = await createPreference(products);

  return {
    products,
    total,
    preferenceId: preference.id,
  };
}