import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { GainCreators } from "@/components/features/gain-creators"
import { PainRelievers } from "@/components/features/pain-relievers"
import { FeaturesCTA } from "@/components/features/features-cta"

export const metadata = {
  title: "Features - ChargePilot | EV Charging Made Easy",
  description: "Discover all ChargePilot features: real-time availability, smart route planning, station comparison, and more.",
}

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main>
        <FeaturesHero />
        <GainCreators />
        <PainRelievers />
        <FeaturesCTA />
      </main>
      <Footer />
    </>
  )
}
