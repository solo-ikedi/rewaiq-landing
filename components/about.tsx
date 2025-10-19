import { Target, Eye, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Empowering Africa's Digital Generation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-4">
            Rewaiq is more than a platform—it's a movement. We're building the future where every African creator,
            student, and dreamer can monetize their digital presence and unlock real opportunities.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-pretty">
            Whether you're a content creator in Lagos, a student in Nairobi, or an aspiring influencer in Accra, Rewaiq
            provides the tools, community, and earning opportunities to help you succeed in the digital economy. From
            music streaming rewards to affiliate marketing, we're democratizing access to online income across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div
              className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
              aria-hidden="true"
            >
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="font-poppins text-xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Africa's leading digital earning ecosystem, where every engagement creates value and every
              creator finds opportunity. We envision a continent where young Africans can build sustainable income
              streams through digital skills and online engagement.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6" aria-hidden="true">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-poppins text-xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Democratize digital earning by connecting African youth with brands, tasks, and learning opportunities
              that reward engagement and creativity. We bridge the gap between African talent and global opportunities,
              making online earning accessible to everyone with a smartphone.
            </p>
          </div>

          {/* Values */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div
              className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
              aria-hidden="true"
            >
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-poppins text-xl font-bold text-primary mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparency, community-first approach, and empowering the next generation of African digital
              entrepreneurs and influencers. We believe in fair rewards, instant payouts, and building a supportive
              ecosystem where everyone can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
