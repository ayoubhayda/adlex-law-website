"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Award, Users, CheckCircle, Clock } from "lucide-react"
import { useLocale } from "@/hooks/use-locale-context"
import Link from "next/link"

export function AboutPreview() {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  const achievements = [
    {
      icon: Award,
      title: locale === "ar" ? "جوائز مهنية" : "Professional Awards",
      description: locale === "ar" ? "محلياً ودولياً" : "Local & global",
    },
    {
      icon: Users,
      title: locale === "ar" ? "عملاء راضون" : "Satisfied Clients",
      description: locale === "ar" ? "+500 عميل" : "500+ clients",
    },
    {
      icon: Clock,
      title: locale === "ar" ? "خبرة واسعة" : "Extensive Experience",
      description: locale === "ar" ? "15+ سنة" : "15+ years",
    },
  ]
  

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Content Side */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-serif leading-tight">
                {locale === "ar" ? "عن المحامي" : "About Our Firm"}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {locale === "ar"
                  ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية، نقدم خدمات قانونية متميزة تتسم بالنزاهة والمهنية العالية. نحن ملتزمون بحماية حقوق عملائنا وتحقيق أفضل النتائج في جميع القضايا."
                  : "With over 15 years of legal practice experience, we provide exceptional legal services characterized by integrity and high professionalism. We are committed to protecting our clients' rights and achieving the best results in all cases."}
              </p>
            </div>

            {/* Achievements */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
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

            {/* Achievements */}
            <div className="flex flex-wrap gap-4 sm:hidden sm:grid-cols-3 sm:gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="flex-1 min-w-[140px] sm:min-w-0 sm:flex-none bg-background/95 backdrop-blur-sm border border-accent/20 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                  <CardContent className="p-2 sm:p-6 text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{achievement.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </h3>
              <div className="space-y-3 sm:space-y-4">
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
                  <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-muted-foreground text-base sm:text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-accent dark:border-border dark:hover:border-accent text-accent hover:bg-accent hover:text-white bg-transparent px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer"
                >
                  {locale === "ar" ? "اعرف المزيد عنا" : "Learn More About Us"}
                  <ArrowIcon className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-first lg:order-last">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-accent/5 to-accent/10 p-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/professional-lawyer-portrait.webp"
                    alt="Professional Lawyer"
                    className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Achievement Card - Enhanced */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12 hidden lg:block">
                <Card className="bg-background/95 backdrop-blur-md shadow-none border border-accent/20 hover:border-accent/30 transition-all duration-300 hover:shadow-3xl hover:shadow-accent/20 group/card">
                  <CardContent className="px-6 py-y sm:px-8 sm:py-3 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent mb-2 group-hover/card:scale-110 transition-transform duration-300">
                        15+
                      </div>
                      <div className="text-muted-foreground font-medium text-xs sm:text-sm">
                        {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                      </div>
                      {/* Decorative element */}
                      <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-accent/20 group-hover/card:bg-accent/30 transition-colors duration-300"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
