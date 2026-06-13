'use client'

import { useState } from 'react'
import SectionIntro from './SectionIntro'
import { useCases } from './landingData'

export default function UseCases() {
  const [active, setActive] = useState(0)
  const [Icon, title, text, bullets] = useCases[active]
  return (
    <section id="use-cases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          eyebrow="Use cases"
          title="Use cases for real treasury workflows."
        >
          Smart Treasury is designed for teams, protocols, marketplaces, payment
          operators, and tokenization platforms that need safer, repeatable
          payment operations.
        </SectionIntro>
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {useCases.map(([CaseIcon, label], index) => (
              <button
                key={label}
                onClick={() => setActive(index)}
                className={`w-full rounded-2xl border p-5 text-left transition ${active === index ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]' : 'border-border bg-card text-foreground hover:border-primary'}`}
              >
                <CaseIcon className="mb-5 h-6 w-6" />
                <span className="font-heading text-lg font-bold">{label}</span>
              </button>
            ))}
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-9">
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="mt-7 font-heading text-3xl font-bold tracking-[-0.03em]">
              {title}
            </h3>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {text}
            </p>
            <div className="mt-8 space-y-3">
              {bullets.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4"
                >
                  <span className="text-sm font-medium">{item}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    intent
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
