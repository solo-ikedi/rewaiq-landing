"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"

export default function ComingSoonBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Sparkles className="h-4 w-4 text-secondary" />
          <p className="font-medium text-center">
            <span className="font-bold">Coming Soon!</span> Be among the first to join Africa's digital earning
            revolution.
          </p>
          <Sparkles className="h-4 w-4 text-secondary" />
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
