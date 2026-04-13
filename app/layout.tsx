import type { Metadata } from 'next'
import { Boldonse, Newsreader } from 'next/font/google'
import './globals.css'
import { TypeBackground } from '@/components/TypeBackground'

const boldonse = Boldonse({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-boldonse',
  display: 'swap',
})

const newsreader = Newsreader({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tibormade',
  description:
    'Audio-visual creative practice of British-Hungarian commercial designer and sound artist Tibor Miklos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${boldonse.variable} ${newsreader.variable}`}>
      {/*
        bg-brand-green on body so the fixed background colour shows
        during any brief paint before the TypeBackground renders.
      */}
      <body className="bg-brand-green overflow-x-hidden">
        <TypeBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
