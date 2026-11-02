import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import './globals.css'

// Helvetica Neue isn't licensed for web embedding, so the stack asks for the
// installed system copy first (macOS/iOS) and falls back to Arimo, which shares
// Helvetica/Arial metrics.
const arimo = Arimo({
  subsets: ['latin'],
  variable: '--font-arimo',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tibormade.com'),
  title: 'tibormade',
  description:
    'Audio-visual creative practice of British-Hungarian designer and sound artist Tibor Miklós.',
  alternates: { types: { 'text/markdown': '/tibor.md' } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={arimo.variable}>
      <body>{children}</body>
    </html>
  )
}
