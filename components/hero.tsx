"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Now Accepting Early Access
            </div>

            <h1 className="font-poppins text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance">
              Discover. Earn. Influence.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty">
              Join Africa's digital earning hub where creators, students, and dreamers turn engagement into income.
              Complete tasks, grow your influence, and unlock opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-semibold group"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">5000+</div>
                <div className="text-sm text-primary-foreground/70">Early Signups</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">₦2M+</div>
                <div className="text-sm text-primary-foreground/70">Rewards Pending</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-primary-foreground/70">Partner Brands</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-8 backdrop-blur-sm border border-primary-foreground/10">
              <img
                src="/african-creator-using-smartphone-earning-money-dig.jpg"
                alt="Young African creator using smartphone to earn money online through Rewaiq digital platform - student earning rewards"
                className="rounded-xl w-full h-auto"
                loading="eager"
                width={600}
                height={400}
              />

              {/* Floating Cards */}
              <div
                className="absolute -top-4 -right-4 bg-background text-foreground rounded-lg shadow-xl p-4 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Earnings</div>
                    <div className="text-lg font-bold text-secondary">+₦15,000</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-background text-foreground rounded-lg shadow-xl p-4 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Tasks Completed</div>
                    <div className="text-lg font-bold text-primary">24/30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
