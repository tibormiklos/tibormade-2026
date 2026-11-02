import Link from 'next/link'
import { getEntries, type Entry } from '@/lib/entries'
import { Drawer } from './Drawer'

function Row({ entry }: { entry: Entry }) {
  return (
    <>
      <span className="entry-title">{entry.title}</span>
      {entry.kind && <span className="entry-kind">{entry.kind}</span>}
    </>
  )
}

function Body({ entry }: { entry: Entry }) {
  return (
    <div className="entry-body">
      {entry.html && (
        <div className="entry-text" dangerouslySetInnerHTML={{ __html: entry.html }} />
      )}
      {entry.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="entry-image" src={entry.image} alt={entry.imageAlt} loading="lazy" />
      )}
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
                  {external && ' ↗'}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export function EntryList({ openSlug }: { openSlug?: string }) {
  const entries = getEntries()

  return (
    <main>
      <header className="site-header">
        <Link href="/">tibormade</Link>
      </header>
      <ul className="entries">
        {entries.map((entry) => (
          <li key={entry.slug}>
            {entry.hasContent ? (
              <Drawer
                slug={entry.slug}
                title={entry.title}
                defaultOpen={entry.slug === openSlug}
                summary={<Row entry={entry} />}
              >
                <Body entry={entry} />
              </Drawer>
            ) : (
              <div className="entry-row is-static">
                <Row entry={entry} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
