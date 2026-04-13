import Link from 'next/link'
import { notFound } from 'next/navigation'

// ---------------------------------------------------------------------------
// Data — replace with Sanity query when CMS is wired up
// ---------------------------------------------------------------------------

const EVENTS: Record<string, {
  title: string
  description: string
  tickets: { vendor: string; href: string }[]
}> = {
  'hinako-omori-tibor-live': {
    title: 'HINAKO OMORI + TIBOR LIVE',
    description:
      'Audio-visual creative practice of British-Hungarian commercial designer and sound artist Tibor Miklos',
    tickets: [{ vendor: 'Ticketmaster', href: '#' }],
  },
}

export function generateStaticParams() {
  return Object.keys(EVENTS).map((slug) => ({ slug }))
}

// ---------------------------------------------------------------------------
// Page — Next.js 15: params is a Promise
// ---------------------------------------------------------------------------

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = EVENTS[slug]
  if (!event) notFound()

  return (
    <div className="pt-[100svh] md:pt-[120px] pb-20">
      <div className="w-full md:max-w-[600px] md:mx-auto bg-white">

        {/* ── Event detail ──────────────────────────────────────────── */}
        <section className="flex flex-col gap-10 px-5 py-10">
          <Link
            href="/"
            className="font-display text-ink text-[16px] tracking-[-0.01em] uppercase no-underline hover:underline self-start"
          >
            BACK
          </Link>
          <h1 className="font-display text-ink text-[55.6px] leading-[1.25] tracking-[-0.04em] uppercase">
            {event.title}
          </h1>
          {/* Visual / illustration — replace with <Image> */}
          <div className="bg-brand-green w-full aspect-square" />
          <p className="font-body text-ink text-[24px] leading-[1.25] tracking-[-0.01em]">
            {event.description}
          </p>
        </section>

        {/* ── Tickets ───────────────────────────────────────────────── */}
        <section className="flex flex-col gap-10 px-5 py-10">
          <h2 className="font-display text-ink text-[48px] leading-[1.25] tracking-[-0.04em] uppercase">
            Tickets
          </h2>
          <div className="flex flex-col gap-1">
            {event.tickets.map((ticket) => (
              <a
                key={ticket.vendor}
                href={ticket.href}
                className="flex items-center justify-between gap-4 bg-brand-green p-5 no-underline hover:brightness-[0.92] transition duration-150 group"
              >
                <span className="font-body font-bold text-ink text-[24px] leading-[1.25] tracking-[-0.01em]">
                  {ticket.vendor}
                </span>
                <span className="font-display text-ink text-[16px] tracking-[-0.01em] uppercase shrink-0 group-hover:underline">
                  BOOK
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
