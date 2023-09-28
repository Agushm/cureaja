import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'CUREAJA : Program Diet dan Makanan Sehat',
  description: 'Program Diet Dan Makanan Sehat Di Dampingi Ahli Gizi Pribadi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
