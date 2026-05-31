export function calculateTotal(
  products: {
    price: number;
    quantity: number;
  }[]
) {
  return products.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );
}