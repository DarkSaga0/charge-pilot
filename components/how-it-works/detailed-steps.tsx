"use client"

import { motion } from "framer-motion"
import { 
  Download, 
  MapPin, 
  Search, 
  GitCompare, 
  Navigation, 
  Zap, 
  Bell,
  CreditCard
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Setup",
    description: "Download ChargePilot from the App Store or Google Play. Create your account in seconds and add your EV details for personalized recommendations.",
    details: [
      "Available on iOS and Android",
      "Free to download and use",
      "Add multiple vehicles to your account",
      "Sync preferences across devices"
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Nearby Stations",
    description: "Open the app and instantly see all charging stations around you. Use filters to find the perfect match for your needs.",
    details: [
      "Real-time availability status",
      "Filter by charger type (CCS, CHAdeMO, Type 2)",
      "Sort by distance, price, or speed",
      "See user ratings and reviews"
    ],
  },
  {
    number: "03",
    icon: GitCompare,
    title: "Compare Your Options",
    description: "Tap on stations to see detailed information. Compare prices, charging speeds, and amenities to make the best choice.",
    details: [
      "Side-by-side comparison view",
      "Pricing transparency",
      "See available ports in real-time",
      "Check nearby amenities (cafe, restrooms, WiFi)"
    ],
  },
  {
    number: "04",
    icon: Navigation,
    title: "Navigate to Your Station",
    description: "Select your station and get turn-by-turn directions. Our routes are optimized for EVs, considering charging efficiency.",
    details: [
      "Integration with Google Maps & Apple Maps",
      "EV-optimized routing",
      "Estimated arrival time",
      "Live traffic updates"
    ],
  },
  {
    number: "05",
    icon: Zap,
    title: "Start Charging",
    description: "Arrive at the station and start your charging session. Some stations allow you to start charging directly from the app.",
    details: [
      "One-tap charging start (supported stations)",
      "QR code scanning",
      "Session progress tracking",
      "Real-time charging speed display"
    ],
  },
  {
    number: "06",
    icon: Bell,
    title: "Track & Get Notified",
    description: "Monitor your charging session in real-time. Get notifications when charging is complete or if any issues occur.",
    details: [
      "Live charging progress",
      "Estimated time to full charge",
      "Push notifications",
      "Session history and stats"
    ],
  },
  {
    number: "07",
    icon: CreditCard,
    title: "Pay & Go",
    description: "Payment is handled automatically through the app. Review your session details and hit the road with a full battery.",
    details: [
      "Multiple payment methods",
      "Transparent pricing",
      "Digital receipts",
      "Expense tracking for business users"
    ],
  },
]

export function DetailedSteps() {
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
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Step by Step
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Complete Charging Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to master EV charging with ChargePilot.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index !== steps.length - 1 ? "lg:pb-12" : ""
                }`}
              >
                {/* Content - Alternating sides */}
                <div 
                  className={`${
                    index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"
                  }`}
                >
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="flex-shrink-0 lg:hidden">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-primary">Step {step.number}</span>
                      <h3 className="text-2xl font-semibold text-foreground mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                        {step.details.map((detail) => (
                          <li key={detail} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 ${index % 2 === 0 ? "lg:order-2" : ""}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center Icon (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? "lg:order-2" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
