import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как купить билет на турнир?",
      answer:
        "Выбери подходящий пакет в разделе «Пакеты», нажми «Купить» и оплати удобным способом. Билет и доступ к турниру придут моментально после оплаты.",
    },
    {
      question: "Что входит в пакеты?",
      answer:
        "В зависимости от уровня пакета ты получаешь билет на турнир, внутриигровые бонусы, приоритетную регистрацию, эксклюзивные скины и увеличенный призовой фонд.",
    },
    {
      question: "Можно ли вернуть билет?",
      answer:
        "Да, билет можно вернуть до начала турнира. После старта матчей возврат средств не производится, но билет можно передать другому игроку.",
    },
    {
      question: "Как проходят турниры Standoff 2?",
      answer:
        "Турниры проходят онлайн в формате сеток на выбывание или round-robin. Расписание и правила публикуются заранее, а результаты фиксируются автоматически.",
    },
    {
      question: "Как выплачиваются призы?",
      answer:
        "Призовой фонд распределяется между победителями сразу после завершения турнира и зачисляется на игровой или платёжный аккаунт в течение 24 часов.",
    },
    {
      question: "Кто может участвовать?",
      answer:
        "Участвовать может любой игрок Standoff 2 с активным аккаунтом. Для некоторых пакетов предусмотрены турниры по уровням — от новичков до про-игроков.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о билетах, пакетах и участии в турнирах Standoff 2.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}