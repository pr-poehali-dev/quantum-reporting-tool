import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useLang } from "@/lib/lang-context"

const ICONS = ["Zap", "Trophy", "ShieldCheck", "Sparkles", "Users", "CreditCard"]

export function FeaturesSection() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans shimmer-text">{t.features.heading}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed shimmer-text">
            {t.features.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => (
            <Card key={index} className="glow-border hover:shadow-lg transition-all duration-300 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <Icon name={ICONS[index]} className="text-red-500" size={26} />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground shimmer-text">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground shimmer-text">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed shimmer-text">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
