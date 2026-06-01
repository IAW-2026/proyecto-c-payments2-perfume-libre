import { Pago } from './payment-types'

type CreatePaymentParams = {
  idComprador: string
  idVendedores: string[]
  monto: number
}

export async function createPayment({
  idComprador,
  idVendedores,
  monto,
}: CreatePaymentParams): Promise<Pago> {
  const now = new Date()

  return {
    id_pago: crypto.randomUUID(),

    id_comprador: idComprador,
    id_vendedores: idVendedores,

    monto,

    estado: 'pendiente',

    creado: now,
    actualizado: now,
  }
}