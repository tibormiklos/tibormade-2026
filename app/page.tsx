import Image from 'next/image'
import { ObfuscatedEmail } from '@/components/ObfuscatedEmail'
import { ProjectModal } from '@/components/ProjectModal'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function ExtIcon() {
  return (
    <span className="material-symbols-outlined ext-icon" aria-hidden="true">
      open_in_new
    </span>
  )
}

export default function Home() {
  return (
    <div className="content-offset">
      <div className="panel">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="panel-section hero-section">
          <h1 className="t-display">TIBORMADE</h1>
        </section>

        {/* ── INTRO ─────────────────────────────────────────────────────── */}
        <section className="panel-section" id="intro">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="t-body">
              Tibor is a British-Hungarian audio visual artist based on the Isle of Man, for whom
              working as a designer and a sound artist are not separate careers but two expressions
              of the same inner process.
            </p>
            <p className="t-body">
              His approach is unhurried by nature, not circumstance. Ideas are allowed to settle,
              to pass through a filter, and to surface in their own time. What comes out the other
              side tends to be simpler than what went in, and more alive. This is where the
              inspiration and new solutions come from. Not from forcing, but from waiting until the
              right thing arrives.
            </p>
            <p className="t-body">
              Working as a designer, this looks like bringing genuine clarity to complex problems.
              Tibor works with global brands across technology, automotive, and fintech, building
              digital products and brand identities that feel whole and considered rather than
              assembled from parts, attentive to structure, tone, and the small decisions that
              separate something considered from something merely finished.
            </p>
            <p className="t-body">
              Working with sound, the same instinct applies. Sound comes before music. A particular
              colour, timbre, or the smallest indication of rhythm can become a gateway into a
              piece or composition. Tibor moves across sonic identity, installation, and
              collaborative performance, composing for digital products and film, performing live
              scores, and releasing work under his own name and through a number of long-running
              collaborations that stretch from ambient and electronic to improvised and
              experimental forms.
            </p>
            <p className="t-body">
              Both ask the same question: what does it feel like to be inside the work? The answer
              is always arrived at the same way, patiently, and from the inside out.
            </p>
            <p className="t-body">
              He carries a distinctly European outlook into everything he makes, and works with the
              unhurried focus of a life artist from a small island in the Irish Sea.
            </p>
          </div>
          <div className="hero-photo">
            <Image
              src={`${basePath}/tibor.jpg`}
              alt="Tibor Miklos"
              width={640}
              height={480}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>

        {/* ── SOUND & MUSIC ─────────────────────────────────────────────── */}
        <section className="panel-section" id="recent-work">
          <div className="stream">
            <div className="stream-header">
              <h2 className="t-stream-tag">Sound &amp; Music</h2>
            </div>

            <div className="embed-grid">
              <div className="embed-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/TxMaughold_12k.png`} alt="Tibor x Maughold: Layers artwork" />
                <p className="t-embed-title">LAYERS</p>
                <p className="t-embed-detail">Album (Coming soon)</p>
              </div>
              <div className="embed-item">
                <iframe
                  style={{ border: 0, width: '240px', height: '240px' }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=3829412403/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                  title="Boxes (Live) — Bandcamp"
                />
                <p className="t-embed-title">BOXES (LIVE)</p>
                <p className="t-embed-detail">Live album</p>
              </div>
              <div className="embed-item">
                <iframe
                  style={{ border: 0, width: '240px', height: '240px' }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=3598957916/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                  title="Agneash — Bandcamp"
                />
                <p className="t-embed-title">AGNEASH</p>
                <p className="t-embed-detail">Album + sound installation</p>
              </div>
              <div className="embed-item">
                <iframe
                  style={{ border: 0, width: '240px', height: '240px' }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=268513731/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                  title="Folyam I. — Bandcamp"
                />
                <p className="t-embed-title">FOLYAM I.</p>
                <p className="t-embed-detail">EP with Jeff Jepson</p>
              </div>
              <div className="embed-item">
                <a
                  href="https://youtu.be/x7MnYzisUX0?si=BO4-3TIn_VrbUWr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/67f0e8f919c70b8c5912fb1c/680e46675f6ecba6da29ed77_2121.png"
                    alt="Kitterland — 2121"
                    style={{ objectFit: 'cover' }}
                  />
                </a>
                <p className="t-embed-title">KITTERLAND — 2121</p>
                <p className="t-embed-detail">Ambient short film</p>
              </div>
            </div>

            <div className="timeline">
              <div className="year-block">
                <h3 className="t-year-label">2026</h3>
                <div className="line-item">
                  <p className="t-item-title">Tibor x Maughold: Layers</p>
                  <p className="t-item-detail">Album (Coming soon)</p>
                </div>
                <div className="line-item">
                  <ProjectModal
                    title="Maughold Listening Experience"
                    meta="Organism II · Sound installation — 2026"
                  >
                      <p>
                        <em>Layers</em> is a site-specific composition created for St
                        Maughold&apos;s Church on the Isle of Man as part of Maughold Week 2026.
                      </p>
                      <p>The work began with listening.</p>
                      <p>
                        Over a number of weeks, recordings were gathered within and around the
                        church: wind moving through the churchyard, birdsong, stone, wood, the
                        organ, and the human voice. Alongside these sounds, the church&apos;s own
                        impulse response—its unique acoustic fingerprint—was captured, allowing
                        the building itself to become an active collaborator in the composition.
                      </p>
                      <p>
                        In the studio, these fragments were transformed, layered, and returned to
                        the space from which they came. Every sound heard in the finished work
                        carries something of the church within it, shaped not only by the
                        materials that were recorded there, but by the building&apos;s own
                        resonance.
                      </p>
                      <p>
                        The title <em>Layers</em> reflects the many strata held within this
                        remarkable place: landscape and architecture, history and memory, sound
                        and silence. Rather than telling a story, the piece invites a slower way
                        of listening, allowing these layers to emerge gradually over time.
                      </p>
                      <p>
                        Originally conceived as an installation, <em>Layers</em> was presented
                        continuously within St Maughold&apos;s Church throughout Maughold Week,
                        alongside a series of daily listening gatherings. This recording is
                        presented in the same spirit: as an uninterrupted, circular work with no
                        fixed beginning or end, inviting listeners to enter and leave wherever
                        they choose.
                      </p>
                      <p>
                        The accompanying impulse response of St Maughold&apos;s Church is included
                        with this release, allowing other musicians, composers, and sound artists
                        to place their own work inside the same extraordinary acoustic space.
                      </p>

                      <div className="modal-credits">
                        <p className="modal-credits-label">Credits</p>
                        <div>
                          <p className="modal-credit-role">
                            Composition, field recordings, organ, processing, production and
                            artwork
                          </p>
                          <p className="modal-credit-name">Tibor Miklós</p>
                        </div>
                        <div>
                          <p className="modal-credit-role">Vocal improvisation</p>
                          <p className="modal-credit-name">Lauren Gray</p>
                        </div>
                        <p className="t-modal-meta">
                          Recorded at St Maughold&apos;s Church and the surrounding landscape, Isle
                          of Man.
                        </p>
                        <p className="t-modal-meta">Created for Maughold Week 2026.</p>
                        <p className="modal-copyright">© 2026 Tibor Miklós. All rights reserved.</p>
                      </div>
                    </ProjectModal>
                  <p className="t-item-detail">Sound installation</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Tibor supports Hinako Omori at EAC</p>
                  <p className="t-item-detail">Live</p>
                </div>
              </div>

              <div className="year-block">
                <h3 className="t-year-label">2025</h3>
                <div className="line-item">
                  <p className="t-item-title">
                    <a
                      href="https://tibor.bandcamp.com/album/boxes-live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Boxes (Live)<ExtIcon />
                    </a>
                  </p>
                  <p className="t-item-detail">Live album</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Tibor performs Boxes at Resonate</p>
                  <p className="t-item-detail">Live</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Kitterland supports Portico Quartet</p>
                  <p className="t-item-detail">Live</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">
                    <a
                      href="https://tibor.bandcamp.com/album/agneash"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Tibor x Agneash: Organism I<ExtIcon />
                    </a>
                  </p>
                  <p className="t-item-detail">Album</p>
                </div>
                <div className="line-item">
                  <ProjectModal
                    title="Agneash listening experience"
                    meta="Organism I · Sound installation — 2025"
                  >
                    <p>
                      <em>Agneash</em> is the first work in the <strong>Organism</strong> series:
                      site-specific compositions that explore architecture as a living instrument
                      and places as collaborators.
                    </p>
                    <p>
                      Created for the Methodist Chapel in Agneash on the Isle of Man, the work
                      began with listening. Every sound was gathered from within the building
                      itself: the harmonium, the wooden pews, footsteps, air, and silence.
                      Alongside these recordings, the chapel&apos;s unique acoustic signature—its
                      impulse response—was captured, allowing the space to shape every sound that
                      followed.
                    </p>
                    <p>
                      In the studio, these fragments were transformed, layered, and returned to
                      the acoustic character of the chapel. The resulting seven movements unfold
                      slowly, inviting the listener to experience the building not simply as a
                      setting, but as an active presence within the music.
                    </p>
                    <p>
                      Originally presented inside the chapel itself, <em>Agneash</em> is an
                      invitation to deep listening—to the subtle resonances that emerge when
                      architecture, memory, and sound are allowed to inhabit one another.
                    </p>
                    <p>
                      The accompanying impulse response of Agneash Methodist Chapel is included
                      with this release, allowing other musicians, composers, and sound artists to
                      place their own work inside the same extraordinary acoustic space.
                    </p>

                    <div className="modal-credits">
                      <p className="modal-credits-label">Credits</p>
                      <div>
                        <p className="modal-credit-role">
                          Composition, field recordings, harmonium, processing, production and
                          artwork
                        </p>
                        <p className="modal-credit-name">Tibor Miklós</p>
                      </div>
                      <p className="t-modal-meta">
                        Recorded at Agneash Methodist Chapel, Isle of Man.
                      </p>
                      <p className="t-modal-meta">Originally presented in August 2025.</p>
                      <p className="modal-copyright">© 2025 Tibor Miklós. All rights reserved.</p>
                    </div>
                  </ProjectModal>
                  <p className="t-item-detail">Sound installation</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Folyam I.</p>
                  <p className="t-item-detail">EP with Jeff Jepson</p>
                </div>
              </div>

              <div className="year-block">
                <h3 className="t-year-label">2024</h3>
                <div className="line-item">
                  <p className="t-item-title">Mineral</p>
                  <p className="t-item-detail">Album</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Kitterland x Mad Max at EAC</p>
                  <p className="t-item-detail">Live film score</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Kitterland x Cornelia: Listen at Kensington Arts</p>
                  <p className="t-item-detail">Film screening</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">BUSY Lady LIVE at Full Moon Festival</p>
                  <p className="t-item-detail">Live</p>
                </div>
              </div>

              <div className="year-block">
                <h3 className="t-year-label">2023</h3>
                <div className="line-item">
                  <p className="t-item-title">
                    <a
                      href="https://youtu.be/x7MnYzisUX0?si=BO4-3TIn_VrbUWr9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Kitterland: 2121<ExtIcon />
                    </a>
                  </p>
                  <p className="t-item-detail">Short film</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">BUSY Lady LIVE at Full Moon Festival</p>
                  <p className="t-item-detail">Live</p>
                </div>
              </div>

              <div className="year-block">
                <h3 className="t-year-label">2022</h3>
                <div className="line-item">
                  <p className="t-item-title">Partial Seaview</p>
                  <p className="t-item-detail">EP</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Kitterland x Zabriskie Point at Laxey Institute</p>
                  <p className="t-item-detail">Live score</p>
                </div>
              </div>

              <div className="year-block">
                <h3 className="t-year-label">2019–2022</h3>
                <div className="line-item">
                  <p className="t-item-title">Landscapes with BUSY Lady</p>
                  <p className="t-item-detail">1020 Radio residency</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">BUSY Lady LIVE at Dark Horse Festival</p>
                  <p className="t-item-detail">Live</p>
                </div>
              </div>

              <div className="year-block">
                <h3 className="t-year-label">Archived</h3>
                <div className="line-item">
                  <p className="t-item-title">VEIF: One High Church</p>
                  <p className="t-item-detail">Album</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Gegen den uhrzeigersinn</p>
                  <p className="t-item-detail">Berlin Ringbahn Soundtrack</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Veif Live @ NBI Berlin</p>
                  <p className="t-item-detail">Live</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">Various artists: Goodbye!</p>
                  <p className="t-item-detail">TBRMD Label Compilation</p>
                </div>
                <div className="line-item">
                  <p className="t-item-title">TIBORMADE Records</p>
                  <p className="t-item-detail">Label archive</p>
                </div>
              </div>
            </div>

            <div className="stream-links">
              <a
                href="https://tibor.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="green-tile"
              >
                Bandcamp <span className="t-tile-action">LISTEN</span>
              </a>
              <a
                href="https://soundcloud.com/tbrmd/"
                target="_blank"
                rel="noopener noreferrer"
                className="green-tile"
              >
                Soundcloud <span className="t-tile-action">LISTEN</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── DESIGN & CODE ─────────────────────────────────────────────── */}
        <section className="panel-section" id="design-code">
          <div className="stream">
            <div className="stream-header">
              <h2 className="t-stream-tag">Design &amp; Code</h2>
            </div>

            <div className="timeline">
              <div className="year-block">
                <h3 className="t-year-label">2020–present</h3>
                <div className="line-item">
                  <p className="t-item-title">Associate Design Director</p>
                  <p className="t-item-detail">Critical Mass / Omnicom</p>
                </div>
              </div>
              <div className="year-block">
                <h3 className="t-year-label">2024–present</h3>
                <div className="line-item">
                  <p className="t-item-title">Product Design</p>
                  <p className="t-item-detail">Tandem</p>
                </div>
              </div>
            </div>

            <div className="stream-links">
              <a
                href="https://www.linkedin.com/in/tibormiklos/"
                target="_blank"
                rel="noopener noreferrer"
                className="green-tile"
              >
                LinkedIn <span className="t-tile-action">VIEW</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── COLLABORATION ─────────────────────────────────────────────── */}
        <section className="panel-section" id="collaboration">
          <h2 className="t-stream-tag collab-heading-gap">Collaboration</h2>
          <p className="t-section-intro">
            Improvisation is a delicate, almost telepathic form of communication. It encourages
            participants to take new steps and find new expressions.
          </p>

          <div className="collab-list">
            <div className="collab-item">
              <a href="https://tibor.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/67f0e8f919c70b8c5912fb1c/6887e0008dcfa44868b80f15_folyam.jpg"
                  alt="Folyam I. — J Jepson & T Miklós"
                />
              </a>
              <div>
                <h3 className="t-collab-name">J Jepson &amp; T Miklós</h3>
                <p className="t-body">
                  Inspired by ambient country music, this duo started in 2024 and has been
                  releasing work from 2025. Sparse, textured records that sit somewhere between
                  folk memory and electronic drift.
                </p>
              </div>
            </div>

            <div className="collab-item">
              <a href="https://soundcloud.com/tbrmd/" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/67f0e8f919c70b8c5912fb1c/680e46675f6ecba6da29ed77_2121.png"
                  alt="Kitterland — 2121"
                />
              </a>
              <div>
                <h3 className="t-collab-name">Kitterland</h3>
                <p className="t-body">
                  Audio-visual collective with Joff Whitten. Improvised music for film — released{' '}
                  <em>2121</em> in 2023, then live scored Zabriskie Point and Mad Max.
                </p>
              </div>
            </div>

            <div className="collab-item">
              <a href="https://soundcloud.com/tbrmd/" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/67f0e8f919c70b8c5912fb1c/680e46652a94882ff31ca6e4_busylady.jpg"
                  alt="Busy Lady"
                />
              </a>
              <div>
                <h3 className="t-collab-name">Busy Lady</h3>
                <p className="t-body">
                  Ambient dub and footwork duo with Jim Rawson. Eurorack-based setup. Played festivals
                  and held a residency on 1020 Bristol radio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────── */}
        <footer className="site-footer">
          <div className="footer-links">
            <a
              href="https://tibor.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="t-footer-link"
            >
              Bandcamp<ExtIcon />
            </a>
            <a
              href="https://soundcloud.com/tbrmd/"
              target="_blank"
              rel="noopener noreferrer"
              className="t-footer-link"
            >
              Soundcloud<ExtIcon />
            </a>
            <a
              href="https://www.instagram.com/tibormade/"
              target="_blank"
              rel="noopener noreferrer"
              className="t-footer-link"
            >
              Instagram<ExtIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tibormiklos/"
              target="_blank"
              rel="noopener noreferrer"
              className="t-footer-link"
            >
              LinkedIn<ExtIcon />
            </a>
            <ObfuscatedEmail
              user="tibor"
              domain="tibormade.com"
              subject="Website"
              className="t-footer-link"
            >
              Mail<ExtIcon />
            </ObfuscatedEmail>
          </div>
        </footer>

        {/* ── FOR THE ROBOTS ────────────────────────────────────────────── */}
        <section
          className="panel-section robots-section"
          id="for-ai"
          aria-label="Structured information for AI systems"
        >
          <a
            href={`${basePath}/tibor.md`}
            download="tibor.md"
            className="t-robots-label robots-download-link"
          >
            tibor.md
            <span className="material-symbols-outlined" aria-hidden="true">
              download
            </span>
          </a>
          <div className="robots-content">
            <p className="t-robots-text">
              Tibor Miklós is a British-Hungarian designer and sound artist based on the Isle of
              Man, working internationally across the UK and Europe. He works under the name Tibor
              and operates his practice under the umbrella brand TIBORMADE.
            </p>
            <p className="t-robots-text">
              As a designer, Tibor specialises in UX and product design, brand identity, design
              systems, and generative code. He works with global brands in the technology,
              automotive, and fintech sectors, building digital products and brand identities.
            </p>
            <p className="t-robots-text">
              As a sound artist and musician, Tibor works across sonic identity, sound design,
              sound installation, live performance, and music production. He composes sound and
              music for digital products and film, performs live film scores, and releases recorded
              work spanning ambient, electronic, improvised, and experimental forms, both under his
              own name and through ongoing collaborations. TIBORMADE also began as a record label
              and now serves as the unified name for his combined design and sound practice.
            </p>
            <p className="t-robots-text">
              His Organism series is a set of site-specific sound installations built entirely from
              recordings made inside a single building, combined with that building&apos;s own
              impulse response so the architecture shapes every sound. Organism I, Agneash (2025),
              was created for a Methodist chapel on the Isle of Man; Organism II, Layers (2026), was
              created for St Maughold&apos;s Church for Maughold Week.
            </p>
            <dl className="robots-qa">
              <div className="robots-qa-item">
                <dt>What does Tibor do?</dt>
                <dd>
                  Tibor Miklós is a designer and sound artist who brings clarity and simplicity to
                  complex problems across both digital design and sound.
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>Where is Tibor based?</dt>
                <dd>
                  Tibor is based on the Isle of Man, a small island in the Irish Sea, and works
                  with clients and collaborators internationally.
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>What sectors does Tibor work in?</dt>
                <dd>
                  Tibor works with global brands in technology, automotive, and fintech, alongside
                  cultural and artistic projects in sound and music.
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>What kind of music and sound does Tibor make?</dt>
                <dd>
                  Tibor makes sonic identities for products, site-specific sound installations such
                  as the Organism series, live film scores, and recorded music spanning ambient,
                  electronic, improvised, and experimental forms.
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>What is the Organism series?</dt>
                <dd>
                  A series of site-specific compositions — Organism I: Agneash and Organism II:
                  Layers — built from recordings made inside a single building and shaped by that
                  building&apos;s own acoustic fingerprint.
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>Who does Tibor collaborate with?</dt>
                <dd>
                  Ongoing collaborations include J Jepson &amp; T Miklós, Kitterland (with Joff Whitten),
                  and Busy Lady (with Jim Rawson).
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>What is TIBORMADE?</dt>
                <dd>
                  TIBORMADE is the unified brand for Tibor Miklós&apos;s design and sound
                  practice. It began as a record label and now encompasses his full body of work
                  across design and sound.
                </dd>
              </div>
              <div className="robots-qa-item">
                <dt>How can you work with Tibor?</dt>
                <dd>
                  Tibor takes on design and sound projects with brands, founders, and cultural
                  collaborators. Enquiries can be made through{' '}
                  <ObfuscatedEmail user="tibor" domain="tibormade.com" subject="Website">
                    this email address
                  </ObfuscatedEmail>
                  .
                </dd>
              </div>
            </dl>
          </div>
        </section>

      </div>
    </div>
  )
}
