'use client'

import { useState } from 'react'

type CheckoutResponse = {
  [key: string]: unknown
}

export function CheckoutTest() {
  const [response, setResponse] = useState<CheckoutResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/payments/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              productId: 'prod_1',
              quantity: 1,
            },
            {
              productId: 'prod_2',
              quantity: 2,
            },
          ],
        }),
      })

      const data = await res.json()

      setResponse(data)

      if (data && typeof data.url === 'string') {
        window.location.href = data.url
      }
    } catch (err) {
      console.error(err)
      setError('Error en la petición')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Prueba de checkout
      </h2>

      <button
        type="button"
        onClick={handleCheckout}
        className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar mock'}
      </button>

      {error && (
        <p className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      {response && (
        <pre className="mt-4 overflow-x-auto rounded border bg-slate-950 p-4 text-sm text-white">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </section>
  )
}