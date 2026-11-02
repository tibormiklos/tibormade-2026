import type { Metadata, Viewport } from 'next'
import { Arimo, Newsreader } from 'next/font/google'
import { CursorTrail } from '@/components/CursorTrail'
import { PulsingIcon } from '@/components/PulsingIcon'
import { openGraphDefaults, site } from '@/lib/site'
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

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  authors: [{ name: site.person, url: site.url }],
  creator: site.person,
  alternates: { types: { 'text/markdown': '/tibor.md' } },
  openGraph: {
    ...openGraphDefaults,
    url: '/',
    title: `${site.name} — ${site.person}`,
    description: site.description,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#fff6d8',
}

// Structured data so search engines and assistants know who the site is about.
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.person,
  alternateName: site.name,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  email: `mailto:${site.email}`,
  jobTitle: 'Sound and visual artist',
  description: site.description,
  homeLocation: { '@type': 'Place', name: 'Isle of Man' },
  knowsAbout: [
    'Sound art',
    'Site-specific composition',
    'Listening experiences',
    'Sound installation',
    'Field recording',
    'Modular synthesis',
    'Live film scores',
    'Improvised music',
  ],
  sameAs: site.profiles,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${arimo.variable} ${newsreader.variable}`}>
      <body>
        {children}
        <CursorTrail />
        <PulsingIcon />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  )
}
