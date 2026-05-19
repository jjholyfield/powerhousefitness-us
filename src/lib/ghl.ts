const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL || ''

export interface ApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  primaryGoal: string
  recentBloodwork: string
  trainingExperience: string
  clinicalNotes: string
  goals: string
}

export async function submitApplication(data: ApplicationData): Promise<{ ok: boolean; error?: string }> {
  try {
    const resp = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        primary_goal: data.primaryGoal,
        recent_bloodwork: data.recentBloodwork,
        training_experience: data.trainingExperience,
        clinical_notes: data.clinicalNotes,
        goals: data.goals,
      }),
    })
    return { ok: resp.ok }
  } catch {
    return { ok: false, error: 'Network error. Please try again.' }
  }
}
