const ECOSYSTEM_LINKS = [
  { key: 'hub', label: 'Josh Holyfield', href: 'https://joshholyfield.com' },
  { key: 'ironforge', label: 'Iron Forge', href: 'https://theironforge.us' },
  { key: 'powerhouse', label: 'Powerhouse', href: 'https://powerhousefitness.us' },
  { key: 'anvil', label: 'Anvil Nutrition', href: 'https://anvilnutrition.us' },
] as const

interface EcosystemFooterProps {
  currentSite: 'hub' | 'ironforge' | 'powerhouse' | 'anvil'
}

export function EcosystemFooter({ currentSite }: EcosystemFooterProps) {
  return (
    <footer className="mt-auto px-6 py-8">
      <hr className="border-border-subtle mb-8 max-w-5xl mx-auto" />
      <div className="text-center max-w-5xl mx-auto">
        <p className="text-xs text-text-muted italic mb-3">
          Part of the Josh Holyfield Ecosystem
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-xs text-text-muted">
          {ECOSYSTEM_LINKS.map((link, i) => {
            const isCurrent = link.key === currentSite
            return (
              <span key={link.key} className="inline-flex items-center">
                {i > 0 && <span className="mx-1.5">|</span>}
                {isCurrent ? (
                  <span className="font-bold" aria-current="page">
                    {link.label}
                  </span>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                )}
              </span>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}
