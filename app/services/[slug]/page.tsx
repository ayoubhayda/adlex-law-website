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
import { useLocale } from "@/hooks/use-locale-context"
import { getServiceBySlug, getRelatedServices } from "@/lib/services"
import { ServiceConsultationModal } from "@/components/service-consultation-modal"
import { useState, use } from "react"

const iconMap = {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
}

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ServicePage({ params }: ServicePageProps) {
  const { locale } = useLocale()
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params)
  const service = getServiceBySlug(resolvedParams.slug)

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
        <section className="py-20 bg-[#060a12] text-white">
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
                <p className="text-xl text-white/90 leading-relaxed text-pretty mb-8">
                  {service.description[locale]}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-accent text-white hover:bg-accent/90 cursor-pointer"
                    onClick={() => setIsConsultationOpen(true)}
                  >
                    {locale === "ar" ? "احصل على استشارة" : "Get Consultation"}
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 dark:border-zinc-700 text-white hover:border-accent dark:hover:border-accent hover:text-accent bg-transparent hover:bg-transparent"
                  >
                    {locale === "ar" ? "اتصل الآن" : "Call Now"}
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="lg:text-right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-zinc-700/60 rounded-lg">
                    <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-white/80">
                      {locale === "ar" ? "سنة خبرة" : "Years Experience"}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-zinc-700/60 rounded-lg">
                    <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-white/80">
                      {locale === "ar" ? "قضية ناجحة" : "Successful Cases"}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-zinc-700/60 rounded-lg">
                    <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-white/80">
                      {locale === "ar" ? "دعم متاح" : "Support Available"}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-zinc-700/60 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-sm text-white/80">
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
                      className="w-full bg-accent text-white hover:bg-accent/90 cursor-pointer"
                      onClick={() => setIsConsultationOpen(true)}
                    >
                      {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent hover:text-white cursor-pointer dark:border-border dark:hover:border-accent/50 transition-all">
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
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  {locale === "ar" ? "منهجية عمل متميزة" : "Distinguished Work Methodology"}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif text-balance">
                {locale === "ar" ? "عملية العمل" : "Our Process"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا"
                  : "An organized and well-studied work process to ensure achieving the best results for our clients"}
              </p>
            </div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent/60 to-accent/30 hidden lg:block" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/20 hidden lg:block" />

              <div className="space-y-6 lg:space-y-20">
                {service.detailedContent[locale].process.map((step, index) => (
                  <div
                    key={index}
                    className={`group relative flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:gap-12`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 w-full lg:w-auto ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } text-center lg:text-inherit`}
                    >
                      <Card className="group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 border-border hover:border-accent/40 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className={`flex items-start gap-6 mb-6 ${
                            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row-reverse"
                          } flex-row`}>
                            {/* Icon Container */}
                            <div className="relative">
                              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                                <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                                  {String(index + 1).padStart(2, "0")}
                                </div>
                              </div>
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge 
                                  variant="outline" 
                                  className="text-accent border-accent/50 bg-accent/5 hover:bg-accent/10 transition-colors duration-300 font-medium"
                                >
                                  {locale === "ar" ? `الخطوة ${String(index + 1).padStart(2, "0")}` : `Step ${String(index + 1).padStart(2, "0")}`}
                                </Badge>
                                <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-1 hidden lg:block" />
                              </div>
                              <h3 className="text-2xl font-bold text-foreground text-start mb-3 group-hover:text-accent transition-colors duration-300">
                                {locale === "ar" ? `مرحلة ${index + 1}` : `Phase ${index + 1}`}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-start text-lg">
                                {step}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Enhanced Timeline Dot */}
                    <div className="relative z-20 items-center justify-center hidden lg:flex">
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                        {/* Main dot */}
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 border-4 border-background shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <div className="h-3 w-3 rounded-full bg-background" />
                        </div>
                        {/* Inner glow */}
                        <div className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>

              {/* Timeline End Decoration */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 hidden lg:flex">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border-2 border-accent/30">
                  <div className="h-2 w-2 rounded-full bg-accent/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary rounded-full blur-3xl" />
            </div>
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-accent">
                    {locale === "ar" ? "خدمات إضافية" : "Additional Services"}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif text-balance">
                  {locale === "ar" ? "خدمات ذات صلة" : "Related Services"}
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
                  {locale === "ar" 
                    ? "اكتشف خدماتنا الأخرى التي قد تساعدكم في تحقيق أهدافكم القانونية"
                    : "Discover our other services that might help you achieve your legal goals"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedServices.map((relatedService, index) => {
                  const RelatedIcon = iconMap[relatedService.icon as keyof typeof iconMap]
                  return (
                    <Card
                      key={index}
                      className="group transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50 flex flex-col h-full bg-background/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/10"
                    >
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                          <RelatedIcon className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {relatedService.title[locale]}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-between flex-1 space-y-6">
                        <div className="space-y-6">
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {relatedService.description[locale]}
                          </CardDescription>
                          
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground text-sm">
                              {locale === "ar" ? "الخدمات المشمولة:" : "Services Included:"}
                            </h4>
                            <ul className="space-y-2">
                              {relatedService.features[locale].slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="w-full group/btn bg-transparent border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 mt-auto cursor-pointer"
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
        <section className="py-20 bg-[#060a12] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
              {locale === "ar" ? "جاهز للحصول على المساعدة القانونية؟" : "Ready to Get Legal Help?"}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة مجانية ومناقشة احتياجاتكم في " + service.title[locale]
                : "Contact us today for a free legal consultation and discuss your " + service.title[locale] + " needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 cursor-pointer"
                onClick={() => setIsConsultationOpen(true)}
              >
                {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
                <ArrowIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 dark:border-zinc-700 text-white hover:border-accent dark:hover:border-accent hover:text-accent bg-transparent hover:bg-transparent"
              >
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
                <Phone className="ms-2 h-5 w-5" />
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
