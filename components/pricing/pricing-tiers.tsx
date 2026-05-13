"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Zap, Crown, Building2 } from "lucide-react"

const tiers = [
  {
    name: "Free",
    icon: Zap,
    description: "Perfect for getting started with EV charging",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Basic station finding",
      "Real-time availability",
      "Navigation to stations",
      "5 route plans per month",
      "Standard support",
      "One vehicle profile",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    description: "For EV enthusiasts who want the full experience",
    monthlyPrice: 9.99,
    yearlyPrice: 7.99,
    features: [
      "Everything in Free, plus:",
      "Unlimited route planning",
      "Advanced filters & comparison",
      "Waiting time predictions",
      "Priority support",
      "Multiple vehicle profiles",
      "Charging history & analytics",
      "Offline maps access",
      "No ads",
    ],
    cta: "Start 14-Day Free Trial",
    popular: true,
  },
  {
    name: "Business",
    icon: Building2,
    description: "For charging station owners and fleet managers",
    monthlyPrice: 49.99,
    yearlyPrice: 39.99,
    features: [
      "Everything in Pro, plus:",
      "Fleet management dashboard",
      "Station owner analytics",
      "Customer insights",
      "Premium station listing",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Expense reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingTiers() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly
          </span>
          {isYearly && (
            <Badge className="bg-secondary/20 text-secondary border-0">Save 20%</Badge>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl border ${
                tier.popular 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border"
              } p-8 flex flex-col`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 flex items-center justify-center">
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  {tier.monthlyPrice > 0 && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                {tier.monthlyPrice > 0 && isYearly && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed annually (${(tier.yearlyPrice * 12).toFixed(0)}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full h-12 ${
                  tier.popular 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Commission Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Transparent Charging Fees:</strong>{" "}
            ChargePilot may charge a small commission on charging sessions completed through supported 
            networks. This is always shown transparently before you start charging.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
