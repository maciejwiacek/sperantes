import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sperantes - Biuro Rachunkowe na miarę XXI wieku!',
  description:
    'Profesjonalne biuro rachunkowe Sperantes  nowoczesna księgowość, obsługa kadrowo-płacowa, doradztwo podatkowe i wsparcie dla firm. Zaufaj ekspertom i rozwijaj swój biznes z nami!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
