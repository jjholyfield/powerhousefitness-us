import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { CTABlock } from '../components/layout/CTABlock'
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations'
import { SKOOL_URL } from '../data/site-config'

const THREE_PATHS = [
  {
    title: 'Powerhouse Community',
    description:
      'Free access to all courses — training, nutrition, hormone optimization, peptide research — all built with women\'s physiology in mind. 12,500+ women already in. Plus direct access to ask questions and support from women working through the same process.',
    cta: 'Join Powerhouse',
    href: SKOOL_URL,
    external: true,
    price: 'Free',
  },
  {
    title: 'Training Programs',
    description:
      'Barbell Beauties — a 12-week women\'s training protocol for $47 on TrainHeroic. Or join the Powerhouse Team Plan at $20 per month for ongoing programming with coach access, instructional videos, and the training community. 7-day free trial.',
    cta: 'View Programs',
    href: '/programs',
    external: false,
    price: 'From $20/mo',
  },
  {
    title: 'Health Optimization Coaching',
    description:
      'Labs, clinical protocols, and a dedicated fitness coach who specializes in women\'s training. $5,000 for a six month commitment. Your team: James (weekly coaching), Josh (monthly clinical protocols), and AI-powered lab analysis with quarterly bloodwork review.',
    cta: 'Learn More',
    href: '/optimize',
    external: false,
    price: '$5,000 / 6 months',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Powerhouse Fitness — Women's Health Optimization Community</title>
        <meta
          name="description"
          content="Health optimization built for women's physiology. Free community, courses, and coaching with labs, clinical protocols, and cycle-aware training programming."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Health Optimization Built for Women's Physiology"
        subtitle="The standard advice for women's health is either incomplete, outdated, or flat out wrong. Powerhouse is where women who refuse to accept that come to actually optimize."
      >
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Join Powerhouse
          </a>
          <Link
            to="/optimize"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-text-secondary hover:text-text-primary transition-colors"
          >
            Learn About Coaching
          </Link>
        </div>
      </Hero>

      {/* Section 2: What Is Powerhouse */}
      <Section gradient="top">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
          What Is Powerhouse
        </h2>
        <div className="text-text-secondary leading-relaxed space-y-5 max-w-3xl">
          <p>
            I built Powerhouse because the standard advice out there for women's health optimization is either
            incomplete, outdated, or flat out wrong. Most of the research on training, supplementation, and
            hormone optimization has been done on men, and the advice that gets handed down to women is either a
            watered down version of what works for men or some outdated nutritional dogma that ignores the fact
            that your body operates on a completely different hormonal landscape.
          </p>
          <p>
            Your training should account for your cycle. Your bloodwork panel should include the markers that
            actually matter for women — estradiol, progesterone, DHEA-S, thyroid antibodies, not just the basic
            metabolic panel your doctor runs once a year. Your supplement protocol should be built around what
            YOUR labs show, not a generic list from the internet. And your nutrition should fuel performance and
            recovery, not just hit some arbitrary calorie number that has nothing to do with your actual
            metabolic needs.
          </p>
          <p>
            That is what Powerhouse is. A community of women who take their health and performance seriously,
            built around real science, real data, and protocols that are designed for how your body actually
            works.
          </p>
        </div>
      </Section>

      {/* Section 3: Three Paths */}
      <Section>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary text-center mb-10">
          Three Ways to Start
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {THREE_PATHS.map((path) => (
            <motion.div
              key={path.title}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface-elevated p-6 flex flex-col"
            >
              <span className="text-xs text-brand-400 font-medium mb-2">{path.price}</span>
              <h3 className="font-display text-xl font-bold text-text-primary mb-3">{path.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">{path.description}</p>
              {path.external ? (
                <a
                  href={path.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 text-sm"
                >
                  {path.cta}
                </a>
              ) : (
                <Link to={path.href} className="btn-primary mt-6 text-sm">
                  {path.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 4: Coaching Preview */}
      <Section className="bg-surface-elevated">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-6">
              Health Optimization Coaching
            </h2>
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>
                Health Optimization Coaching is how we work directly with women who want to stop guessing and
                start optimizing based on their actual data. Your dedicated fitness coach is James, who
                specializes in women's training with cycle-aware periodization — meaning your programming
                adapts to where you are in your hormonal cycle instead of ignoring it. Josh handles your
                clinical protocols monthly, reviewing your bloodwork, adjusting supplementation, and making
                referrals when your labs indicate something that requires medical intervention.
              </p>
              <p>
                This is not a template program. This is not a cookie-cutter meal plan and generic workout
                split. This is a system built around YOUR bloodwork, YOUR goals, and YOUR physiology — and it
                is coached by people who understand how women's bodies actually respond to training, nutrition,
                and supplementation.
              </p>
            </div>
            <Link to="/optimize" className="btn-primary mt-6 inline-flex">
              See Full Details
            </Link>
          </div>
          <div className="rounded-xl bg-surface-overlay border border-border h-64 md:h-80 flex items-center justify-center">
            <span className="text-text-muted text-sm">Coaching consultation imagery</span>
          </div>
        </div>
      </Section>

      {/* Section 5: Social Proof */}
      <Section>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
          What Coaching Clients Are Saying
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface-elevated p-6"
            >
              <p className="text-text-secondary italic leading-relaxed">
                "Testimonial placeholder — client results will be added as coaching clients produce measurable
                outcomes."
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-text-primary font-medium text-sm">Client Name</p>
                <p className="text-text-muted text-xs">Timeframe and key result metric</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 6: CTA Block */}
      <Section>
        <CTABlock
          heading="Ready to start optimizing?"
          primaryText="Join Powerhouse"
          primaryHref={SKOOL_URL}
          externalPrimary
          secondaryText="Apply for Coaching"
          secondaryHref="/apply"
        />
      </Section>
    </>
  )
}
