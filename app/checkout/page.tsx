type CheckoutPageProps = {
  searchParams: {
    data?: string
  }
}

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  let parsedData: unknown = null
  let parseError: string | null = null

  if (searchParams.data) {
    try {
      parsedData = JSON.parse(decodeURIComponent(searchParams.data))
    } catch (error) {
      parseError = 'No se pudo leer el carrito enviado.'
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#ebebeb] p-6">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-3xl font-bold">Hola mundo</h1>
        <p className="mt-4 text-base text-slate-600">Esta es la página de pago de prueba.</p>

        {searchParams.data ? (
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold">Datos recibidos</h2>
            {parseError ? (
              <p className="mt-3 text-sm text-red-600">{parseError}</p>
            ) : (
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded bg-slate-950 p-4 text-sm text-white">
                {JSON.stringify(parsedData, null, 2)}
              </pre>
            )}
          </div>
        ) : (
          <p className="mt-8 text-sm text-slate-500">No se recibieron datos.</p>
        )}
      </div>
    </main>
  )
}
