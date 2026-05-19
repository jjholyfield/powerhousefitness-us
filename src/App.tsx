import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/nav/Navbar'
import { EcosystemFooter } from './components/layout/EcosystemFooter'
import Home from './pages/Home'
import Programs from './pages/Programs'
import ProgramPage from './pages/ProgramPage'
import Community from './pages/Community'
import Coaching from './pages/Coaching'
import Apply from './pages/Apply'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:slug" element={<ProgramPage />} />
              <Route path="/optimize" element={<Coaching />} />
              <Route path="/community" element={<Community />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <EcosystemFooter currentSite="powerhouse" />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
