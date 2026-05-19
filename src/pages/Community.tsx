import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { CTABlock } from '../components/layout/CTABlock'
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations'
import { SKOOL_URL } from '../data/site-config'

const FEATURES = [
  {
    title: 'Courses',
    description:
      'Full courses on training programming, nutrition, hormone optimization, supplement protocols, and peptide research — all built with women\'s physiology in mind. These are the same frameworks I use with coaching clients, available for free.',
  },
  {
    title: 'Community Q&A',
    description:
      'Ask questions, post your labs, get feedback from women who are working through the same process. This is not a ghost-town Facebook group — it is an active community of women who are serious about their health.',
  },
  {
    title: 'Direct Access',
    description:
      'I am in there regularly answering questions, posting new content, and breaking down the latest research. Your questions get real answers, not a bot response.',
  },
  {
    title: 'New Content',
    description:
      'Regular updates with new modules, research breakdowns, and protocol guidance as the science evolves.',
  },
]

const COURSE_CATEGORIES = [
  {
    title: 'Training',
    description: 'Periodization, progressive overload, cycle-aware programming',
  },
  {
    title: 'Nutrition',
    description: 'Macros, meal timing, fueling performance (not restriction)',
  },
  {
    title: 'Hormone Optimization',
    description: 'Bloodwork interpretation, estrogen, progesterone, thyroid',
  },
  {
    title: 'Supplement Protocols',
    description: 'Evidence-based supplementation, stacking, timing',
  },
  {
    title: 'Peptide Research',
    description: 'Science education, mechanisms, research overview',
  },
  {
    title: 'Get Coaching From Us',
    description: 'The coaching offer explained (education, not sales page)',
  },
]

export default function Community() {
  return (
    <>
      <Helmet>
        <title>Powerhouse Fitness — Women's Health Optimization Community</title>
        <meta
          name="description"
          content="Free community for women serious about health optimization. Courses on training, nutrition, hormones, and supplementation — all built for women's physiology. Join Powerhouse on Skool."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Everything You Need to Start Optimizing — Free"
        subtitle="Courses, community, and direct access to ask questions. All built for women's physiology. No cost, no trial period, no bait-and-switch."
      >
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 text-lg"
        >
          Join Powerhouse
        </a>
      </Hero>

      {/* Section 2: What's Inside */}
      <Section gradient="top">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
          What's Inside
        </h2>
        <p className="text-text-secondary mb-8 max-w-3xl">
          Powerhouse is a free Skool community for women who take their health and performance seriously.
          Inside you will find:
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface-elevated p-6"
            >
              <h3 className="font-display text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 3: Course Categories */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-3xl font-bold text-text-primary mb-8">Course Categories</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-4"
        >
          {COURSE_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="font-display font-bold text-text-primary mb-1">{category.title}</h3>
              <p className="text-text-secondary text-sm">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 4: Who This Is For */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-6">Who This Is For</h2>
          <p className="text-text-secondary leading-relaxed">
            Powerhouse is for women who are done with generic fitness advice and want to actually understand
            how their body works. You train. You care about performance. You are interested in what your
            bloodwork says and what you can do about it. You want real information, not Instagram infographics
            with no citations.
          </p>
          <p className="text-text-secondary leading-relaxed mt-4">
            If that is you, this is your community. It is free, it is active, and it is built around the same
            clinical approach we use with coaching clients — just without the one-on-one team.
          </p>
        </div>
      </Section>

      {/* Section 5: CTA Block */}
      <Section>
        <CTABlock
          heading="Join Powerhouse"
          description="Free membership. No credit card required."
          primaryText="Join the Community"
          primaryHref={SKOOL_URL}
          externalPrimary
        />
      </Section>
    </>
  )
}
