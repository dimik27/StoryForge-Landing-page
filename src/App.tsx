import { DemoModalProvider } from './context/DemoModalContext'
import { DemoModal } from './components/ui/DemoModal'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustBar } from './components/sections/TrustBar'
import { Problem } from './components/sections/Problem'
import { HowItWorks } from './components/sections/HowItWorks'
import { Features } from './components/sections/Features'
import { Benefits } from './components/sections/Benefits'
import { Security } from './components/sections/Security'
import { Integrations } from './components/sections/Integrations'
import { Pricing } from './components/sections/Pricing'
import { FAQ } from './components/sections/FAQ'
import { Newsletter } from './components/sections/Newsletter'
import { FinalCTA } from './components/sections/FinalCTA'

function App() {
  return (
    <DemoModalProvider>
      <DemoModal />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <TrustBar />
          <Problem />
          <HowItWorks />
          <Features />
          <Benefits />
          <Security />
          <Integrations />
          <Pricing />
          <Newsletter />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </DemoModalProvider>
  )
}

export default App

