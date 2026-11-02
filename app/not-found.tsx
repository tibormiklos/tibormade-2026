import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Not found — TIBORMADE',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main className="not-found">
      <h1 className="entry-title">Nothing here</h1>
      <p>
        <Link href="/">Back to the list</Link>
      </p>
    </main>
  )
}
