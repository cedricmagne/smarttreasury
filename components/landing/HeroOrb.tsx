'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative"
    >
      <div className="absolute inset-8 rounded-full bg-accent/30 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-2xl shadow-primary/10">
        <Image
          src="/hero_image.png"
          alt="Abstract glass policy orb representing Smart Treasury controls"
          className="aspect-4/3 w-full rounded-[1.5rem] object-cover"
          width={600}
          height={450}
        />
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border/80 bg-background/85 p-4 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span>Payment Policy</span>
            <span className="text-primary">Active</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <span className="rounded-full bg-primary/10 px-3 py-2 text-primary">
              Threshold 3/5
            </span>
            <span className="rounded-full bg-accent px-3 py-2 text-accent-foreground">
              Scheduled
            </span>
            <span className="rounded-full bg-muted px-3 py-2 text-muted-foreground">
              SAC assets
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
