import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How do I buy a tournament ticket?",
      answer:
        "Choose a package in the Packages section, click Buy and pay using your preferred method. Your ticket and tournament access are delivered instantly after payment.",
    },
    {
      question: "What's included in the packages?",
      answer:
        "Depending on the package level you get a tournament ticket, in-game bonuses, priority registration, exclusive skins and an increased prize pool.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, you can return your ticket before the tournament starts. After matches begin refunds are not available, but you can transfer your ticket to another player.",
    },
    {
      question: "How do Standoff 2 tournaments work?",
      answer:
        "Tournaments run online in single-elimination bracket or round-robin format. The schedule and rules are published in advance and results are recorded automatically.",
    },
    {
      question: "How are prizes paid out?",
      answer:
        "The prize pool is distributed among winners immediately after the tournament ends and credited to your game or payment account within 24 hours.",
    },
    {
      question: "Who can participate?",
      answer:
        "Any Standoff 2 player with an active account can join. Some packages include ranked tournaments — from beginners to pro players.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">FAQ</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Answers to common questions about tickets, packages and participating in Standoff 2 tournaments.
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
