"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Route } from "lucide-react"

export function HowItWorksHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center">
            <Route className="w-8 h-8 text-secondary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            How <span className="text-primary">ChargePilot</span> Works
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            From downloading the app to completing your first charge, ChargePilot makes 
            the entire experience seamless. Here&apos;s everything you need to know.
          </p>

          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-base border-border hover:bg-muted"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo Video
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
