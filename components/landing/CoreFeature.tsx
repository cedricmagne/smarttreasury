'use client'

import { motion } from 'framer-motion'
import { coreFeatures } from './landingData'

export default function CoreFeatures() {
  return (
    <section
      id="features"
      className="bg-foreground py-24 text-background sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            Core features
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.02em] text-background sm:text-5xl">
            Services built for controlled fund movement.
          </h2>
          <p className="mt-5 text-base leading-8 text-background/70 sm:text-lg">
            Smart Treasury services include policy-controlled payments, weighted
            signer approvals, scheduled treasury operations, revenue split
            support, recovery controls, wallet-first access, and audit-friendly
            history.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map(([Icon, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-3xl border border-background/15 bg-background/5 p-7"
            >
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-8 font-heading text-xl font-bold tracking-[-0.02em] text-background">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-background/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
