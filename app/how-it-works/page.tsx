import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero"
import { DetailedSteps } from "@/components/how-it-works/detailed-steps"
import { UseCases } from "@/components/how-it-works/use-cases"
import { AppScreenshots } from "@/components/how-it-works/app-screenshots"
import { HowItWorksCTA } from "@/components/how-it-works/how-it-works-cta"

export const metadata = {
  title: "How It Works - ChargePilot | Find EV Charging Stations",
  description: "Learn how ChargePilot helps you find, plan, and charge your EV. See step-by-step guides and real-world use cases.",
}

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main>
        <HowItWorksHero />
        <DetailedSteps />
        <AppScreenshots />
        <UseCases />
        <HowItWorksCTA />
      </main>
      <Footer />
    </>
  )
}
