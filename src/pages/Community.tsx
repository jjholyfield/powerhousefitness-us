import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'

export default function Community() {
  return (
    <>
      <Hero title="Community" />
      <Section gradient="top">
        <p className="text-text-secondary text-center text-lg">
          Community features and Skool integration coming in Phase 22.
        </p>
      </Section>
    </>
  )
}
