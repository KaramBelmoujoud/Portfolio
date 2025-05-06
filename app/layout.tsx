import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

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
      <body>{children}
        <Analytics/>
      </body>
    </html>
  )
}
