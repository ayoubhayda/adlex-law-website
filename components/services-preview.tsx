"use client"

import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Users, Home, Briefcase, Shield, ArrowRight, ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"
import Link from "next/link"

export function ServicesPreview() {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  const services = [
    {
      icon: Users,
      title: locale === "ar" ? "قانون الأسرة" : "Family Law",
      description:
        locale === "ar"
          ? "استشارات شاملة في قضايا الأسرة والزواج والطلاق وحضانة الأطفال"
          : "Comprehensive consultation on family matters, marriage, divorce, and child custody",
    },
    {
      icon: Home,
      title: locale === "ar" ? "العقارات" : "Real Estate",
      description:
        locale === "ar"
          ? "خدمات قانونية متكاملة في المعاملات العقارية والاستثمار العقاري"
          : "Complete legal services for real estate transactions and property investment",
    },
    {
      icon: Briefcase,
      title: locale === "ar" ? "القانون التجاري" : "Business Law",
      description:
        locale === "ar"
          ? "استشارات قانونية للشركات والعقود التجارية والاستثمار"
          : "Legal consultation for companies, commercial contracts, and investment",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "الدفاع الجنائي" : "Criminal Defense",
      description:
        locale === "ar"
          ? "تمثيل قانوني قوي في القضايا الجنائية وحماية الحقوق"
          : "Strong legal representation in criminal cases and rights protection",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
            {getTranslation(locale, "servicesTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {locale === "ar"
              ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتكم القانونية المختلفة"
              : "We offer a comprehensive range of specialized legal services to meet your diverse legal needs"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href="/services"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
              <ArrowIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
