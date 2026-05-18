import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EcosystemFooter } from './components/layout/EcosystemFooter'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Community from './pages/Community'
import Coaching from './pages/Coaching'
import Apply from './pages/Apply'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <EcosystemFooter currentSite="powerhouse" />
      </div>
    </BrowserRouter>
  )
}

export default App
