'use client'

import { initMercadoPago, Payment } from '@mercadopago/sdk-react'

const mpPublicKey = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY

if (!mpPublicKey) {
  throw new Error('NEXT_PUBLIC_MP_PUBLIC_KEY no está definido')
}

initMercadoPago(mpPublicKey)

type Props = {
  preferenceId: string
  amount: number
}

export function MercadoPagoBrick({
  preferenceId,
  amount,
}: Props) {
  return (
    <Payment
      initialization={{
        amount,
        preferenceId,
      }}
      customization={{
      paymentMethods: {
        creditCard: 'all',
        debitCard: 'all',
        prepaidCard: 'all',
        ticket: 'all',
        mercadoPago: 'all',
        },
      }}
      onSubmit={async ({ selectedPaymentMethod, formData }) => {
        console.log(selectedPaymentMethod)
        console.log(formData)

        return Promise.resolve()
      }}
      onError={(error) => {
        console.error(error)
      }}
    />
  )
}