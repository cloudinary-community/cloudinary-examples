import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloudinary & Next.js Server Actions',
  description: 'Learn how to upload files from a form to Cloudinary using Next.js Server Actions',
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
