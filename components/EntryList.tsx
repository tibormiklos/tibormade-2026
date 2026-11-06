import { getEntries, type Entry } from '@/lib/entries'
import { Drawer } from './Drawer'

type Heading = 'h1' | 'h2'

function Row({ entry, heading: Heading }: { entry: Entry; heading: Heading }) {
  return (
    <>
      <Heading className="entry-title">{entry.title}</Heading>
      {entry.kind && (
        <span className="entry-kind">
          {entry.kind}
          {entry.year && `, ${entry.year}`}
        </span>
      )}
    </>
  )
}

function Body({ entry }: { entry: Entry }) {
  return (
    <div className="entry-body">
      <div className="entry-copy">
        {entry.html && <div className="entry-text" dangerouslySetInnerHTML={{ __html: entry.html }} />}
        {entry.links.length > 0 && (
          <ul className="entry-links">
            {entry.links.map((link) => {
              const external = link.href.startsWith('http')
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
        {entry.credit && (
          <p className="entry-credit">
            Photos:{' '}
            {entry.credit.href ? (
              <a href={entry.credit.href} target="_blank" rel="noopener noreferrer">
                {entry.credit.label}
              </a>
            ) : (
              entry.credit.label
            )}
          </p>
        )}
      </div>
      {entry.images.length > 0 && (
        <div className="entry-media">
          {entry.images.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function EntryList({ openSlug }: { openSlug?: string }) {
  const entries = getEntries()
  // The page's subject is its h1: the open entry, or the bio at the top of the home page.
  const h1 = openSlug ?? entries[0]?.slug
  return (
    <main>
      <ul className="entries">
        {entries.map((entry) => {
          const heading: Heading = entry.slug === h1 ? 'h1' : 'h2'
          return (
            <li key={entry.slug}>
              {entry.hasContent ? (
                <Drawer
                  slug={entry.slug}
                  title={entry.pageTitle}
                  defaultOpen={entry.slug === openSlug}
                  summary={<Row entry={entry} heading={heading} />}
                >
                  <Body entry={entry} />
                </Drawer>
              ) : (
                <div className="entry-row">
                  <Row entry={entry} heading={heading} />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
