'use client'

import { useEffect, useRef } from 'react'

interface Props {
  user: string
  domain: string
  subject?: string
  /** Display text — defaults to the assembled email address */
  label?: string
  className?: string
  children?: React.ReactNode
}

/**
 * Renders an email link that is never a crawlable address in the HTML source.
 * The href is assembled client-side from separate data attributes.
 */
export function ObfuscatedEmail({ user, domain, subject, label, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const addr = `${user}@${domain}`
    const href = subject
      ? `mailto:${addr}?subject=${encodeURIComponent(subject)}`
      : `mailto:${addr}`
    ref.current.href = href
  }, [user, domain, subject])

  return (
    <a ref={ref} href="#" className={className}>
      {children ?? label ?? `${user} [at] ${domain}`}
    </a>
  )
}
