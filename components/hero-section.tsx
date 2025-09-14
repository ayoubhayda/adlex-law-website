"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react"
import { useLocale } from "@/hooks/use-locale-context"
import { getTranslation } from "@/lib/i18n"
import { ServiceConsultationModal } from "./service-consultation-modal"
import { useState } from "react"

export function HeroSection() {
  const { locale } = useLocale()
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <section className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-law-office.webp" alt="Law Office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 font-serif text-balance">
            {locale === "ar" ? (
              <>
                <span className="block text-white mb-3">استشارات قانونية</span>
                <span className="block text-accent">متخصصة</span>
              </>
            ) : (
              <>
                <span className="block text-white mb-3">Expert Legal</span>
                <span className="block text-accent">Consultation</span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl  text-white mb-8 leading-relaxed text-pretty">
            {locale === "ar"
              ? "خدمات قانونية مهنية بنزاهة وتفان لحماية حقوقكم وتحقيق العدالة"
              : "Professional legal services with integrity and dedication to protect your rights and achieve justice"}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <Button 
              size="lg" 
              onClick={() => setIsConsultationOpen(true)}
              className="bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/30 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs"
            >
              {getTranslation(locale, "getConsultation")}
              <MessageCircle className="ms-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Stats Section - Floating Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2 font-serif">15+</div>
                <div className=" text-white text-xs sm:text-sm font-medium leading-tight">
                  {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2 font-serif">500+</div>
                <div className=" text-white text-xs sm:text-sm font-medium leading-tight">
                  {locale === "ar" ? "عميل راضي" : "Happy Clients"}
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2 font-serif">95%</div>
                <div className=" text-white text-xs sm:text-sm font-medium leading-tight">
                  {locale === "ar" ? "معدل النجاح" : "Success Rate"}
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2 font-serif">24/7</div>
                <div className=" text-white text-xs sm:text-sm font-medium leading-tight">
                  {locale === "ar" ? "دعم متاح" : "Support Available"}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />
    </section>
  )
}
