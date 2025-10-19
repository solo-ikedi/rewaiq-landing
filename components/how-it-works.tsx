import { Search, Zap, Wallet } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Browse curated opportunities from music streaming, video engagement, affiliate tasks, and learning programs tailored for you.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Zap,
      title: "Engage",
      description:
        "Complete simple tasks like streaming music, watching videos, sharing content, or learning new skills. Every action counts.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Wallet,
      title: "Earn",
      description:
        "Get rewarded instantly for your engagement. Withdraw earnings, unlock premium features, or reinvest in your growth.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            How Rewaiq Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Three simple steps to start earning from your digital engagement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="relative bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`h-16 w-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 relative z-10`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>

                  <div className="absolute top-6 right-6 text-6xl font-bold text-border">{index + 1}</div>

                  <h3 className="font-poppins text-2xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
