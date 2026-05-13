"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export function PricingCTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with our team or start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base border-border hover:bg-muted w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
