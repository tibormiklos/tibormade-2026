import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntryList } from '@/components/EntryList'
import { getEntries, getEntry, summarise } from '@/lib/entries'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getEntries()
    .filter((entry) => entry.hasContent)
    .map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const entry = getEntry((await params).slug)
  if (!entry) return {}
  const description = summarise(entry.html) || entry.kind
  return {
    title: entry.pageTitle,
    description,
    alternates: { canonical: `/${entry.slug}/` },
    openGraph: {
      title: entry.pageTitle,
      description,
      ...(entry.images[0] && { images: [entry.images[0].src] }),
    },
  }
}

export default async function EntryPage({ params }: Params) {
  const { slug } = await params
  if (!getEntry(slug)) notFound()
  return <EntryList openSlug={slug} />
}
