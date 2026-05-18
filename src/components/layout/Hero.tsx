import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { fadeInUp, viewportOnce } from '../../lib/animations'

interface HeroProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function Hero({ title, subtitle, ctaText, ctaHref, className = '' }: HeroProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={`flex min-h-[80vh] flex-col items-center justify-center px-6 text-center relative ${className}`}
    >
      <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary max-w-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
      {ctaText && ctaHref && (
        <Link to={ctaHref} className="btn-primary mt-8 text-lg">
          {ctaText}
        </Link>
      )}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
    </motion.div>
  )
}
