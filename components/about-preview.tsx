"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Award, Users, Clock, CheckCircle } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import Link from "next/link"

export function AboutPreview() {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  const achievements = [
    {
      icon: Award,
      title: locale === "ar" ? "جوائز مهنية" : "Professional Awards",
      description: locale === "ar" ? "معترف بها محلياً ودولياً" : "Recognized locally and internationally",
    },
    {
      icon: Users,
      title: locale === "ar" ? "عملاء راضون" : "Satisfied Clients",
      description: locale === "ar" ? "أكثر من 500 عميل" : "Over 500 clients",
    },
    {
      icon: Clock,
      title: locale === "ar" ? "خبرة واسعة" : "Extensive Experience",
      description: locale === "ar" ? "15+ سنة في المجال" : "15+ years in practice",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/professional-lawyer-portrait-in-elegant-office-set.png"
                alt="Professional Lawyer"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-6 -right-6 bg-background shadow-xl border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">
                  {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif text-balance">
                {locale === "ar" ? "عن المحامي" : "About Our Firm"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                {locale === "ar"
                  ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية، نقدم خدمات قانونية متميزة تتسم بالنزاهة والمهنية العالية. نحن ملتزمون بحماية حقوق عملائنا وتحقيق أفضل النتائج في جميع القضايا."
                  : "With over 15 years of legal practice experience, we provide exceptional legal services characterized by integrity and high professionalism. We are committed to protecting our clients' rights and achieving the best results in all cases."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {locale === "ar"
                  ? "نؤمن بأن كل عميل يستحق أفضل تمثيل قانوني، ولذلك نعمل بجد لفهم احتياجاتكم الفريدة وتقديم حلول قانونية مبتكرة ومخصصة."
                  : "We believe every client deserves the best legal representation, which is why we work hard to understand your unique needs and provide innovative, customized legal solutions."}
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </h3>
              <div className="space-y-3">
                {[
                  locale === "ar"
                    ? "النزاهة والشفافية في جميع التعاملات"
                    : "Integrity and transparency in all dealings",
                  locale === "ar"
                    ? "التفاني في خدمة العملاء وحماية حقوقهم"
                    : "Dedication to client service and rights protection",
                  locale === "ar"
                    ? "الخبرة المهنية والتطوير المستمر"
                    : "Professional expertise and continuous development",
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  {locale === "ar" ? "اعرف المزيد عنا" : "Learn More About Us"}
                  <ArrowIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
