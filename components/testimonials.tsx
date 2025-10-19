import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Content Creator, Lagos",
      location: "Lagos, Nigeria",
      image: "/african-woman-content-creator.jpg",
      content:
        "Rewaiq changed my life! I've earned over ₦50,000 in just two months by doing what I love—streaming music and sharing content. This is the future!",
      rating: 5,
      earnings: "₦50,000+",
    },
    {
      name: "Kwame Mensah",
      role: "Student, Accra",
      location: "Accra, Ghana",
      image: "/african-male-student.jpg",
      content:
        "As a student, Rewaiq helps me earn while learning. The tasks are simple, the rewards are real, and the community is amazing. Highly recommend!",
      rating: 5,
      earnings: "₦35,000+",
    },
    {
      name: "Amara Nwosu",
      role: "Aspiring Influencer, Abuja",
      location: "Abuja, Nigeria",
      image: "/african-woman-influencer.jpg",
      content:
        "I discovered so many opportunities through Rewaiq. From affiliate programs to brand partnerships, it's the perfect platform for growing my influence.",
      rating: 5,
      earnings: "₦80,000+",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: testimonials.map((testimonial, index) => ({
              "@type": "Review",
              position: index + 1,
              author: {
                "@type": "Person",
                name: testimonial.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: testimonial.rating,
                bestRating: 5,
              },
              reviewBody: testimonial.content,
              itemReviewed: {
                "@type": "Organization",
                name: "Rewaiq",
              },
            })),
          }),
        }}
      />

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
              Success Stories from Our Community
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Real people, real earnings, real impact. See how African creators and students are earning money online
              with Rewaiq.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-colors">
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}, ${testimonial.role} - Rewaiq success story`}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-secondary font-medium mt-1">Earned: {testimonial.earnings}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
