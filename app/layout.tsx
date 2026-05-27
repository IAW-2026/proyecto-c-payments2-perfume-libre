import type { Metadata } from 'next'
import { esUY } from '@clerk/localizations'
import { ClerkProvider,} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import { Header } from '../components/layout/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Perfume Libre',
  description: 'Marketplace de compra y venta de perfumes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={esUY}>
      <html lang="es">
        <body>
          <Header />
          <main>
              {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}