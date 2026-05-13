import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQ } from "@/components/contact/contact-faq"

export const metadata = {
  title: "Contact - ChargePilot | Get in Touch",
  description: "Contact the ChargePilot team for support, partnerships, or general inquiries. We're here to help you with your EV charging needs.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <div className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <ContactFAQ />
      </main>
      <Footer />
    </>
  )
}
