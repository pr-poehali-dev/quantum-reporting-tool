import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLang } from "@/lib/lang-context"

const AVATARS = ["/cybersecurity-expert-man.jpg", "/asian-woman-tech-developer.jpg", "/professional-woman-scientist.png"]
const NAMES = ["Artem «Sniper» Volkov", "Danil «Ghost» Smirnov", "Kirill «Flash» Orlov"]

export function TestimonialsSection() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans shimmer-text">{t.testimonials.heading}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed shimmer-text">{t.testimonials.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic shimmer-text">"{item.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={AVATARS[index]} alt={NAMES[index]} />
                    <AvatarFallback>{NAMES[index].split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary shimmer-text">{NAMES[index]}</p>
                    <p className="text-sm text-muted-foreground shimmer-text">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
