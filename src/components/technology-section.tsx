import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const packages = [
  {
    name: "Rookie Pass",
    price: "299 ₽",
    tagline: "Старт в турнирах",
    highlight: false,
    icon: "Ticket",
    perks: [
      "1 билет на онлайн-турнир",
      "Стартовый кейс со скином",
      "Доступ в общий Discord",
      "Статистика матчей",
    ],
  },
  {
    name: "Pro Pass",
    price: "999 ₽",
    tagline: "Выбор игроков",
    highlight: true,
    icon: "Flame",
    perks: [
      "3 билета на турниры любого уровня",
      "Редкий скин на нож + перчатки",
      "Приоритетная регистрация",
      "Увеличенный призовой фонд x1.5",
      "Эксклюзивный значок профиля",
    ],
  },
  {
    name: "Legend Pass",
    price: "2 490 ₽",
    tagline: "Максимум наград",
    highlight: false,
    icon: "Crown",
    perks: [
      "Безлимит билетов на месяц",
      "Легендарный набор скинов",
      "Слот в про-лиге",
      "Призовой фонд x2 + кэшбек",
      "Вывод первым при повторе матча",
    ],
  },
]

export function TechnologySection() {
  return (
    <section id="packages" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-red-500/10 text-red-400 border border-red-500/30 mb-4">
            Маркетплейс пакетов
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Выбери свой пакет</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Билеты на турниры Standoff 2 с бонусами, скинами и увеличенным призовым фондом. Чем выше пакет — тем больше приколов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 slide-up transition-all duration-300 flex flex-col ${
                pkg.highlight
                  ? "bg-gradient-to-b from-red-500/20 to-black border-2 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.25)] scale-105"
                  : "bg-white/5 border border-red-500/20 hover:border-red-500/50"
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-500 text-white border-0 px-4 py-1 font-orbitron">Популярный</Badge>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center">
                  <Icon name={pkg.icon} className="text-red-500" size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-orbitron">{pkg.name}</h3>
                  <p className="text-sm text-gray-400">{pkg.tagline}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Icon name="Check" className="text-red-500 mt-1 shrink-0" size={18} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-lg py-6 font-orbitron ${
                  pkg.highlight
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-white/10 hover:bg-red-500 text-white border border-red-500/40"
                }`}
              >
                Купить пакет
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}