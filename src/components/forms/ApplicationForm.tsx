import { useState, type FormEvent } from 'react'
import { submitApplication, type ApplicationData } from '../../lib/ghl'
import { SKOOL_URL } from '../../data/site-config'

export function ApplicationForm() {
  const [form, setForm] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    primaryGoal: '',
    recentBloodwork: '',
    trainingExperience: '',
    clinicalNotes: '',
    goals: '',
  })
  const [committed, setCommitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function updateField(field: keyof ApplicationData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!committed) return
    setStatus('submitting')
    const result = await submitApplication(form)
    if (result.ok) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <h2 className="font-display text-2xl font-bold text-text-primary">Your application is in.</h2>
        <p className="mt-4 text-text-secondary max-w-xl mx-auto">
          You will receive your payment link within 24 hours. Once payment is confirmed, your onboarding
          begins. Questions in the meantime? Reach out in the{' '}
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300"
          >
            Powerhouse community
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-1">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-1">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors"
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors"
          placeholder="(555) 555-5555"
        />
      </div>

      <div>
        <label htmlFor="primaryGoal" className="block text-sm font-medium text-text-primary mb-1">
          Primary Goal *
        </label>
        <select
          id="primaryGoal"
          required
          value={form.primaryGoal}
          onChange={(e) => updateField('primaryGoal', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary focus:border-brand-500 focus:outline-none transition-colors"
        >
          <option value="">Select your primary goal</option>
          <option value="Body Composition">Body Composition</option>
          <option value="Hormone Optimization">Hormone Optimization</option>
          <option value="Full Optimization">Full Optimization</option>
        </select>
      </div>

      <div>
        <label htmlFor="trainingExperience" className="block text-sm font-medium text-text-primary mb-1">
          Current Training Experience *
        </label>
        <textarea
          id="trainingExperience"
          required
          rows={3}
          value={form.trainingExperience}
          onChange={(e) => updateField('trainingExperience', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors resize-y"
          placeholder="Tell us about your current training background"
        />
      </div>

      <div>
        <label htmlFor="clinicalNotes" className="block text-sm font-medium text-text-primary mb-1">
          Health History Summary *
        </label>
        <textarea
          id="clinicalNotes"
          required
          rows={3}
          value={form.clinicalNotes}
          onChange={(e) => updateField('clinicalNotes', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors resize-y"
          placeholder="Relevant health history, medications, conditions"
        />
      </div>

      <div>
        <label htmlFor="goals" className="block text-sm font-medium text-text-primary mb-1">
          Goals
        </label>
        <textarea
          id="goals"
          rows={3}
          value={form.goals}
          onChange={(e) => updateField('goals', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary placeholder:text-text-muted focus:border-brand-500 focus:outline-none transition-colors resize-y"
          placeholder="What are you hoping to achieve through coaching?"
        />
      </div>

      <div>
        <label htmlFor="recentBloodwork" className="block text-sm font-medium text-text-primary mb-1">
          Have you had bloodwork done in the last 12 months? *
        </label>
        <select
          id="recentBloodwork"
          required
          value={form.recentBloodwork}
          onChange={(e) => updateField('recentBloodwork', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border text-text-primary focus:border-brand-500 focus:outline-none transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="I don't remember">I don't remember</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="commitment"
          type="checkbox"
          checked={committed}
          onChange={(e) => setCommitted(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-border text-brand-500 focus:ring-brand-500"
        />
        <label htmlFor="commitment" className="text-sm text-text-secondary">
          I understand this is a $5,000 / 6-month commitment and a payment link will be sent after I submit
          this application.
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={!committed || status === 'submitting'}
        className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
