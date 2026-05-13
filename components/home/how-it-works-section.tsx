"use client"

import { motion } from "framer-motion"
import { MapPin, Search, Navigation, Zap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Open & Discover",
    description: "Open the app and instantly see all nearby charging stations with real-time availability status.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Compare & Select",
    description: "Check availability, compare prices and charging speeds, then select your preferred station.",
  },
  {
    number: "03",
    icon: Navigation,
    title: "Navigate",
    description: "Get turn-by-turn directions to your chosen station with optimized routing for your EV.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Charge & Track",
    description: "Start charging and track your session in real-time. Get notified when charging is complete.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Start Charging in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with ChargePilot is easy. Download the app and begin 
            finding the best charging stations near you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  {/* Number Badge */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 z-20">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-primary transform rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
