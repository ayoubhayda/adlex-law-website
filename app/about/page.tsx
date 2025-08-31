"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, GraduationCap, Scale, Heart, Shield, Target, Handshake } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function AboutPage() {
  const { locale } = useLocale()

  const milestones = [
    {
      year: "2008",
      title: locale === "ar" ? "بداية المسيرة المهنية" : "Started Legal Career",
      description: locale === "ar" ? "تخرج من كلية الحقوق بامتياز" : "Graduated from Law School with Honors",
      icon: GraduationCap,
    },
    {
      year: "2012",
      title: locale === "ar" ? "تأسيس المكتب" : "Founded Law Firm",
      description: locale === "ar" ? "افتتاح مكتب المحاماة المتخصص" : "Opened Specialized Law Practice",
      icon: Scale,
    },
    {
      year: "2018",
      title: locale === "ar" ? "جائزة التميز" : "Excellence Award",
      description: locale === "ar" ? "حصل على جائزة أفضل محامي للعام" : "Received Lawyer of the Year Award",
      icon: Award,
    },
    {
      year: "2023",
      title: locale === "ar" ? "500+ عميل راضي" : "500+ Satisfied Clients",
      description: locale === "ar" ? "وصل عدد العملاء الراضين إلى 500+" : "Reached 500+ Satisfied Clients Milestone",
      icon: Users,
    },
  ]

  const values = [
    {
      icon: Heart,
      title: locale === "ar" ? "النزاهة" : "Integrity",
      description:
        locale === "ar"
          ? "نلتزم بأعلى معايير النزاهة والشفافية في جميع تعاملاتنا"
          : "We maintain the highest standards of integrity and transparency in all our dealings",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "حماية الحقوق" : "Rights Protection",
      description:
        locale === "ar"
          ? "نحن ملتزمون بحماية حقوق عملائنا والدفاع عنها بكل قوة"
          : "We are committed to protecting and defending our clients' rights with full strength",
    },
    {
      icon: Target,
      title: locale === "ar" ? "التميز" : "Excellence",
      description:
        locale === "ar"
          ? "نسعى دائماً لتحقيق أفضل النتائج وتقديم خدمات قانونية متميزة"
          : "We always strive to achieve the best results and provide exceptional legal services",
    },
    {
      icon: Handshake,
      title: locale === "ar" ? "الثقة" : "Trust",
      description:
        locale === "ar"
          ? "نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة المتبادلة"
          : "We build long-term relationships with our clients based on mutual trust",
    },
  ]

  const achievements = [
    { number: "15+", label: locale === "ar" ? "سنوات خبرة" : "Years Experience" },
    { number: "500+", label: locale === "ar" ? "عميل راضي" : "Happy Clients" },
    { number: "95%", label: locale === "ar" ? "معدل النجاح" : "Success Rate" },
    { number: "10+", label: locale === "ar" ? "جوائز مهنية" : "Professional Awards" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance">
                {getTranslation(locale, "aboutTitle")}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "تعرف على قصة نجاحنا وخبرتنا في تقديم أفضل الخدمات القانونية"
                  : "Learn about our success story and expertise in providing the best legal services"}
              </p>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Image Side */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/professional-lawyer-portrait-in-elegant-office-set.png"
                    alt="Professional Lawyer"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
                  {achievements.slice(0, 2).map((achievement, index) => (
                    <Card key={index} className="bg-background shadow-xl border-accent/20">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-accent mb-1">{achievement.number}</div>
                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
                    {locale === "ar" ? "المحامي المتميز" : "Premium Legal Expert"}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif text-balance">
                    {locale === "ar" ? "خبرة قانونية متميزة" : "Distinguished Legal Expertise"}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                    {locale === "ar"
                      ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية، أقدم خدمات قانونية شاملة ومتخصصة في مختلف المجالات القانونية. حصلت على درجة البكالوريوس في الحقوق من جامعة الملك سعود بامتياز مع مرتبة الشرف، وأكملت دراساتي العليا في القانون التجاري الدولي."
                      : "With over 15 years of legal practice experience, I provide comprehensive and specialized legal services across various legal fields. I earned my Bachelor's degree in Law from King Saud University with honors, and completed my graduate studies in International Commercial Law."}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {locale === "ar"
                      ? "أؤمن بأن كل عميل يستحق أفضل تمثيل قانوني ممكن، ولذلك أعمل بجد لفهم احتياجات كل عميل وتقديم حلول قانونية مبتكرة ومخصصة تحقق أفضل النتائج."
                      : "I believe every client deserves the best possible legal representation, which is why I work diligently to understand each client's needs and provide innovative, customized legal solutions that achieve the best results."}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {achievements.slice(2).map((achievement, index) => (
                    <div key={index} className="text-center p-6 bg-muted/30 rounded-xl">
                      <div className="text-3xl font-bold text-accent mb-2">{achievement.number}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                {locale === "ar" ? "مسيرة النجاح" : "Journey of Success"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "تعرف على أهم المحطات في مسيرتنا المهنية والإنجازات التي حققناها"
                  : "Learn about the key milestones in our professional journey and achievements"}
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                              <milestone.icon className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <Badge variant="outline" className="text-accent border-accent/50 mb-2">
                                {milestone.year}
                              </Badge>
                              <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent border-4 border-background shadow-lg hidden md:flex">
                      <div className="h-2 w-2 rounded-full bg-accent-foreground" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "القيم التي نؤمن بها وتوجه عملنا في تقديم أفضل الخدمات القانونية"
                  : "The values we believe in and that guide our work in providing the best legal services"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
              {locale === "ar" ? "هل تحتاج إلى استشارة قانونية؟" : "Need Legal Consultation?"}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة قانونية مهنية ومتخصصة"
                : "Contact us today for professional and specialized legal consultation"}
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {getTranslation(locale, "getConsultation")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
