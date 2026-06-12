'use client'

import { motion } from 'framer-motion'

interface SectionIntroProps {
  eyebrow: string
  title: string
  children: React.ReactNode
}

export default function SectionIntro({
  eyebrow,
  title,
  children
}: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
        {children}
      </p>
    </motion.div>
  )
}
