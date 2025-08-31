"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Phone, Mail } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function HeroSection() {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-law-office-interior-with-books-and-scales-.png" alt="Law Office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 font-serif text-balance">
            {locale === "ar" ? (
              <>
                <span className="block">استشارات قانونية</span>
                <span className="block text-accent">متخصصة</span>
              </>
            ) : (
              <>
                <span className="block">Expert Legal</span>
                <span className="block text-accent">Consultation</span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
            {locale === "ar"
              ? "خدمات قانونية مهنية بنزاهة وتفان لحماية حقوقكم وتحقيق العدالة"
              : "Professional legal services with integrity and dedication to protect your rights and achieve justice"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              {getTranslation(locale, "getConsultation")}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">info@premiumlegal.com</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm">
                {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm">
                {locale === "ar" ? "عميل راضي" : "Happy Clients"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-foreground/80 text-sm">
                {locale === "ar" ? "معدل النجاح" : "Success Rate"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80 text-sm">
                {locale === "ar" ? "دعم متاح" : "Support Available"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
