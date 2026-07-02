import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useLang } from "@/lib/lang-context"

const PACKAGE_ICONS = ["Ticket", "Flame", "Crown"]
const PRICES = ["299 ₽", "999 ₽", "2 490 ₽"]
const NAMES = ["Rookie Pass", "Pro Pass", "Legend Pass"]

export function TechnologySection() {
  const { t } = useLang()

  return (
    <section id="packages" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-red-500/10 text-red-400 border border-red-500/30 mb-4 shimmer-text">
            {t.packages.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron shimmer-text">{t.packages.heading}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed shimmer-text">{t.packages.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NAMES.map((name, index) => {
            const pkg = t.packages.items[index]
            const isHighlight = index === 1
            return (
              <div
                key={index}
                className={`package-card relative rounded-2xl p-8 slide-up flex flex-col ${
                  isHighlight
                    ? "bg-gradient-to-b from-red-500/20 to-black border-2 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.25)] scale-105"
                    : "bg-white/5 border border-red-500/20"
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-red-500 text-white border-0 px-4 py-1 font-orbitron shimmer-text">{t.packages.popular}</Badge>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <Icon name={PACKAGE_ICONS[index]} className="text-red-500" size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-orbitron">{name}</h3>
                    <p className="text-sm text-gray-400 shimmer-text">{pkg.tagline}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{PRICES[index]}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Icon name="Check" className="text-red-500 mt-1 shrink-0" size={18} />
                      <span className="shimmer-text">{perk}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full text-lg py-6 font-orbitron shimmer-text ${
                    isHighlight ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white/10 hover:bg-red-500 text-white border border-red-500/40"
                  }`}>
                    {t.packages.buyBtn}
                  </Button>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
