import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { scaleIn, viewportOnce } from '../../lib/animations'

interface CTABlockProps {
  heading: string
  description?: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  className?: string
}

export function CTABlock({
  heading,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  className = '',
}: CTABlockProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      className={`bg-surface-elevated rounded-xl shadow-lg px-8 py-12 text-center max-w-3xl mx-auto ${className}`}
    >
      <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
        {heading}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary max-w-xl mx-auto">
          {description}
        </p>
      )}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to={primaryHref} className="btn-primary">
          {primaryText}
        </Link>
        {secondaryText && secondaryHref && (
          <Link
            to={secondaryHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-text-secondary hover:text-text-primary transition-colors"
          >
            {secondaryText}
          </Link>
        )}
      </div>
    </motion.div>
  )
}
