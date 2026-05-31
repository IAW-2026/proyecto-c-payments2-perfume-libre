import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function createPreference(products: {
  id: string;
  name: string;
  price: number;
  quantity: number;
}[]) {
  const preference = new Preference(client);

  const response = await preference.create({
    body: {
      items: products.map((product) => ({
        id: product.id,
        title: product.name,
        quantity: product.quantity,
        unit_price: product.price,
      })),
    },
  });

  return response;
}