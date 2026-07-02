import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Мгновенный доступ",
    description: "Билет и вход на турнир приходят сразу после оплаты. Никаких очередей — заходи и играй.",
    icon: "Zap",
    badge: "Быстро",
  },
  {
    title: "Реальные призы",
    description: "Денежный призовой фонд, редкие скины и внутриигровая валюта для победителей каждого турнира.",
    icon: "Trophy",
    badge: "Награды",
  },
  {
    title: "Честная игра",
    description: "Античит и модерация на всех матчах. Результаты фиксируются автоматически, без накруток.",
    icon: "ShieldCheck",
    badge: "Fair Play",
  },
  {
    title: "Эксклюзивные скины",
    description: "Пакеты с уникальными скинами на оружие, ножи и перчатки, которых нет в обычном магазине.",
    icon: "Sparkles",
    badge: "Эксклюзив",
  },
  {
    title: "Турниры по уровням",
    description: "От новичков до про-игроков — подбираем соперников по рангу, чтобы игра была интересной.",
    icon: "Users",
    badge: "Баланс",
  },
  {
    title: "Безопасная оплата",
    description: "Оплачивай билеты картой, СБП или кошельком. Возврат до старта турнира без вопросов.",
    icon: "CreditCard",
    badge: "Защита",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё для комфортной игры на турнирах Standoff 2 — от честных матчей до реальных призов
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