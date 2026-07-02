import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Instant Access",
    description: "Ticket and tournament entry arrive right after payment. No queues — just join and play.",
    icon: "Zap",
    badge: "Fast",
  },
  {
    title: "Real Prizes",
    description: "Cash prize pools, rare skins and in-game currency for winners of every tournament.",
    icon: "Trophy",
    badge: "Rewards",
  },
  {
    title: "Fair Play",
    description: "Anti-cheat and moderation on all matches. Results are recorded automatically, no cheating.",
    icon: "ShieldCheck",
    badge: "Fair Play",
  },
  {
    title: "Exclusive Skins",
    description: "Packages with unique weapon, knife and glove skins you won't find in the regular store.",
    icon: "Sparkles",
    badge: "Exclusive",
  },
  {
    title: "Ranked Tournaments",
    description: "From beginners to pros — we match opponents by rank so every game stays exciting.",
    icon: "Users",
    badge: "Balanced",
  },
  {
    title: "Secure Payment",
    description: "Pay for tickets by card or e-wallet. Full refund available before the tournament starts.",
    icon: "CreditCard",
    badge: "Secure",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything for a great Standoff 2 tournament experience — from fair matches to real prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <Icon name={feature.icon} className="text-red-500" size={26} />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
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