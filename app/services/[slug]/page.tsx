"use client"

import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Target,
} from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getServiceBySlug, getRelatedServices } from "@/lib/services"
import { ServiceConsultationModal } from "@/components/service-consultation-modal"
import { useState } from "react"

const iconMap = {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const { locale } = useLocale()
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = getRelatedServices(service.slug, service.relatedServices)
  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {locale === "ar" ? "خدمة متخصصة" : "Specialized Service"}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance">{service.title[locale]}</h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty mb-8">
                  {service.description[locale]}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => setIsConsultationOpen(true)}
                  >
                    {locale === "ar" ? "احصل على استشارة" : "Get Consultation"}
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  >
                    {locale === "ar" ? "اتصل الآن" : "Call Now"}
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="lg:text-right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary-foreground/10 rounded-lg">
                    <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-primary-foreground/80">
                      {locale === "ar" ? "سنة خبرة" : "Years Experience"}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-primary-foreground/10 rounded-lg">
                    <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-primary-foreground/80">
                      {locale === "ar" ? "قضية ناجحة" : "Successful Cases"}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-primary-foreground/10 rounded-lg">
                    <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-primary-foreground/80">
                      {locale === "ar" ? "دعم متاح" : "Support Available"}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-primary-foreground/10 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-sm text-primary-foreground/80">
                      {locale === "ar" ? "معدل النجاح" : "Success Rate"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">
                  {locale === "ar" ? "نظرة عامة على الخدمة" : "Service Overview"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                  {service.detailedContent[locale].overview}
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {locale === "ar" ? "منهجيتنا في العمل" : "Our Approach"}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                  {service.detailedContent[locale].approach}
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {locale === "ar" ? "مزايا خدماتنا" : "Service Benefits"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.detailedContent[locale].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {/* Services Included */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {locale === "ar" ? "الخدمات المشمولة" : "Services Included"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {service.features[locale].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">
                      {locale === "ar" ? "تواصل سريع" : "Quick Contact"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setIsConsultationOpen(true)}
                    >
                      {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      {locale === "ar" ? "اتصل الآن" : "Call Now"}
                      <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                {locale === "ar" ? "عملية العمل" : "Our Process"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "نتبع عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج"
                  : "We follow an organized and well-studied process to ensure achieving the best results"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.detailedContent[locale].process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {index < service.detailedContent[locale].process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/20" />
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                  {locale === "ar" ? "خدمات ذات صلة" : "Related Services"}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                  {locale === "ar" ? "خدمات أخرى قد تهمكم" : "Other services that might interest you"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedServices.map((relatedService, index) => {
                  const RelatedIcon = iconMap[relatedService.icon as keyof typeof iconMap]
                  return (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50"
                    >
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                          <RelatedIcon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {relatedService.title[locale]}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                          {relatedService.description[locale]}
                        </CardDescription>
                        <Button
                          variant="outline"
                          className="w-full group/btn bg-transparent"
                          onClick={() => (window.location.href = `/services/${relatedService.slug}`)}
                        >
                          {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                          <ArrowIcon className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
              {locale === "ar" ? "جاهز للحصول على المساعدة القانونية؟" : "Ready to Get Legal Help?"}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة مجانية ومناقشة احتياجاتكم في " + service.title[locale]
                : "Contact us today for a free consultation and discuss your " + service.title[locale] + " needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setIsConsultationOpen(true)}
              >
                {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
                <ArrowIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={service.title[locale]}
      />
    </div>
  )
}
