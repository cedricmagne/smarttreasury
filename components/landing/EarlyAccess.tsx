'use client'

import { useState } from 'react'

export default function EarlyAccess() {
  const [form, setForm] = useState({
    email: '',
    organization: '',
    interest: 'Stablecoin payroll',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }))
  const submit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    try {
      setStatus('success')
      setForm({
        email: '',
        organization: '',
        interest: 'Stablecoin payroll',
        message: ''
      })
    } catch {
      setStatus('error')
    }
  }
  return (
    <section id="early-access" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div id="vision" className="self-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
            Vision
          </p>
          <h2 className="mt-5 font-heading text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
            Treasury operations should be programmable, transparent, and safer
            by default.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Smart Treasury brings this model to Stellar by combining wallet
            access, policy enforcement, scheduled execution, and recovery
            safeguards in one treasury account experience.
          </p>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            Designed as a non-custodial treasury-control system: Smart Treasury
            provides policy and execution controls, not custody or official
            Stellar endorsement.
          </p>
        </div>
        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <h3 className="font-heading text-2xl font-bold">Join Early Access</h3>
          <p className="mt-3 text-muted-foreground">
            Tell us where Smart Treasury could support your treasury operations.
          </p>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="Work email"
            className="mt-7 w-full rounded-2xl border border-input bg-background px-4 py-4 outline-none transition focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.16)]"
          />
          <input
            value={form.organization}
            onChange={(e) => update('organization', e.target.value)}
            placeholder="Organization"
            className="mt-3 w-full rounded-2xl border border-input bg-background px-4 py-4 outline-none transition focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.16)]"
          />
          <select
            value={form.interest}
            onChange={(e) => update('interest', e.target.value)}
            className="mt-3 w-full rounded-2xl border border-input bg-background px-4 py-4 outline-none transition focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.16)]"
          >
            <option>Stablecoin payroll</option>
            <option>Marketplace payouts</option>
            <option>Tokenization operations</option>
            <option>Other treasury workflow</option>
          </select>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="What treasury workflow are you exploring?"
            rows={4}
            className="mt-3 w-full rounded-2xl border border-input bg-background px-4 py-4 outline-none transition focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.16)]"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-4 w-full rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)] disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 'Request Early Access'}
          </button>
          {status === 'success' && (
            <p className="mt-4 text-sm text-primary">
              Thanks — your early access request has been received.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-destructive">
              The form could not submit. Please contact hello@smarttreasury.app.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
