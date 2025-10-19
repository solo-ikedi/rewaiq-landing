import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPreview() {
  const posts = [
    {
      title: "How to Maximize Your Earnings on Rewaiq",
      excerpt:
        "Discover proven strategies to boost your income and make the most of every opportunity on the platform.",
      date: "2025-03-15",
      image: "/digital-earning-strategies.jpg",
      category: "Tips & Tricks",
      slug: "maximize-earnings-rewaiq",
    },
    {
      title: "The Rise of Digital Earning in Africa",
      excerpt: "Explore how platforms like Rewaiq are transforming the creator economy across the continent.",
      date: "2025-03-10",
      image: "/african-digital-economy.jpg",
      category: "Industry Insights",
      slug: "digital-earning-africa-rise",
    },
    {
      title: "Meet Our Top Earners: Success Stories",
      excerpt: "Get inspired by creators who turned their passion into profit through Rewaiq's ecosystem.",
      date: "2025-03-05",
      image: "/successful-african-creators.jpg",
      category: "Community",
      slug: "top-earners-success-stories",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Rewaiq Insights",
            description: "Tips, strategies, and success stories for African creators and digital earners",
            url: "https://rewaiq.com.ng/blog",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Organization",
                name: "Rewaiq",
              },
              publisher: {
                "@type": "Organization",
                name: "Rewaiq",
                logo: {
                  "@type": "ImageObject",
                  url: "https://rewaiq.com.ng/logo.png",
                },
              },
              image: `https://rewaiq.com.ng${post.image}`,
              url: `https://rewaiq.com.ng/blog/${post.slug}`,
            })),
          }),
        }}
      />

      <section id="blog" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
                Rewaiq Insights
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Tips, stories, and insights from Africa's creator economy
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="group bg-transparent">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={`${post.title} - Rewaiq blog article about earning money online in Africa`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="font-poppins text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors text-balance">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-secondary font-semibold text-sm flex items-center gap-2 group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
