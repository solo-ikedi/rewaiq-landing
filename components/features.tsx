import { Music, Video, TrendingUp, GraduationCap, Users, Gift } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Music,
      title: "Music Streaming Rewards",
      description:
        "Earn while discovering new African artists. Stream music, support creators, and get rewarded for your listening time. Perfect for music lovers who want to turn their passion into income.",
    },
    {
      icon: Video,
      title: "Video Engagement",
      description:
        "Watch, share, and engage with video content from brands and creators. Turn your screen time into earnings. Get paid to watch videos, leave reviews, and share content with your network.",
    },
    {
      icon: TrendingUp,
      title: "Affiliate Tasks",
      description:
        "Promote products you love and earn commissions. Access exclusive affiliate programs from top African brands. Build passive income through smart product recommendations.",
    },
    {
      icon: GraduationCap,
      title: "Learning Opportunities",
      description:
        "Upskill while earning. Complete courses, attend webinars, and get certified in digital skills that matter. From digital marketing to content creation, learn and earn simultaneously.",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Connect with fellow creators, share strategies, and grow together. Join a vibrant community of African digital earners. Network with like-minded individuals and collaborate on projects.",
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description:
        "Unlock premium perks, early access to opportunities, and special bonuses as you level up your influence. Enjoy VIP treatment, priority support, and exclusive brand partnerships.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Comprehensive features designed to maximize your earning potential and digital influence across Africa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-secondary/20 transition-all group"
            >
              <div
                className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors"
                aria-hidden="true"
              >
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-poppins text-lg font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
