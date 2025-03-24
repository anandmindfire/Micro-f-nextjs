import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@micro-frontend-demo/shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remote Application 1',
  description: 'First remote application in the micro frontend demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Navigation />
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  )
} 