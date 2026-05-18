import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'

export default function Apply() {
  return (
    <>
      <Hero title="Apply" />
      <Section gradient="top">
        <p className="text-text-secondary text-center text-lg">
          GHL application form embed goes here.
        </p>
      </Section>
    </>
  )
}
