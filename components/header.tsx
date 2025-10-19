"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
  <img 
    src="/rewaiq-logo.ico" 
    alt="Rewaiq logo" 
    className="w-8 h-8"
  />
  <span className="font-bold text-xl text-slate-900">Rewaiq</span>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            FAQ
          </button>
          <Button
            onClick={() => scrollToSection("waitlist")}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
