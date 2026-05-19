import { useParams, Navigate } from 'react-router-dom'
import { getProgramBySlug } from '../data/programs'
import { ProgramLanding } from '../components/programs/ProgramLanding'

export default function ProgramPage() {
  const { slug } = useParams<{ slug: string }>()
  const program = slug ? getProgramBySlug(slug) : undefined
  if (!program) return <Navigate to="/programs" replace />
  return <ProgramLanding program={program} />
}
