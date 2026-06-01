import { MercadoPagoBrick } from '@/components/ui/mercadopago-brick'

type CheckoutPageProps = {
  searchParams: Promise<{
    preferenceId?: string
  }>
}

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const { preferenceId } = await searchParams

  if (!preferenceId) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>No se recibió una preferencia.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#ebebeb] p-6">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">
          Finalizar compra
        </h1>

        <MercadoPagoBrick
          preferenceId={preferenceId}
          amount={400}
        />
      </div>
    </main>
  )
}