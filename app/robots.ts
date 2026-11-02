import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    // The previous site lives on in /_archive/ for reference; keep it out of search.
    rules: { userAgent: '*', allow: '/', disallow: '/_archive/' },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
