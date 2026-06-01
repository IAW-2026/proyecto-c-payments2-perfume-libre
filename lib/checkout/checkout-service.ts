import { getProducts } from "./get-products";
import { calculateTotal } from "./calculate-total";
import { createPreference } from "../payments/mercado-pago";
import { createPayment } from "../payments/create-payments";

type CheckoutItem = {
  productId: string;
  quantity: number;
};

type CheckoutParams = {
  buyerId: string;
  items: CheckoutItem[];
};

export async function checkoutService({
  buyerId,
  items,
}: CheckoutParams) {
  const products = getProducts(items);

  const total = calculateTotal(products);

  const idVendedores = [
    ...new Set(
      products.map((product) => product.sellerId)
    ),
  ];

  const pago = await createPayment({
    idComprador: buyerId,
    idVendedores,
    monto: total,
  });

  const preference = await createPreference(products);

  return {
    pago,
    products,
    total,
    preferenceId: preference.id,
  };
}