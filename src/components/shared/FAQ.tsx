import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export function FAQ({ items, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="border border-border rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left text-text-primary hover:bg-surface-elevated transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium pr-4">{item.q}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-text-secondary leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
