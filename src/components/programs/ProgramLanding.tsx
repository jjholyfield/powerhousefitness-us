import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Hero } from '../layout/Hero'
import { Section } from '../layout/Section'
import { CTABlock } from '../layout/CTABlock'
import { FAQ } from '../shared/FAQ'
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/animations'
import { programs, type Program } from '../../data/programs'

interface ProgramLandingProps {
  program: Program
}

export function ProgramLanding({ program }: ProgramLandingProps) {
  const ctaText = program.isSubscription ? 'Start Free Trial' : 'Get This Program'
  const otherProgramData = program.otherPrograms
    .map((slug) => programs.find((p) => p.slug === slug))
    .filter(Boolean) as Program[]

  return (
    <>
      <Helmet>
        <title>{program.seo.title}</title>
        <meta name="description" content={program.seo.description} />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero title={program.hero.headline} subtitle={program.hero.subheadline}>
        <a
          href={program.trainheroicUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 text-lg"
        >
          {ctaText}
        </a>
      </Hero>

      {/* Section 2: What This Program Is */}
      <Section gradient="top">
        <h2 className="font-display text-3xl font-bold text-text-primary mb-6">What This Program Is</h2>
        <div className="text-text-secondary leading-relaxed space-y-4 max-w-3xl">
          {program.description.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Section 3: What's Included */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-3xl font-bold text-text-primary mb-6">What's Included</h2>
        <ul className="space-y-3 max-w-3xl">
          {program.included.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-text-muted text-sm">
          <strong className="text-text-secondary">Equipment needed:</strong> {program.equipment}
        </p>
      </Section>

      {/* Section 4: Who This Is For / Not For */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">This is for you if:</h3>
            <ul className="space-y-3">
              {program.forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">This is not for you if:</h3>
            <p className="text-text-secondary leading-relaxed">{program.notForYou}</p>
          </div>
        </div>
      </Section>

      {/* Section 5: CTA Block + Team Callout */}
      <Section className="bg-surface-elevated">
        <CTABlock
          heading={`${program.name}, ${program.priceDisplay}.`}
          description={
            program.isSubscription
              ? '7-day free trial. Cancel anytime.'
              : 'Delivered through the TrainHeroic app. Purchase, download, and start training today.'
          }
          primaryText={ctaText}
          primaryHref={program.trainheroicUrl}
          externalPrimary
        />
        {program.teamCallout && !program.isSubscription && (
          <p className="text-center text-text-secondary mt-6 max-w-2xl mx-auto">{program.teamCallout}</p>
        )}
      </Section>

      {/* Section 6: Other Programs */}
      {otherProgramData.length > 0 && (
        <Section>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Other Programs</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {otherProgramData.map((other) => (
              <motion.div key={other.slug} variants={fadeInUp}>
                <Link
                  to={`/programs/${other.slug}`}
                  className="block p-6 rounded-xl border border-border hover:border-brand-500/50 transition-colors bg-surface-elevated"
                >
                  <h3 className="font-display text-lg font-bold text-text-primary">{other.name}</h3>
                  <p className="text-brand-400 text-sm mt-1">
                    {other.priceDisplay}
                    {other.isSubscription && ' (7-day free trial)'}
                    {!other.isSubscription && `, ${other.duration}`}
                  </p>
                  <p className="text-text-secondary text-sm mt-2 line-clamp-2">
                    {other.hero.subheadline}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-6">
            <Link to="/programs" className="text-brand-400 hover:text-brand-300 text-sm transition-colors">
              See All Programs
            </Link>
          </div>
        </Section>
      )}

      {/* Section 7: FAQ */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
        <FAQ items={program.faq} />
      </Section>
    </>
  )
}
