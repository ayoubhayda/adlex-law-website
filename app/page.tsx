"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <AboutPreview />
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted by hundreds of clients for professional legal representation
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
