import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingCTA } from "@/components/pricing/pricing-cta"

export const metadata = {
  title: "Pricing - ChargePilot | Affordable EV Charging Plans",
  description: "Choose the perfect ChargePilot plan for your needs. Free tier available. Unlock premium features with our affordable subscription.",
}

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        <PricingHero />
        <PricingTiers />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  )
}
