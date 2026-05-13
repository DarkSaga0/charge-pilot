"use client"

import { motion } from "framer-motion"
import { 
  Map, 
  Route, 
  GitCompare, 
  Sparkles, 
  Layers,
  CheckCircle2
} from "lucide-react"

const painRelievers = [
  {
    icon: Layers,
    title: "Single Unified EV Charging App",
    description: "Stop juggling multiple apps for different charging networks. ChargePilot brings all providers together in one seamless interface.",
    benefits: [
      "Access to 15+ charging networks",
      "Single account for all stations",
      "Unified payment system",
      "One app to rule them all"
    ],
  },
  {
    icon: Map,
    title: "Real-Time Stations Map",
    description: "An interactive map showing every charging station around you with live availability status, so you always know where to go.",
    benefits: [
      "Live availability indicators",
      "Filter by charger type & speed",
      "See prices at a glance",
      "Navigation integration"
    ],
  },
  {
    icon: Route,
    title: "Route Planning Based on Battery & Location",
    description: "Intelligent route planning that considers your current battery level, destination, and optimal charging stops along the way.",
    benefits: [
      "Battery-aware routing",
      "Optimal charging stop suggestions",
      "Alternative route options",
      "Real-time traffic integration"
    ],
  },
  {
    icon: GitCompare,
    title: "Station Comparison Tool",
    description: "Compare multiple stations side-by-side to find the best option based on price, speed, availability, and user ratings.",
    benefits: [
      "Price comparison",
      "Charging speed comparison",
      "User ratings & reviews",
      "Amenities nearby"
    ],
  },
  {
    icon: Sparkles,
    title: "Smart Recommendation System",
    description: "AI-powered recommendations that learn your preferences and suggest the perfect charging stations for your needs.",
    benefits: [
      "Learns your preferences",
      "Time-based suggestions",
      "Vehicle-specific recommendations",
      "Favorite stations saved"
    ],
  },
]

export function PainRelievers() {
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
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pain Relievers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Solving Real EV Driver Challenges
          </h2>
          <p className="text-lg text-muted-foreground">
            We built ChargePilot to address the most common frustrations 
            EV drivers face. Here&apos;s how we make charging stress-free.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-8">
          {painRelievers.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 md:p-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 flex items-center justify-center">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Side */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-10 flex items-center justify-center">
                  <div className="relative w-full max-w-[280px] aspect-[4/5]">
                    {/* Phone Mockup */}
                    <div className="absolute inset-0 bg-foreground rounded-[2rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-background rounded-[1.75rem] overflow-hidden">
                        <div className="h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <feature.icon className="w-16 h-16 text-primary/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
