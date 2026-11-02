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
                    {external && ' ↗'}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {entry.images.length > 0 && (
        <div className="entry-media">
          {entry.images.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
          ))}
        </div>
      )}
    </div>
  )
}

export function EntryList({ openSlug }: { openSlug?: string }) {
  return (
    <main>
      <ul className="entries">
        {getEntries().map((entry) => (
          <li key={entry.slug}>
            {entry.hasContent ? (
              <Drawer
                slug={entry.slug}
                title={entry.pageTitle}
                defaultOpen={entry.slug === openSlug}
                summary={<Row entry={entry} />}
              >
                <Body entry={entry} />
              </Drawer>
            ) : (
              <div className="entry-row">
                <Row entry={entry} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
