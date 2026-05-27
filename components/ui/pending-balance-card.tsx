type PendingBalanceProps = {
  amount: number;
  quantity: number;
};

export function PendingBalance({
  amount,
  quantity,
}: PendingBalanceProps) {
  return (
    <section className="flex min-h-[220px] flex-col rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-lg text-gray-500">
        Próximo saldo a cobrar
      </p>
      <p className="text-lg text-gray-500">
        ${amount.toLocaleString("es-AR")}
      </p>
      <p className="text-lg text-gray-500">
        Ventas por acreditar
      </p>
      <p className="text-lg text-gray-500">
        {quantity}
      </p>

    </section>
  );
}