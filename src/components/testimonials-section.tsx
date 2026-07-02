import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Artem «Sniper» Volkov",
    role: "Pro Tournament Winner",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Got the Pro Pass for priority registration — and a week later won my first cash tournament. Prizes land instantly!",
  },
  {
    name: "Danil «Ghost» Smirnov",
    role: "Captain of NoScope",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Put together a squad through the marketplace, bought Legend Pass for everyone. Top skins, fair leagues, balanced opponents. Highly recommend.",
  },
  {
    name: "Kirill «Flash» Orlov",
    role: "Streamer & Standoff 2 Player",
    avatar: "/professional-woman-scientist.png",
    content:
      "Started with the Rookie Pass at 299₽ just to try it out. Got hooked and now I play every day. Perfect entry into tournaments.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Player Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            What players who already compete and win prizes have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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