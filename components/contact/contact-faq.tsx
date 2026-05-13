"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate is the real-time availability?",
    answer: "Our real-time availability data is updated every 30 seconds for supported networks. We pull data directly from charging network APIs to ensure the most accurate information possible. However, availability can change quickly during peak hours.",
  },
  {
    question: "Can I plan long-distance trips with ChargePilot?",
    answer: "Absolutely! Our trip planning feature is designed for long-distance travel. Simply enter your destination and current battery level, and ChargePilot will suggest optimal charging stops along your route, considering charger availability, your vehicle's range, and charging speeds.",
  },
  {
    question: "Do you show all charging providers?",
    answer: "ChargePilot integrates with 15+ major charging networks and is constantly adding more. We cover the majority of public charging stations in supported regions. If you notice a station missing, you can report it through the app and we'll work to add it.",
  },
  {
    question: "How do you predict waiting times?",
    answer: "Our waiting time predictions use historical usage data, current occupancy, and machine learning to estimate how long you might wait at busy stations. These predictions improve over time as we collect more data from our community.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, your payment information is protected with industry-standard encryption. We use secure payment processors and never store your full card details on our servers. All transactions are PCI-DSS compliant.",
  },
  {
    question: "Can I use ChargePilot with any electric vehicle?",
    answer: "ChargePilot supports all major EV makes and models. During setup, you'll add your vehicle details so we can provide accurate range predictions and show you compatible charging stations based on your car's connector type.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to the most common questions about ChargePilot.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
