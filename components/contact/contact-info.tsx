"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Clock, Star, MapPin, Phone } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support",
    contact: "hello@chargepilot.app",
    action: "mailto:hello@chargepilot.app",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available in-app",
    action: "#",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "For urgent business inquiries",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
]

const supportInfo = [
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically respond within 24-48 hours for email inquiries. Live chat support is available during business hours.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Love ChargePilot? Leave us a review on the App Store or Google Play. Your feedback helps us improve!",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    description: "ChargePilot HQ, 123 Innovation Drive, San Francisco, CA 94105, United States",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.action}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <method.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.contact}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Support Info */}
      <div className="space-y-4">
        {supportInfo.map((info) => (
          <div
            key={info.title}
            className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
              <info.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership CTA */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Interested in Partnership?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          If you&apos;re a charging network, EV manufacturer, or business looking to partner 
          with ChargePilot, we&apos;d love to explore collaboration opportunities.
        </p>
        <p className="text-sm font-medium text-primary">
          partnerships@chargepilot.app
        </p>
      </div>
    </motion.div>
  )
}
