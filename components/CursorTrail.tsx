'use client'

import { useEffect, useRef } from 'react'

const LIFE = 2400 // ms a point of the trail lives
const DOT = 10 // dot diameter, also the trail's starting width
const INK = 17 // #111

interface Point {
  x: number
  y: number
  t: number
}

// A black dot replaces the cursor and draws a line that thins and fades behind it.
// The canvas uses multiply blending, so fading to white disappears on both the
// cream page and the white open drawers without overlapping strokes beading up.
export function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const trail = !matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    let points: Point[] = []
    let pos: Point | null = null
    let frame = 0

    function resize() {
      const dpr = devicePixelRatio || 1
      canvas!.width = innerWidth * dpr
      canvas!.height = innerHeight * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    function draw() {
      const now = performance.now()
      points = points.filter((p) => now - p.t < LIFE)
      ctx!.clearRect(0, 0, innerWidth, innerHeight)
      ctx!.lineCap = 'round'
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1]
        const b = points[i]
        const age = (now - b.t) / LIFE
        const v = Math.round(INK + (255 - INK) * age)
        ctx!.strokeStyle = `rgb(${v},${v},${v})`
        ctx!.lineWidth = DOT * (1 - age)
        ctx!.beginPath()
        ctx!.moveTo(a.x, a.y)
        ctx!.lineTo(b.x, b.y)
        ctx!.stroke()
      }
      if (pos) {
        ctx!.fillStyle = `rgb(${INK},${INK},${INK})`
        ctx!.beginPath()
        ctx!.arc(pos.x, pos.y, DOT / 2, 0, Math.PI * 2)
        ctx!.fill()
      }
      frame = points.length > 1 ? requestAnimationFrame(draw) : 0
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw)
    }

    function onMove(e: PointerEvent) {
      if (e.pointerType !== 'mouse') return
      const now = performance.now()
      pos = { x: e.clientX, y: e.clientY, t: now }
      if (trail) {
        // Coalesced events keep fast strokes smooth instead of straight-edged.
        const events = e.getCoalescedEvents?.() ?? []
        for (const c of events.length ? events : [e]) points.push({ x: c.clientX, y: c.clientY, t: now })
      }
      schedule()
    }

    function onLeave() {
      pos = null
      schedule()
    }

    root.classList.add('cursor-trail')
    resize()
    addEventListener('resize', resize)
    addEventListener('pointermove', onMove)
    root.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      root.classList.remove('cursor-trail')
      removeEventListener('resize', resize)
      removeEventListener('pointermove', onMove)
      root.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="cursor-canvas" aria-hidden="true" />
}
