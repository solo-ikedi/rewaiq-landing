import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
             <div className="flex items-center gap-2">
  <img 
    src="/rewaiq-logo.ico" 
    alt="Rewaiq logo" 
    className="w-8 h-8"
  />
              <span className="font-poppins text-2xl font-bold">Rewaiq</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Africa's digital earning hub where creators, students, and dreamers discover opportunities, complete
              tasks, and earn rewards for engagement.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow Rewaiq on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow Rewaiq on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow Rewaiq on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow Rewaiq on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@rewaiq.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@rewaiq.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rewaiq.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:founder@rewaiq.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">© 2025 Rewaiq. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
