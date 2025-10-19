"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Rewaiq?",
      answer:
        "Rewaiq is Africa's digital earning hub that connects creators, students, and young professionals with opportunities to earn money through digital engagement. Complete tasks like streaming music, watching videos, affiliate marketing, and learning new skills—all while getting rewarded.",
    },
    {
      question: "How do I earn money on Rewaiq?",
      answer:
        "You earn by completing various tasks such as streaming music from African artists, engaging with video content, participating in affiliate programs, completing learning courses, and building your community. Each activity earns you points that convert to real money.",
    },
    {
      question: "Is Rewaiq free to join?",
      answer:
        "Yes! Rewaiq is completely free to join. There are no hidden fees or subscription costs. You can start earning immediately after signing up and completing your profile.",
    },
    {
      question: "How do I withdraw my earnings?",
      answer:
        "Once you reach the minimum withdrawal threshold, you can cash out your earnings directly to your bank account, mobile money, or other supported payment methods. Withdrawals are processed within 24-48 hours.",
    },
    {
      question: "What countries is Rewaiq available in?",
      answer:
        "Rewaiq is currently launching in Nigeria, Ghana, Kenya, and South Africa, with plans to expand across Africa. Join the waitlist to be notified when we launch in your country.",
    },
    {
      question: "How can brands partner with Rewaiq?",
      answer:
        "Brands can partner with Rewaiq to reach Africa's vibrant creator community through sponsored tasks, affiliate programs, and promotional campaigns. Contact us at hello@rewaiq.com.ng for partnership opportunities.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Everything you need to know about earning money online with Rewaiq
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-xl border border-border overflow-hidden hover:border-secondary/20 transition-colors"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-poppins text-lg font-semibold text-primary pr-8" itemProp="name">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-muted-foreground leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="mailto:hello@rewaiq.com.ng" className="text-secondary font-semibold hover:underline">
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
