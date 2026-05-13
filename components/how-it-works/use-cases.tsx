"use client"

import { motion } from "framer-motion"
import { Car, Briefcase, MapPinned, Home } from "lucide-react"

const useCases = [
  {
    icon: Home,
    title: "Daily Commute Charging",
    scenario: "You&apos;re heading to work and notice your battery is at 30%.",
    solution: "ChargePilot shows you available fast chargers along your route. You see a station near your office has 2 free ports with a 15-minute wait time. You plan a quick top-up during your coffee break.",
    outcome: "Seamless charging without disrupting your schedule.",
  },
  {
    icon: MapPinned,
    title: "Weekend Road Trip",
    scenario: "Planning a 400km weekend trip to visit family.",
    solution: "Use trip planning to map out optimal charging stops. ChargePilot suggests 2 stops: a 20-minute fast charge at the halfway point and a slower charge near a restaurant where you planned to have lunch.",
    outcome: "Arrive relaxed with no range anxiety.",
  },
  {
    icon: Car,
    title: "New EV Owner",
    scenario: "Just bought your first EV and unsure about charging.",
    solution: "ChargePilot&apos;s recommendations learn your vehicle specs and suggest compatible chargers. The app shows you which connector types work with your car and explains charging speeds.",
    outcome: "Confidence from day one of EV ownership.",
  },
  {
    icon: Briefcase,
    title: "Business Fleet Management",
    scenario: "Managing a fleet of 20 delivery EVs across the city.",
    solution: "ChargePilot&apos;s fleet features let you monitor all vehicles, optimize routes for charging efficiency, and track charging expenses across the organization.",
    outcome: "Reduced downtime and optimized operational costs.",
  },
]

export function UseCases() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Real-World Scenarios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ChargePilot in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            See how ChargePilot helps EV drivers in common real-life situations.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <useCase.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {useCase.title}
                </h3>
              </div>

              {/* Scenario */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  The Scenario
                </p>
                <p className="text-muted-foreground">
                  {useCase.scenario}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                  How ChargePilot Helps
                </p>
                <p className="text-muted-foreground">
                  {useCase.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {useCase.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
