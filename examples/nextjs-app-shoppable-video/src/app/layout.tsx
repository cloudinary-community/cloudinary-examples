import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloudinary Shoppable Video & Next.js',
  description: 'Learn how add Shoppable Video with Cloudinary to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr] h-screen">
          <Nav />
          <main>{ children }</main>
        </div>
      </body>
    </html>
  )
}
