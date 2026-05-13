"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  TrendingUp, 
  UserCheck, 
  Clock, 
  Smartphone, 
  Timer, 
  MapPin, 
  Route, 
  BarChart3 
} from "lucide-react"

const gainCreators = [
  {
    icon: TrendingUp,
    title: "Faster Decision Making",
    description: "Real-time data helps you make quick decisions about where to charge. No more guessing or hoping a station is available.",
    highlight: "Save 15+ minutes per charging stop",
  },
  {
    icon: BarChart3,
    title: "Optimized Cost & Charging Time",
    description: "Compare prices across providers and find the fastest chargers near you. Balance cost and speed based on your priorities.",
    highlight: "Save up to 30% on charging costs",
  },
  {
    icon: UserCheck,
    title: "Personalized Recommendations",
    description: "The app learns your preferences and driving patterns to suggest stations that match your needs perfectly.",
    highlight: "Tailored to your EV & habits",
  },
  {
    icon: Route,
    title: "More Predictable Travel",
    description: "Plan long trips with confidence knowing exactly where you&apos;ll stop, for how long, and what it will cost.",
    highlight: "No surprises on road trips",
  },
  {
    icon: Smartphone,
    title: "Eliminates Multiple Apps",
    description: "Access all charging networks from a single app. No need to download, manage, or switch between different provider apps.",
    highlight: "One app for all networks",
  },
  {
    icon: Clock,
    title: "Reduces Confusion & Time Loss",
    description: "Clear, accurate information means no more driving to occupied stations or searching for chargers in unfamiliar areas.",
    highlight: "Always find available chargers",
  },
  {
    icon: Timer,
    title: "Waiting Time Predictions",
    description: "Know estimated wait times before you arrive. If a station is busy, find a better alternative instantly.",
    highlight: "Skip the queue intelligently",
  },
  {
    icon: MapPin,
    title: "Real-Time Station Availability",
    description: "Live status updates show you exactly which ports are free, in use, or out of service at any moment.",
    highlight: "Updated every 30 seconds",
  },
  {
    icon: Zap,
    title: "Improved Trip Planning Accuracy",
    description: "Precise battery consumption predictions based on your vehicle, driving style, and route conditions.",
    highlight: "Accurate range estimates",
  },
]

export function GainCreators() {
  return (
    <section className="py-20 md:py-28 bg-background">
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
            Gain Creators
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Benefits That Make Every Journey Better
          </h2>
          <p className="text-lg text-muted-foreground">
            ChargePilot doesn&apos;t just solve problems - it actively makes your EV experience 
            better, faster, and more enjoyable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gainCreators.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-4 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                {feature.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
