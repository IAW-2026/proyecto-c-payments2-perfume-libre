export type Movement = {
  id: number;
  descripcion: string;
  tipo: string;
  monto: number;
};

type MovementsProps = {
  movimientos: Movement[];
};

export function Movements({
  movimientos,
}: MovementsProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          Últimas actividades
        </h2>

        <p className="text-sm text-gray-500">
          {movimientos.length} movimientos
        </p>
      </div>

      <div className="space-y-4">
        {movimientos.map((movimiento) => (
          <div
            key={movimiento.id}
            className="flex items-center justify-between rounded-2xl border border-gray-200 p-5"
          >
            <div>
              <p className="font-medium text-gray-900">
                {movimiento.descripcion}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {movimiento.tipo}
              </p>
            </div>
            <p className="text-lg font-semibold text-gray-900">
              {movimiento.monto < 0 ? '-' : '+'}$
              {Math.abs(movimiento.monto).toLocaleString('es-AR')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}