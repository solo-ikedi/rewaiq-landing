import Hero from "@/components/hero"
import ComingSoonBanner from "@/components/coming-soon-banner"
import About from "@/components/about"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import WaitlistForm from "@/components/waitlist-form"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Rewaiq?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rewaiq is Africa's digital earning hub that connects creators, students, and young professionals with opportunities to earn money through digital engagement. Complete tasks like streaming music, watching videos, affiliate marketing, and learning new skills—all while getting rewarded.",
                },
              },
              {
                "@type": "Question",
                name: "How do I earn money on Rewaiq?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You earn by completing various tasks such as streaming music from African artists, engaging with video content, participating in affiliate programs, completing learning courses, and building your community. Each activity earns you points that convert to real money.",
                },
              },
              {
                "@type": "Question",
                name: "Is Rewaiq free to join?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Rewaiq is completely free to join. There are no hidden fees or subscription costs. You can start earning immediately after signing up and completing your profile.",
                },
              },
              {
                "@type": "Question",
                name: "How do I withdraw my earnings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once you reach the minimum withdrawal threshold, you can cash out your earnings directly to your bank account, mobile money, or other supported payment methods. Withdrawals are processed within 24-48 hours.",
                },
              },
              {
                "@type": "Question",
                name: "What countries is Rewaiq available in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rewaiq is currently launching in Nigeria, Ghana, Kenya, and South Africa, with plans to expand across Africa. Join the waitlist to be notified when we launch in your country.",
                },
              },
              {
                "@type": "Question",
                name: "How can brands partner with Rewaiq?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brands can partner with Rewaiq to reach Africa's vibrant creator community through sponsored tasks, affiliate programs, and promotional campaigns. Contact us at hello@rewaiq.com.ng for partnership opportunities.",
                },
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen">
        <ComingSoonBanner />
        <Header />
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Testimonials />
        <BlogPreview />
        <WaitlistForm />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
