import { motion } from 'motion/react'
import { fadeInUp, viewportOnce } from '../../lib/animations'

interface SectionProps {
  children: React.ReactNode
  gradient?: 'none' | 'top' | 'bottom' | 'both'
  className?: string
}

export function Section({ children, gradient = 'none', className = '' }: SectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={`relative px-6 py-16 md:py-24 ${className}`}
    >
      {(gradient === 'top' || gradient === 'both') && (
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface to-transparent" />
      )}
      <div className="relative max-w-5xl mx-auto">
        {children}
      </div>
      {(gradient === 'bottom' || gradient === 'both') && (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      )}
    </motion.section>
  )
}
