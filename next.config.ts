import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Set NEXT_PUBLIC_BASE_PATH=/tibormade-2026 when deploying to GitHub Pages
  // as a project site (tibormiklos.github.io/tibormade-2026).
  // Leave empty if using a custom domain at the root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
}

export default nextConfig
