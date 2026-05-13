"use client"

import { motion } from "framer-motion"
import { CreditCard } from "lucide-react"

export function PricingHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start free and upgrade as you need. No hidden fees, no surprises. 
            Pay only for what you use.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
