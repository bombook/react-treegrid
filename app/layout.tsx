import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'React TreeGrid - Next.js App Router',
  description: 'Tree grid rendered with Next.js App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
