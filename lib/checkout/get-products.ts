import { products } from "@/app/data/products";

export function getProducts(
  items: {
    productId: string;
    quantity: number;
  }[]
) {
  return items.map(item => {
    const product = products.find(
      p => p.id === item.productId
    );

    if (!product) {
      throw new Error(
        `Product ${item.productId} not found`
      );
    }

    return {
      ...product,
      quantity: item.quantity,
    };
  });
}