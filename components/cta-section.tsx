"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export function CTASection() {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
            {locale === "ar" ? "هل تحتاج إلى استشارة قانونية؟" : "Need Legal Consultation?"}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
            {locale === "ar"
              ? "لا تتردد في التواصل معنا للحصول على استشارة قانونية مهنية. نحن هنا لمساعدتكم في جميع احتياجاتكم القانونية."
              : "Don't hesitate to contact us for professional legal consultation. We are here to help you with all your legal needs."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              {locale === "ar" ? "اتصل بنا الآن" : "Call Us Now"}
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{locale === "ar" ? "اتصل بنا" : "Call Us"}</h3>
              <p className="text-primary-foreground/80">+966 50 123 4567</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{locale === "ar" ? "راسلنا" : "Email Us"}</h3>
              <p className="text-primary-foreground/80">info@premiumlegal.com</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{locale === "ar" ? "واتساب" : "WhatsApp"}</h3>
              <p className="text-primary-foreground/80">{locale === "ar" ? "متاح 24/7" : "Available 24/7"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
