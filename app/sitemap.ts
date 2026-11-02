import type { MetadataRoute } from 'next'
import { getEntries } from '@/lib/entries'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...getEntries()
      .filter((entry) => entry.hasContent)
      .map((entry) => ({ url: `${site.url}/${entry.slug}/` })),
  ]
}
