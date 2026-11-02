// One place for the facts that the metadata, share tags, sitemap and structured data all repeat.
export const site = {
  name: 'TIBORMADE',
  url: 'https://tibormade.com',
  person: 'Tibor Miklós',
  email: 'tibor@tibormade.com',
  description:
    'Tibor Miklós is a sound and visual artist on the Isle of Man: music written for specific places, listening experiences, sound installation and live performance.',
  image: '/og.png',
  portrait: '/tibor.jpg',
  profiles: [
    'https://www.instagram.com/tibormade/',
    'https://tibor.bandcamp.com/',
    'https://soundcloud.com/tbrmd/',
  ],
}

// Open Graph fields every page shares. Pages spread this and override title, url and images,
// because Next replaces a page's openGraph object wholesale rather than merging it with the layout's.
export const openGraphDefaults = {
  type: 'website' as const,
  siteName: site.name,
  locale: 'en_GB',
  images: [{ url: site.image, width: 1200, height: 630, alt: site.name }],
}
