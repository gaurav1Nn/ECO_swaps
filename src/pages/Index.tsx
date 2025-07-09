import { useLenis } from '@/hooks/use-lenis'
import { ParallaxTree } from '@/components/ParallaxTree'
import { FloatingLeaves } from '@/components/FloatingLeaves'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { CTASection } from '@/components/sections/CTASection'

const Index = () => {
  // Initialize smooth scrolling
  useLenis()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Fixed parallax tree that transforms with scroll */}
      <ParallaxTree />
      
      {/* Floating background leaves */}
      <FloatingLeaves />
      
      {/* All sections with scroll-triggered animations */}
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="problem">
        <ProblemSection />
      </div>
      
      <div id="solution">
        <SolutionSection />
      </div>
      
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      {/* <div id="impact">
        <ImpactSection />
      </div> */}
      
      <div id="cta">
        <CTASection />
      </div>
    </div>
  )
}

export default Index