type PurchasesProps = {
  amount: number;
  quantity: number;
};

export function Purchases({
  amount,
  quantity,
}: PurchasesProps) {
  return (
    <section className="flex min-h-[220px] flex-col rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-lg text-gray-500">
        Compras este periodo
      </p>
      <p className="text-lg text-gray-500">
        ${amount.toLocaleString("es-AR")}
      </p>
      <p className="text-lg text-gray-500">
        Cantidad de compras
      </p>
      <p className="text-lg text-gray-500">
        {quantity}
      </p>
    </section>
  );
}