import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { ApplicationForm } from '../components/forms/ApplicationForm'
import { fadeInUp, viewportOnce } from '../lib/animations'

export default function Apply() {
  return (
    <>
      <Helmet>
        <title>Powerhouse Fitness — Apply for Health Optimization Coaching</title>
        <meta
          name="description"
          content="Apply for women's health optimization coaching. $5,000 / 6 months. Labs, clinical protocols, cycle-aware training with James, monthly calls with Josh."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Apply for Health Optimization Coaching"
        subtitle="$5,000 for six months. Your team: James (weekly coaching), Josh (monthly clinical protocols), AI-powered lab analysis, and quarterly bloodwork review. Everything is listed on the coaching page — this is where you apply."
      >
        <Link
          to="/optimize"
          className="mt-6 text-brand-400 hover:text-brand-300 text-sm transition-colors"
        >
          Review full coaching details
        </Link>
      </Hero>

      {/* Section 2: Intro + Application Form */}
      <Section gradient="top">
        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary leading-relaxed mb-8">
            This application collects the information we need to start building your protocol. There is no
            interview, no sales call, and no waiting period. Once you submit, a payment link sends
            immediately. Once payment is confirmed, onboarding starts and we get to work.
          </p>
          <ApplicationForm />
        </div>
      </Section>

      {/* Section 3: What Happens Next */}
      <Section className="bg-surface-elevated">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">What Happens Next</h2>
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="space-y-4"
          >
            {[
              'A payment link for $5,000 sends to your email immediately.',
              'Once payment is confirmed, your onboarding sequence starts.',
              'You receive a lab prep guide and instructions for scheduling your first coaching call with James.',
              'Comprehensive bloodwork is ordered — the full panel including markers most doctors skip for women.',
              'Your AI-powered clinical report generates, Josh reviews it, and your first protocol call is scheduled.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4 text-text-secondary">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 text-xs font-bold">
                  {i + 1}
                </span>
                <span className="leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </motion.ol>
          <p className="text-text-secondary leading-relaxed mt-6">
            No waiting. No sales conversation. The information on the coaching page tells you everything — if
            it makes sense for where you are, this is where you start.
          </p>
        </div>
      </Section>

      {/* Section 4: Pricing Reminder */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-brand-500/30 bg-surface-elevated p-6">
            <p className="text-text-primary font-medium">$5,000 — 6-month commitment</p>
            <p className="text-text-secondary text-sm mt-1">After 6 months: $750/mo to continue</p>
            <p className="text-text-secondary text-sm mt-1">
              Supplements, peptides, and prescriptions purchased separately as needed.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
