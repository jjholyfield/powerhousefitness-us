import type { Variants } from 'motion/react'

/** Fade up from below -- standard section entrance */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/** Stagger children -- for card grids */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/** Scale in -- for CTA blocks */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

/** Viewport options -- fire once on first scroll into view */
export const viewportOnce = { once: true, amount: 0.2 as const }
