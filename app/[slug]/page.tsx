import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntryList } from '@/components/EntryList'
import { getEntries, getEntry, summarise } from '@/lib/entries'
import { openGraphDefaults } from '@/lib/site'

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
  const image = entry.images[0]
  return {
    title: entry.pageTitle,
    description,
    alternates: { canonical: `/${entry.slug}/` },
    openGraph: {
      ...openGraphDefaults,
      url: `/${entry.slug}/`,
      title: entry.pageTitle,
      description,
      // The entry's first image stands for it when shared; the site image otherwise.
      ...(image && { images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }] }),
    },
  }
}

export default async function EntryPage({ params }: Params) {
  const { slug } = await params
  if (!getEntry(slug)) notFound()
  return <EntryList openSlug={slug} />
}
