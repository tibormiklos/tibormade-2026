/**
 * TypeBackground
 *
 * Fixed full-viewport typographic texture.
 * Renders 15 rows of offset TIBORMADE text (each row shifts the string
 * by one character). Alternate rows drift in opposite directions via
 * pure CSS animations — no JS, GPU-composited, works on all screen sizes.
 *
 * Marquee math:
 *   Each row contains 4 words (2 per "copy") × 2 copies = 8 words total.
 *   translateX(-50%) shifts by exactly one copy (4 words ≈ 400vw).
 *   Since copy 1 === copy 2, the loop is seamless.
 *   Rows are staggered with negative animation-delay so they start at
 *   different positions throughout the 25s cycle.
 */

const BASE = 'TIBORMADE'

function rotate(str: string, n: number): string {
  const i = n % str.length
  return str.slice(i) + str.slice(0, i)
}

// 15 rows covers even the tallest mobile portrait viewport
// (each row is ~19vw tall; 15 × 19vw = 285vw, always > 100vh)
const ROWS = Array.from({ length: 15 }, (_, i) => rotate(BASE, i))

// Evenly distribute start positions across the 25s animation cycle
const DELAY_STEP = 25 / 15

export function TypeBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden bg-brand-green pointer-events-none select-none"
      aria-hidden="true"
    >
      {ROWS.map((text, i) => {
        const isEven = i % 2 === 0
        // 4 words per copy × 2 copies = 8 words total, seamless at -50%
        const rowWords = Array.from({ length: 8 }, () => text)

        return (
          <div key={i} className="overflow-hidden">
            <div
              className={`flex will-change-transform ${
                isEven ? 'animate-drift-left' : 'animate-drift-right'
              }`}
              style={{ animationDelay: `${-(i * DELAY_STEP).toFixed(2)}s` }}
            >
              {rowWords.map((word, j) => (
                <span
                  key={j}
                  className="font-display text-ink text-[15.3vw] leading-[1.25] tracking-[-0.04em] shrink-0 pr-[0.12em]"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
