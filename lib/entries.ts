import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

export interface EntryLink {
  label: string
  href: string
}

export interface EntryImage {
  src: string
  alt: string
}

export interface Entry {
  slug: string
  title: string
  pageTitle: string
  kind: string
  images: EntryImage[]
  html: string
  links: EntryLink[]
  hasContent: boolean
}

const SITE = 'tibormade'
const dir = path.join(process.cwd(), 'content/entries')
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function withBasePath(src: string) {
  return src.startsWith('/') ? `${basePath}${src}` : src
}

function readEntry(file: string) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'))
  const body = content.trim()
  const title: string = data.title
  const kind: string = data.kind ?? ''
  const links: EntryLink[] = (data.links ?? []).filter((l: EntryLink) => l.href)
  const images: EntryImage[] = (data.images ?? [])
    .filter((i: Partial<EntryImage>) => i.src)
    .map((i: EntryImage) => ({ src: withBasePath(i.src), alt: i.alt ?? title }))
  const entry: Entry = {
    slug: file.replace(/\.md$/, ''),
    title,
    pageTitle: title.toLowerCase() === SITE ? `${SITE} — ${kind}` : `${title} — ${SITE}`,
    kind,
    images,
    html: body ? (marked.parse(body, { breaks: true, async: false }) as string) : '',
    links,
    hasContent: Boolean(body || images.length || links.length),
  }
  return { entry, pinned: Boolean(data.pinned), date: String(data.date ?? '') }
}

export function getEntries(): Entry[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map(readEntry)
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.date.localeCompare(a.date))
    .map((e) => e.entry)
}

export function getEntry(slug: string) {
  return getEntries().find((e) => e.slug === slug)
}

const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" }

export function summarise(html: string, max = 160) {
  const text = html
    .replace(/<[^>]+>/g, '')
    .replace(/&(amp|lt|gt|quot|#39);/g, (_, e) => entities[e])
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max - 1)) + '…'
}
