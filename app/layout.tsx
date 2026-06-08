import type { Metadata } from 'next'
import { Boldonse, Newsreader, IBM_Plex_Mono } from 'next/font/google'
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

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TIBORMADE',
  description:
    'Audio-visual creative practice of British-Hungarian commercial designer and sound artist Tibor Miklos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${boldonse.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0"
        />
      </head>
      <body className="bg-brand-green overflow-x-hidden">
        <TypeBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
