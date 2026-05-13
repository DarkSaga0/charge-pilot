"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Zap, 
  Clock, 
  CheckCircle2,
  Download,
  Play
} from "lucide-react"

const trustIndicators = [
  { icon: Clock, text: "Real-time availability" },
  { icon: MapPin, text: "Optimal route planning" },
  { icon: Zap, text: "All stations in one app" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-0 px-4 py-1.5">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Trusted by 50,000+ EV Drivers
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Find, Plan, and Charge Your{" "}
              <span className="text-primary">EV Journey</span>{" "}
              with Confidence
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              See real-time charging station availability, get optimal route suggestions, 
              and access all charging providers in one unified app. Never worry about 
              finding a charger again.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="w-5 h-5 mr-2" />
                Download Free App
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base border-border hover:bg-muted"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground rounded-b-2xl z-10" />
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* App Screen Content */}
                  <div className="p-4 pt-10 h-full flex flex-col">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold text-foreground">ChargePilot</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted" />
                    </div>

                    {/* Search Bar */}
                    <div className="bg-muted rounded-xl p-3 mb-4 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Search for charging stations...</span>
                    </div>

                    {/* Map Area */}
                    <div className="flex-1 bg-muted/50 rounded-2xl relative overflow-hidden mb-4">
                      {/* Simulated Map */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                      
                      {/* Map Markers */}
                      <div className="absolute top-1/4 left-1/3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-lg animate-pulse">
                          <Zap className="w-4 h-4 text-secondary-foreground" />
                        </div>
                      </div>
                      <div className="absolute top-1/2 right-1/4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <Zap className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="absolute bottom-1/3 left-1/4">
                        <div className="w-6 h-6 rounded-full bg-primary/70 flex items-center justify-center shadow-lg">
                          <Zap className="w-3 h-3 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="absolute top-1/3 right-1/3">
                        <div className="w-6 h-6 rounded-full bg-secondary/70 flex items-center justify-center shadow-lg">
                          <Zap className="w-3 h-3 text-secondary-foreground" />
                        </div>
                      </div>

                      {/* Current Location */}
                      <div className="absolute bottom-1/4 right-1/3">
                        <div className="w-4 h-4 rounded-full bg-foreground border-4 border-background shadow-lg" />
                      </div>
                    </div>

                    {/* Station Card */}
                    <div className="bg-card rounded-xl p-3 border border-border shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">Fast Charge Station</p>
                            <p className="text-xs text-muted-foreground">0.8 km away</p>
                          </div>
                        </div>
                        <Badge className="bg-secondary/20 text-secondary border-0 text-xs">
                          Available
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>150 kW</span>
                        <span>•</span>
                        <span>$0.35/kWh</span>
                        <span>•</span>
                        <span>2/4 ports free</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-4 sm:-left-12 top-24 bg-card rounded-xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-xs text-muted-foreground">Charging Stations</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 sm:-right-12 bottom-32 bg-card rounded-xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Live</p>
                    <p className="text-xs text-muted-foreground">Real-time Updates</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
