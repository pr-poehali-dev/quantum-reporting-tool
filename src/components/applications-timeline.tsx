import { Timeline } from "@/components/ui/timeline"
import { useLang } from "@/lib/lang-context"

export function ApplicationsTimeline() {
  const { t } = useLang()

  const data = t.timeline.items.map((item) => ({
    title: item.title,
    content: (
      <div>
        <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed shimmer-text">{item.desc}</p>
        <div className="space-y-3">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
              <span className="shimmer-text">{b}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  }))

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 shimmer-text">{t.timeline.heading}</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed shimmer-text">{t.timeline.sub}</p>
        </div>
        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
