import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karam Belmoujoud Portfolio',
  description: 'Created by Karam Belmoujoud',
  generator: 'Karam Belmoujoud',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
