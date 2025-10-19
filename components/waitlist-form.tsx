"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Mail } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
    setEmail("")
  }

  return (
    <section id="waitlist" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {!submitted ? (
            <>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary border border-secondary/30 mb-8">
                <Mail className="h-4 w-4" />
                Join 5,000+ Early Members
              </div>

              <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Get Early Access to Rewaiq
              </h2>

              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
                Be among the first to experience Africa's digital earning revolution. Join our waitlist and get
                exclusive early access, bonus rewards, and priority support.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-primary-foreground text-foreground border-0 h-12 text-base"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold whitespace-nowrap"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-sm text-primary-foreground/70 mt-4">No spam, ever. Unsubscribe anytime.</p>
            </>
          ) : (
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mb-6">
                <CheckCircle2 className="h-8 w-8 text-secondary" />
              </div>

              <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-4">You're on the list! 🎉</h3>

              <p className="text-lg text-primary-foreground/90 mb-6">
                Thank you for joining Rewaiq. We'll send you an email with early access details soon. Get ready to start
                earning!
              </p>

              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Add Another Email
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
