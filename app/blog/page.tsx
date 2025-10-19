import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Rewaiq Insights - Blog | Digital Earning Tips for African Creators",
  description:
    "Learn how to maximize your earnings on Rewaiq. Tips, strategies, and success stories from African creators, students, and influencers.",
  keywords: [
    "digital earning tips Nigeria",
    "how to make money online Africa",
    "creator economy blog",
    "student earning guide",
    "affiliate marketing Africa",
  ],
}

export default function BlogPage() {
  const posts = [
    {
      title: "10 Ways Nigerian Students Can Earn Money Online in 2025",
      excerpt:
        "Discover proven strategies for students to generate income through digital platforms, from affiliate marketing to content creation.",
      author: "Rewaiq Team",
      date: "2025-01-15",
      readTime: "5 min read",
      slug: "nigerian-students-earn-money-online-2025",
      category: "Earning Tips",
    },
    {
      title: "The Ultimate Guide to Music Streaming Rewards in Africa",
      excerpt:
        "Learn how to maximize your earnings by streaming African music. Tips on discovering new artists and getting paid for your listening time.",
      author: "Chioma Okafor",
      date: "2025-01-10",
      readTime: "7 min read",
      slug: "music-streaming-rewards-africa-guide",
      category: "Features",
    },
    {
      title: "Building Your Personal Brand as an African Creator",
      excerpt:
        "Essential strategies for growing your influence and monetizing your digital presence across social media platforms.",
      author: "Kwame Mensah",
      date: "2025-01-05",
      readTime: "6 min read",
      slug: "building-personal-brand-african-creator",
      category: "Growth",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <header className="mb-12">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">Rewaiq Insights</h1>
            <p className="text-lg text-muted-foreground">
              Tips, strategies, and stories to help you succeed in Africa's digital economy
            </p>
          </header>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors border border-border"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-poppins text-2xl font-bold text-primary mb-3 hover:text-secondary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="text-secondary">
                      Read More →
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
