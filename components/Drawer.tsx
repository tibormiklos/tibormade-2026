'use client'

import { useEffect, useRef } from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface Props {
  slug: string
  title: string
  defaultOpen: boolean
  summary: React.ReactNode
  children: React.ReactNode
}

export function Drawer({ slug, title, defaultOpen, summary, children }: Props) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (defaultOpen) ref.current?.scrollIntoView({ block: 'start' })
  }, [defaultOpen])

  function onToggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    const own = `${basePath}/${slug}/`
    if (e.currentTarget.open) {
      history.replaceState(null, '', own)
      document.title = `${title} — tibormade`
    } else if (location.pathname === own) {
      history.replaceState(null, '', `${basePath}/`)
      document.title = 'tibormade'
    }
  }

  return (
    <details ref={ref} id={slug} className="entry" open={defaultOpen} onToggle={onToggle}>
      <summary className="entry-row">{summary}</summary>
      {children}
    </details>
  )
}
