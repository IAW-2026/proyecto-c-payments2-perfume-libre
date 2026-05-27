import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { neon } from '@neondatabase/serverless';

import { Purchases } from '../components/ui/purchases-card';
import { Sales } from '../components/ui/sales-card';
import { Movements, type Movement } from '../components/ui/movements';
import { PendingBalance } from '@/components/ui/pending-balance-card';
const sql = neon(process.env.DATABASE_URL!);

export default async function HomePage() {
  const { isAuthenticated } = await auth()
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  const movimientos = (await sql`
    SELECT *
    FROM movimientos
    ORDER BY created_at DESC
  `) as Movement[];

  const pendingBalance = 1200;
  const pendingQuantity = 5;

  return (
    <main className="min-h-screen bg-[#ebebeb] p-6 flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="w-full md:w-80">
          <Purchases amount={1500} quantity={10} />
        </div>
        <div className="w-full md:w-80">
          <PendingBalance amount={pendingBalance} quantity={pendingQuantity} />
        </div>
        <div className="w-full md:w-80">
          <Sales amount={2000} quantity={15} />
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <Movements movimientos={movimientos} />
      </div>
    </main>
  );
}

