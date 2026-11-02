'use client'

import { useEffect } from 'react'

const PERIOD = 2400 // ms per pulse
const SIZE = 64

// Redraws the favicon on a canvas so the dot pulses. SVG favicon animation only
// runs in Firefox; swapping the link's href works in every browser.
export function PulsingIcon() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = SIZE
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Next emits links for favicon.ico and icon.svg, and can add more after
    // hydration, so they're looked up on every frame.
    const icons = () => document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]')
    const timer = setInterval(() => {
      const wave = (1 - Math.cos((performance.now() / PERIOD) * Math.PI * 2)) / 2
      ctx.fillStyle = '#fff6d8'
      ctx.fillRect(0, 0, SIZE, SIZE)
      ctx.fillStyle = '#111'
      ctx.beginPath()
      ctx.arc(SIZE / 2, SIZE / 2, SIZE * (0.16 + 0.12 * wave), 0, Math.PI * 2)
      ctx.fill()
      const frame = canvas.toDataURL('image/png')
      for (const l of icons()) {
        l.dataset.href ??= l.href
        l.dataset.type ??= l.type
        l.type = 'image/png'
        l.href = frame
      }
    }, 80)

    return () => {
      clearInterval(timer)
      for (const l of icons()) {
        l.href = l.dataset.href ?? l.href
        l.type = l.dataset.type ?? l.type
      }
    }
  }, [])

  return null
}
