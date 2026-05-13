"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const stats = [
  { value: "50,000+", label: "Active Users" },
  { value: "100K+", label: "Charging Sessions" },
  { value: "15+", label: "Charging Networks" },
  { value: "4.8", label: "App Store Rating" },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Tesla Model 3 Owner",
    content: "ChargePilot has completely eliminated my range anxiety. The real-time availability feature is a game-changer - I always know exactly where I can charge.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "EV Fleet Manager",
    content: "We manage 50+ EVs and ChargePilot&apos;s route planning has saved us countless hours. The unified access to all charging networks is exactly what we needed.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Daily Commuter",
    content: "The app predicted a 10-minute wait at my usual station, so I went to another one nearby. No waiting! This app thinks ahead for you.",
    rating: 5,
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-background/70 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Join Thousands of Happy EV Drivers
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Saving time, reducing anxiety, and making every journey smoother.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-background/10"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-background/90 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-background">{testimonial.name}</p>
                  <p className="text-sm text-background/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
