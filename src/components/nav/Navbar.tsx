import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { SKOOL_URL } from '../../data/site-config'

interface NavItem {
  label: string
  href: string
  external?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Coaching', href: '/optimize' },
  { label: 'Community', href: SKOOL_URL, external: true },
  { label: 'Apply', href: '/apply' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-xl text-text-primary tracking-wide">
          POWERHOUSE
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.filter((item) => item.label !== 'Apply').map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors ${
                  location.pathname === item.href
                    ? 'text-brand-400 font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link to="/apply" className="btn-primary text-sm">
            Apply
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-surface-elevated border-t border-border px-6 py-4"
          >
            {NAV_ITEMS.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-3 transition-colors ${
                    location.pathname === item.href
                      ? 'text-brand-400 font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
