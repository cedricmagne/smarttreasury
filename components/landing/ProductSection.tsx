'use client'

import { motion } from 'framer-motion'
import SectionIntro from './SectionIntro'
import { whatItDoes } from './landingData'

export default function ProductSection() {
  return (
    <section
      id="product"
      className="border-y border-border bg-card/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          eyebrow="Product"
          title="Move treasury operations from informal approvals to verifiable controls."
        >
          Smart Treasury combines Soroban smart contracts, SAC asset support,
          wallet-based signing, and audit-friendly events to make treasury
          execution safer and easier to operate.
        </SectionIntro>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whatItDoes.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-border bg-background p-7 shadow-sm"
            >
              <div className="mb-6 h-px w-16 bg-primary" />
              <h3 className="font-heading text-xl font-bold tracking-[-0.02em]">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
