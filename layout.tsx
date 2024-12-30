import React from 'react'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'SASPA - Modern Space-Saving Furniture',
  description: 'Discover innovative space-saving furniture solutions for modern living at SASPA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}

