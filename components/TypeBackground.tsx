'use client'

/**
 * TypeBackground
 *
 * Fixed full-viewport typographic texture.
 * Renders 15 rows of offset TIBORMADE text (each row shifts the string
 * by one character). Alternate rows drift in opposite directions.
 *
 * Scroll-driven playback:
 *   - Scroll down → reverse (negative playbackRate)
 *   - Scroll up   → speed up forward
 *   - Idle 250ms  → return to normal rate (1)
 *   Rate is lerp'd each frame for smooth easing.
 */

import { useEffect } from 'react'

const BASE = 'TIBORMADE'
const ROWS = 15
const WORDS_PER_ROW = 8
const DELAY_STEP = 25 / ROWS

function rotate(str: string, n: number): string {
  const i = n % str.length
  return str.slice(i) + str.slice(0, i)
}

const rowData = Array.from({ length: ROWS }, (_, i) => ({
  word: rotate(BASE, i),
  isEven: i % 2 === 0,
  delay: `${-(i * DELAY_STEP).toFixed(2)}s`,
}))

export function TypeBackground() {
  useEffect(() => {
    // Collect WAAPI animations after two frames (so CSS animations have started)
    let animations: Animation[] = []
    let targetRate = 1
    let currentRate = 1
    let lastY = window.scrollY
    let lastT = performance.now()
    let idleTimer: ReturnType<typeof setTimeout> | null = null
    let rafId: number

    const rAF1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>('.type-track').forEach(el => {
          animations.push(...el.getAnimations())
        })
      })
    })

    function onScroll() {
      const now = performance.now()
      const y = window.scrollY
      const delta = y - lastY
      const dt = Math.max(1, now - lastT)
      const vel = Math.max(-2, Math.min(2, delta / dt))

      if (vel > 0) {
        targetRate = -(1 + vel * 6)
      } else if (vel < 0) {
        targetRate = 1 + -vel * 6
      }

      lastY = y
      lastT = now

      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => { targetRate = 1 }, 250)
    }

    function loop() {
      currentRate += (targetRate - currentRate) * 0.07
      animations.forEach(a => { a.playbackRate = currentRate })
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rAF1)
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      if (idleTimer) clearTimeout(idleTimer)
    }
  }, [])

  return (
    <div className="type-bg" aria-hidden="true">
      {rowData.map(({ word, isEven, delay }, i) => (
        <div key={i} className="type-row">
          <div
            className={`type-track ${isEven ? 'drift-left' : 'drift-right'}`}
            style={{ animationDelay: delay }}
          >
            {Array.from({ length: WORDS_PER_ROW }, (_, j) => (
              <span key={j} className="type-word">{word}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
