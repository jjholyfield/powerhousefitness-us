import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { FAQ } from '../components/shared/FAQ'
import { fadeInUp, viewportOnce } from '../lib/animations'
import { programs } from '../data/programs'

const teamPlan = programs.find((p) => p.slug === 'powerhouse-fitness-team')!
const barbellBeauties = programs.find((p) => p.slug === 'barbell-beauties')!

const PROGRAMS_FAQ = [
  {
    q: 'What is the difference between the Team Plan and Barbell Beauties?',
    a: 'Barbell Beauties is a one-time purchase — 12 weeks of programming, you own it forever. The Team Plan is $20 per month and gives you new programming every training block plus coach access and the training community. If you want one structured program, buy Barbell Beauties. If you want ongoing programming that evolves, join the Team Plan.',
  },
  {
    q: 'Where do I access my program?',
    a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
  },
  {
    q: 'What equipment do I need?',
    a: 'Both the Team Plan and Barbell Beauties are gym-based. You need access to dumbbells, a barbell with weights, a bench, a cable machine, and a leg press or hack squat machine. These are not home workout programs.',
  },
  {
    q: 'What is the difference between these programs and coaching?',
    a: 'Programs give you training. Coaching gives you the full system — labs, clinical protocols, a dedicated coach (James, weekly calls), monthly clinical calls with Josh, quarterly bloodwork, and ongoing optimization based on your data. Programs start at $20 per month. Coaching is $5,000 for six months.',
  },
]

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Powerhouse Fitness — Training Programs & Team Plan for Women</title>
        <meta
          name="description"
          content="Powerhouse Team Plan: $20/month for ongoing women's training with coach access. Or Barbell Beauties: 12-week standalone program for $47. All on TrainHeroic."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Training Programs Built for Women Who Train Seriously"
        subtitle="Structured programming delivered through TrainHeroic. Join the Team Plan at $20 per month for ongoing programming with coach access, or grab Barbell Beauties as a standalone 12-week program."
      />

      {/* Section 2: Team Plan Feature Block */}
      <Section gradient="top">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="rounded-xl border-2 border-brand-500/50 bg-surface-elevated p-8 md:p-10"
        >
          <span className="text-xs font-medium text-brand-400 uppercase tracking-wider">
            Featured — Team Plan
          </span>
          <h2 className="font-display text-3xl font-bold text-text-primary mt-2 mb-4">
            Powerhouse Team Plan — $20/month
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">
            Ongoing training programming delivered through the TrainHeroic app. 4 days per week, 45 to 60
            minutes per session. New programming every training block. Coach access for form checks and
            questions. Instructional videos for every movement. A community of women following the same
            programming and pushing each other.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">
            Equipment needed: dumbbells, barbell with weights, bench, cable machine, leg press or hack squat
            machine. 7-day free trial — cancel anytime, no contract.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={teamPlan.trainheroicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start Free Trial
            </a>
            <Link
              to={`/programs/${teamPlan.slug}`}
              className="text-brand-400 hover:text-brand-300 text-sm transition-colors pt-3"
            >
              View full program details
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Section 3: Standalone Program */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="rounded-xl border border-border bg-surface-elevated p-8 md:p-10"
        >
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
            Standalone Program
          </span>
          <h2 className="font-display text-2xl font-bold text-text-primary mt-2 mb-4">
            Barbell Beauties — $47
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">
            A 12-week women's training protocol built for the gym. Progressive overload, structured
            periodization, and programming designed for women who want to build real strength — not a "toning"
            program that has you doing 20-rep sets with 5-pound dumbbells. Buy it once, own it forever, follow
            it in the TrainHeroic app.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-6">
            <span>12 weeks</span>
            <span className="text-border">|</span>
            <span>5 days/week</span>
            <span className="text-border">|</span>
            <span>Full gym</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={barbellBeauties.trainheroicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get This Program
            </a>
            <Link
              to={`/programs/${barbellBeauties.slug}`}
              className="text-brand-400 hover:text-brand-300 text-sm transition-colors pt-3"
            >
              View full program details
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Section 4: Escalation Note */}
      <Section className="bg-surface-elevated">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-secondary leading-relaxed">
            These are self-guided. You get the programming, you follow it, you progress on your own. If you
            want fully individualized programming with a dedicated coach who builds everything around your
            labs, your cycle, and your goals — that is Health Optimization Coaching. James coaches all women's
            clients with cycle-aware periodization built into every training block.
          </p>
          <Link to="/optimize" className="btn-primary mt-6 inline-flex">
            Learn About Coaching
          </Link>
        </div>
      </Section>

      {/* Section 5: FAQ */}
      <Section>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-6">
          Frequently Asked Questions
        </h2>
        <FAQ items={PROGRAMS_FAQ} />
      </Section>
    </>
  )
}
