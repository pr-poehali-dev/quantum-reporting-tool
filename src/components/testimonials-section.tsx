import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём «Sniper» Волков",
    role: "Победитель Pro-турнира",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Взял Pro Pass ради приоритетной регистрации — и уже через неделю выиграл первый денежный турнир. Призы приходят моментально!",
  },
  {
    name: "Данил «Ghost» Смирнов",
    role: "Капитан команды NoScope",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Собрал команду через маркет, купили Legend Pass на всех. Скины топовые, лиги честные, соперники по уровню. Рекомендую.",
  },
  {
    name: "Кирилл «Flash» Орлов",
    role: "Стример и игрок Standoff 2",
    avatar: "/professional-woman-scientist.png",
    content:
      "Начинал с Rookie Pass за 299₽, чтобы попробовать. Затянуло так, что теперь играю каждый день. Идеальный старт в турнирах.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы игроков</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже играет на турнирах и забирает призы
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