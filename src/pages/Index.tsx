import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider, useTheme } from "@/lib/theme-context"
import { LangProvider } from "@/lib/lang-context"

function PageContent() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesSection />
        <section id="technology">
          <TechnologySection />
        </section>
        <ApplicationsTimeline />
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default function Index() {
  return (
    <LangProvider>
      <ThemeProvider>
        <PageContent />
      </ThemeProvider>
    </LangProvider>
  )
}
