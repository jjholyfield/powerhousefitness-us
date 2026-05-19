import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { CTABlock } from '../components/layout/CTABlock'
import { FAQ } from '../components/shared/FAQ'
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations'
import { SKOOL_URL } from '../data/site-config'

const STEPS = [
  {
    number: '1',
    title: 'Apply',
    description:
      'Fill out the application with your health history, training background, and goals. No discovery call, no sales pitch. If this is right for you, you will know from the information on this page. Payment link sends immediately after application.',
  },
  {
    number: '2',
    title: 'Labs',
    description:
      'We order comprehensive bloodwork that includes the markers most doctors skip for women. Estradiol, progesterone, DHEA-S, full thyroid panel, iron studies, metabolic markers, and inflammatory markers. Your results go through our AI-powered clinical analysis system and generate a full report.',
  },
  {
    number: '3',
    title: 'Clinical Review',
    description:
      'Josh reviews your clinical report, identifies what needs attention, builds your initial protocol, and determines if any referrals are needed. You get a monthly clinical protocol call to review data, adjust supplementation, and track progress.',
  },
  {
    number: '4',
    title: 'Coaching Active',
    description:
      'James is your dedicated fitness coach. Weekly coaching calls covering training programming, nutrition, and accountability. James specializes in women\'s training — cycle-aware periodization, progressive overload that accounts for recovery patterns, and nutrition programming that fuels performance instead of chasing arbitrary calorie numbers.',
  },
]

const TEAM = [
  {
    name: 'Josh Holyfield',
    role: 'Clinical Protocol Manager',
    description:
      'Josh handles your clinical protocols. Monthly calls to review bloodwork, adjust supplementation, identify what needs attention, and make referrals when your data indicates something that requires medical intervention. He built the AI lab analysis system and reviews every clinical report personally.',
  },
  {
    name: 'James',
    role: "Women's Fitness Coach",
    description:
      "James is your dedicated fitness coach. Weekly calls, training programming, nutrition guidance, and accountability. James specializes in women's training — cycle-aware periodization means your programming adapts to your hormonal cycle instead of pretending it does not exist. Progressive overload, recovery management, and nutrition that fuels performance.",
  },
  {
    name: 'Clinical Review System',
    role: 'AI-Powered Lab Analysis',
    description:
      'Every lab panel runs through our clinical analysis system which generates a comprehensive report covering every marker, trending your data over time, and flagging what needs attention. Josh reviews every report and adds clinical notes before your protocol call.',
  },
]

const COACHING_FAQ = [
  {
    q: "What makes this different from other women's fitness coaching?",
    a: "Three things. First, your training is periodized around your cycle — not a generic 4-day split that ignores the fact that your capacity and recovery change throughout the month. Second, you get real clinical data — comprehensive bloodwork with the markers that actually matter for women's health, not the basic panel your doctor runs. Third, your coach and your clinical protocol manager are on the same team, looking at the same data, building one cohesive plan. Most coaching programs handle training OR clinical — not both as one system.",
  },
  {
    q: "Is this different from men's coaching?",
    a: "Same system, same rigor, same AI-powered lab analysis. The difference is your coach — James specializes in women's training and nutrition, your lab panel is comprehensive for women's hormones and includes markers like estradiol across your cycle, progesterone, DHEA-S, and thyroid antibodies, and your protocols account for your cycle rather than ignoring it.",
  },
  {
    q: 'Do I need to be experienced with training?',
    a: 'No. James programs for your current level. Whether you have been lifting for ten years or six months, the programming is built around where you are, your goals, and your data. What matters is that you are serious about optimizing, not that you already know everything.',
  },
  {
    q: 'What if I need prescriptions (HRT, thyroid medication)?',
    a: 'If your labs indicate something that requires medical intervention, Josh refers you to our physician partner network. Prescription costs are separate from coaching — your team identifies the need, the doctor handles the prescribing. This only happens when your clinical data supports it.',
  },
  {
    q: 'How do I know if I am ready for this?',
    a: 'If you are already training consistently, you are interested in what your bloodwork actually says, and you want a team building protocols around your data instead of guessing — you are ready. If you are just starting out, the free community and courses are the right place to begin.',
  },
  {
    q: 'What happens after I apply?',
    a: 'You fill out the application with your health history and goals. A payment link sends immediately — no sales call, no waiting period. Once payment is confirmed, onboarding starts: lab prep guide, intake information, and scheduling your first coaching call with James.',
  },
]

const GHL_CALENDAR_URL = import.meta.env.VITE_GHL_CALENDAR_URL || ''

export default function Coaching() {
  return (
    <>
      <Helmet>
        <title>Powerhouse Fitness — Health Optimization Coaching for Women</title>
        <meta
          name="description"
          content="$5,000 / 6 months. Labs, clinical protocols, cycle-aware training with James, monthly calls with Josh. Women's health optimization coaching built around your data."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Health Optimization Coaching for Women Who Want Real Answers"
        subtitle="Labs. Clinical protocols. A coach who understands women's physiology. One system built around your bloodwork, your cycle, and your goals — not a recycled men's protocol with pink branding."
        ctaText="Apply for Coaching"
        ctaHref="/apply"
      />

      {/* Section 2: The Problem */}
      <Section gradient="top">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">The Problem</h2>
        <div className="text-text-secondary leading-relaxed space-y-5 max-w-3xl">
          <p>
            Here is what is wrong with most women's health optimization advice. It is either a watered down
            version of what works for men, or it is outdated nutritional dogma that ignores how your hormonal
            cycle affects literally everything — your recovery, your energy, your sleep, your ability to build
            muscle, and your metabolic rate.
          </p>
          <p>
            Most doctors run a basic metabolic panel once a year and tell you everything looks fine. But they
            are not checking estradiol across your cycle. They are not looking at progesterone in your luteal
            phase. They are not testing DHEA-S, thyroid antibodies, or your full iron panel. They are checking
            the minimum, telling you the minimum, and sending you home with advice that does not account for
            the fact that your body is not operating the same way on day 5 as it is on day 21.
          </p>
          <p>
            And training? Most programs are written for men and sold to women with lighter weights and more
            cardio. That is not programming for women's physiology. That is lazy. Your body responds to
            progressive overload, but the implementation — the intensity, the volume, the deload timing —
            should align with your hormonal landscape, not ignore it.
          </p>
          <p>That is the gap this coaching fills.</p>
        </div>
      </Section>

      {/* Section 3: How This Works */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-3xl font-bold text-text-primary mb-10">How This Works</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-8 max-w-3xl"
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={fadeInUp} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center">
                <span className="text-brand-400 font-bold text-sm">{step.number}</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 4: What's Included (Pricing Block) */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">What's Included</h2>
          <div className="rounded-xl border-2 border-brand-500/50 bg-surface-elevated p-8 md:p-10">
            <p className="font-display text-3xl font-bold text-text-primary mb-6">
              $5,000 — 6-month commitment
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-text-secondary font-medium">Your team:</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>
                    Dedicated fitness coach — James (weekly calls, cycle-aware programming)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>Clinical protocol manager — monthly calls with Josh</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>AI-powered lab analysis and clinical reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>
                    Quarterly bloodwork review and protocol optimization — comprehensive panels that include
                    the markers most doctors skip for women
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>Doctor referral and prescription coordination when needed</span>
                </li>
              </ul>
            </div>
            <p className="text-text-primary font-medium mb-2">After 6 months: $750/mo to continue</p>
            <p className="text-text-secondary text-sm mt-4">
              Supplements, peptides, and prescriptions purchased separately as needed.
              <br />
              Your team recommends. You decide.
            </p>
          </div>
          <div className="text-text-secondary leading-relaxed space-y-4 mt-8 max-w-3xl">
            <p>
              The $5,000 covers your team's time and the entire system for six months. Labs, clinical review,
              weekly coaching with James, monthly protocol calls with Josh, and AI-powered analysis of every
              lab panel. After six months, if you want to continue, it is $750 per month which covers ongoing
              weekly coaching calls, monthly clinical calls, and quarterly labs.
            </p>
            <p>
              Supplements (Anvil Nutrition), peptides, and prescriptions are separate purchases if your
              protocol calls for them. Your team recommends based on your data. You decide what to use.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 5: The Team */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">The Team</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-surface-overlay border border-border mx-auto mb-4 flex items-center justify-center">
                <span className="text-text-muted text-xs">Photo</span>
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">{member.name}</h3>
              <p className="text-brand-400 text-sm mb-3">{member.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 6: Transparent Pricing */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-6">Transparent Pricing</h2>
          <div className="text-text-secondary leading-relaxed space-y-4">
            <p>
              I am putting the price right here because I do not believe in hiding it behind a phone call. You
              should know what something costs before you decide if it is worth your time to learn more about
              it.
            </p>
            <p>
              $5,000 for six months. $750 per month if you want to continue after that. No hidden fees. No
              surprise upsells. No discovery call where someone tries to convince you the price is justified.
              The price is what it is, and everything included is listed above. If it makes sense for where you
              are, apply. If it does not, the community and courses are free and yours regardless.
            </p>
            <p>There is no pressure here. When you are ready, you will know.</p>
          </div>
        </div>
      </Section>

      {/* Section 7: FAQ */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-6">
          Frequently Asked Questions
        </h2>
        <FAQ items={COACHING_FAQ} />
      </Section>

      {/* Section 8: GHL Calendar Widget */}
      {GHL_CALENDAR_URL && (
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Schedule a Call</h2>
            <p className="text-text-secondary mb-8">
              Not sure if this is right for you? Book a free 15-minute call to talk through your goals.
            </p>
            <iframe
              src={GHL_CALENDAR_URL}
              style={{ width: '100%', height: '700px', border: 'none' }}
              title="Schedule a Call"
            />
          </div>
        </Section>
      )}

      {/* Section 9: CTA Block */}
      <Section>
        <CTABlock
          heading="Ready to stop guessing?"
          primaryText="Apply for Coaching"
          primaryHref="/apply"
          secondaryText="Or join Powerhouse for free"
          secondaryHref={SKOOL_URL}
          externalSecondary
        />
      </Section>
    </>
  )
}
