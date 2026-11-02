import type { Metadata } from 'next'
import { EntryList } from '@/components/EntryList'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return <EntryList />
}
