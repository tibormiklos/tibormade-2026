import Link from 'next/link'

// ---------------------------------------------------------------------------
// Data — replace with Sanity queries when CMS is wired up
// ---------------------------------------------------------------------------

const NEWS_ITEMS = [
  {
    text: 'Hinako Omori + Tibor LIVE at the Erin Arts Centre',
    action: 'BOOK',
    href: '/events/hinako-omori-tibor-live',
    internal: true,
  },
  {
    text: 'Tibor x Maughold: Organism II Soundscape installation this summer',
    action: 'READ',
    href: '#',
    internal: false,
  },
  {
    text: "New single 'Closer' out on all platforms on 08 May 2026",
    action: 'LISTEN',
    href: '#',
    internal: false,
  },
  {
    text: 'Ambient weather forecast: A drone synth for your local weather conditions.',
    action: 'PLAY',
    href: '#',
    internal: false,
  },
]

const WORK_SECTIONS = [
  { title: 'Sound and Music' },
  { title: 'Design & Code' },
]

// ---------------------------------------------------------------------------
// Shared tile class — used by both Link and anchor news items
// ---------------------------------------------------------------------------

const TILE_CLASS =
  'flex items-center justify-between gap-4 bg-brand-green p-5 no-underline hover:brightness-[0.92] transition duration-150 group'

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="pt-[100svh] md:pt-[120px] pb-20">
      <div className="w-full md:max-w-[600px] md:mx-auto bg-white">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-10 px-5 py-10">
          <h1 className="font-display text-ink text-[48px] leading-[1.25] tracking-[-0.04em]">
            TIBOR
          </h1>
          <p className="font-body text-ink text-[32px] leading-[1.25]">
            Audio-visual creative practice of British-Hungarian commercial
            designer and sound artist Tibor Miklos
          </p>
          {/* Visual / illustration — replace with SVG artwork or <Image> */}
          <div className="bg-brand-green w-full aspect-square" />
        </section>

        {/* ── News ─────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-10 px-5 py-10">
          <h2 className="font-display text-ink text-[48px] leading-[1.25] tracking-[-0.04em] uppercase">
            New!
          </h2>
          <div className="flex flex-col gap-1">
            {NEWS_ITEMS.map((item) => {
              const inner = (
                <>
                  <span className="font-body text-ink text-[24px] leading-[1.25] tracking-[-0.01em]">
                    {item.text}
                  </span>
                  <span className="font-display text-ink text-[16px] tracking-[-0.01em] uppercase shrink-0 group-hover:underline">
                    {item.action}
                  </span>
                </>
              )

              return item.internal ? (
                <Link key={item.action} href={item.href} className={TILE_CLASS}>
                  {inner}
                </Link>
              ) : (
                <a key={item.action} href={item.href} className={TILE_CLASS}>
                  {inner}
                </a>
              )
            })}
          </div>
        </section>

        {/* ── Work sections ────────────────────────────────────────────── */}
        {WORK_SECTIONS.map((section) => (
          <section key={section.title} className="flex flex-col gap-10 px-5 py-10">
            <h2 className="font-display text-ink text-[48px] leading-[1.25] tracking-[-0.04em] uppercase">
              {section.title}
            </h2>
            {/* Visual / media — replace with <Image> or video */}
            <div className="bg-brand-green w-full h-[315px]" />
            <p className="font-body text-ink text-[32px] leading-[1.25]">
              Audio-visual creative practice of British-Hungarian commercial
              designer and sound artist Tibor Miklos
            </p>
          </section>
        ))}

      </div>
    </div>
  )
}
