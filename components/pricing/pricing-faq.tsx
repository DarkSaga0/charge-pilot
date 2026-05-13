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
    question: "Can I use ChargePilot for free?",
    answer: "Yes! Our Free tier gives you access to basic station finding, real-time availability, and navigation features. It&apos;s perfect for occasional EV drivers who want to try out the app.",
  },
  {
    question: "What&apos;s included in the 14-day free trial?",
    answer: "The free trial gives you full access to all Pro features including unlimited route planning, advanced filters, waiting time predictions, and multiple vehicle profiles. No credit card required to start.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. If you cancel, you&apos;ll continue to have access until the end of your current billing period.",
  },
  {
    question: "Do you charge fees on charging sessions?",
    answer: "ChargePilot may charge a small, transparent commission on charging sessions completed through certain supported networks. This fee is always displayed before you start charging, so there are no surprises.",
  },
  {
    question: "Is the Business plan worth it for station owners?",
    answer: "If you own or manage charging stations, the Business plan provides valuable analytics, customer insights, and premium listing features that can help increase station utilization and revenue.",
  },
  {
    question: "Do you offer discounts for annual subscriptions?",
    answer: "Yes! When you choose annual billing, you save 20% compared to monthly billing. That&apos;s like getting over 2 months free each year.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various local payment methods depending on your region.",
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you&apos;ll be charged the prorated difference. When downgrading, the change takes effect at your next billing cycle.",
  },
]

export function PricingFAQ() {
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
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;ve got answers.
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
