import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rewaiq.com.ng"),
  title: "Rewaiq | Discover. Earn. Influence.",
  description:
    "Rewaiq is Africa's digital earning hub — where creators, students, and dreamers discover opportunities, complete tasks, and earn rewards for engagement.",
  keywords: [
    "digital earning platform Nigeria",
    "earn money online Africa",
    "creator hub Nigeria",
    "student reward platform",
    "online task app",
    "music and video promotion Africa",
    "influencer opportunities",
    "passive income app 2025",
    "make money online Nigeria",
    "African creator economy",
    "student side hustle Nigeria",
    "online earning opportunities Africa",
  ],
  authors: [{ name: "Rewaiq" }],
  alternates: {
    canonical: "https://rewaiq.com.ng",
    languages: {
      "en-NG": "https://rewaiq.com.ng",
      "en-GH": "https://rewaiq.com.ng",
      "en-KE": "https://rewaiq.com.ng",
      "en-ZA": "https://rewaiq.com.ng",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rewaiq.com.ng",
    siteName: "Rewaiq",
    title: "Rewaiq | Discover. Earn. Influence.",
    description:
      "Rewaiq is Africa's digital earning hub — where creators, students, and dreamers discover opportunities, complete tasks, and earn rewards for engagement.",
    images: [
      {
        url: "/rewaiq-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rewaiq - Africa's Digital Earning Hub for Creators and Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rewaiq",
    creator: "@rewaiq",
    title: "Rewaiq | Discover. Earn. Influence.",
    description:
      "Rewaiq is Africa's digital earning hub — where creators, students, and dreamers discover opportunities, complete tasks, and earn rewards for engagement.",
    images: ["/rewaiq-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-search-console-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/rewaiq-logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rewaiq",
              alternateName: "Rewaiq Africa",
              url: "https://rewaiq.com.ng",
              logo: "https://rewaiq.com.ng/logo.png",
              description:
                "Africa's digital earning hub empowering creators, students, and young professionals to discover opportunities, complete tasks, and earn rewards through digital engagement.",
              foundingDate: "2025",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "NG",
                },
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Nigeria",
                },
                {
                  "@type": "Country",
                  name: "Ghana",
                },
                {
                  "@type": "Country",
                  name: "Kenya",
                },
                {
                  "@type": "Country",
                  name: "South Africa",
                },
              ],
              sameAs: [
                "https://twitter.com/rewaiq",
                "https://facebook.com/rewaiq",
                "https://instagram.com/rewaiq",
                "https://linkedin.com/company/rewaiq",
                "https://tiktok.com/@rewaiq",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@rewaiq.com.ng",
                contactType: "Customer Service",
                areaServed: "NG",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rewaiq",
              url: "https://rewaiq.com.ng",
              description: "Africa's digital earning hub for creators, students, and young professionals",
              inLanguage: "en-NG",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://rewaiq.com.ng/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
