"use client"

import { motion } from "framer-motion"
import { MapPin, Zap, Route, BarChart3 } from "lucide-react"

const screenshots = [
  {
    title: "Map View",
    description: "See all charging stations at a glance",
    icon: MapPin,
  },
  {
    title: "Station Details",
    description: "Detailed info and availability",
    icon: Zap,
  },
  {
    title: "Route Planning",
    description: "Plan your charging stops",
    icon: Route,
  },
  {
    title: "Comparison",
    description: "Compare stations side by side",
    icon: BarChart3,
  },
]

export function AppScreenshots() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            App Preview
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Beautiful, Intuitive Interface
          </h2>
          <p className="text-lg text-background/70">
            Designed for ease of use, ChargePilot puts everything you need at your fingertips.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Phone Mockup */}
              <div className="relative w-full aspect-[9/16] bg-background/10 rounded-[2rem] p-2 mb-4">
                <div className="w-full h-full bg-background rounded-[1.75rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <screen.icon className="w-16 h-16 text-primary/30" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-center mb-1">{screen.title}</h3>
              <p className="text-sm text-background/60 text-center">{screen.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
