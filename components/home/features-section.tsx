"use client"

import { motion } from "framer-motion"
import { 
  MapPin, 
  Zap, 
  Clock, 
  Route,
  BarChart3,
  Smartphone,
  Shield,
  Timer
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Real-Time Availability Tracking",
    description: "See which charging stations are available right now. No more arriving at occupied chargers.",
    color: "primary",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    description: "AI-powered optimal route suggestions based on your battery level, location, and destination.",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Multi-Provider Access",
    description: "Access stations from all charging providers in one unified app. No need to juggle multiple apps.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Station Comparison",
    description: "Compare different stations by price, charging speed, and current availability.",
    color: "secondary",
  },
  {
    icon: Timer,
    title: "Waiting Time Predictions",
    description: "Know estimated wait times before you arrive. Plan your charging stops intelligently.",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Trip Planning Accuracy",
    description: "Improved long-distance trip planning with precise battery predictions and charging recommendations.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Personalized Recommendations",
    description: "Get station suggestions tailored to your preferences, driving patterns, and vehicle specs.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Verified Station Data",
    description: "All station information is verified and updated in real-time by our community and partners.",
    color: "secondary",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
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
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need for Stress-Free EV Charging
          </h2>
          <p className="text-lg text-muted-foreground">
            ChargePilot combines real-time data, smart planning, and unified access 
            to eliminate charging anxiety and make every trip seamless.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div 
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  feature.color === "primary" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
