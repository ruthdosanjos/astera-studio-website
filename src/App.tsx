import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { C, F } from '@/theme'

export default function App() {
  return (
    <div style={{ fontFamily: F.body, backgroundColor: C.canvas, color: C.textPrimary, overflowX: 'hidden' }}>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <header>
        <Navigation />
      </header>
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <ValuesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
