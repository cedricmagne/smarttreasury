'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Product', '#product'],
  ['Features', '#features'],
  ['Use Cases', '#use-cases'],
  ['Stellar Integration', '#stellar'],
  ['Vision', '#vision']
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground"
        >
          Smart Treasury
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#early-access"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)] md:inline-flex"
        >
          Join Early Access
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-border p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              onClick={() => setOpen(false)}
              key={label}
              href={href}
              className="block py-3 text-sm text-muted-foreground"
            >
              {label}
            </a>
          ))}
          <a
            href="#early-access"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Join Early Access
          </a>
        </div>
      )}
    </header>
  )
}
