type SalesProps = {
  amount: number;
  quantity: number;
};

export function Sales({
  amount,
  quantity,
}: SalesProps) {
  return (
    <section className="flex min-h-[220px] flex-col rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-lg text-gray-500">
        Ganancias este periodo
      </p>
      <p className="text-lg text-gray-500">
        ${amount.toLocaleString("es-AR")}
      </p>
      <p className="text-lg text-gray-500">
        Cantidad de ventas
      </p>
      <p className="text-lg text-gray-500">
        {quantity}
      </p>
    </section>
  );
}