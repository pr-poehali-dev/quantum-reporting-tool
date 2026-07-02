import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/lang-context"

export function CTASection() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance shimmer-text">{t.cta.heading}</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto shimmer-text">{t.cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4 shimmer-text">
                {t.cta.buy}
              </Button>
            </a>
            <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent shimmer-text">
                {t.cta.choose}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
