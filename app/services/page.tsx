"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function ServicesPage() {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  const services = [
    {
      icon: Users,
      title: locale === "ar" ? "قانون الأسرة" : "Family Law",
      description:
        locale === "ar"
          ? "نقدم استشارات شاملة في جميع قضايا الأسرة بما في ذلك الزواج والطلاق وحضانة الأطفال والنفقة وتقسيم الممتلكات. نحن نفهم حساسية هذه القضايا ونعمل بتفهم ومهنية عالية."
          : "We provide comprehensive consultation on all family matters including marriage, divorce, child custody, alimony, and property division. We understand the sensitivity of these cases and work with understanding and high professionalism.",
      features: [
        locale === "ar" ? "قضايا الطلاق والخلع" : "Divorce and Khula Cases",
        locale === "ar" ? "حضانة الأطفال" : "Child Custody",
        locale === "ar" ? "النفقة والمؤخر" : "Alimony and Deferred Dower",
        locale === "ar" ? "تقسيم الممتلكات" : "Property Division",
      ],
      slug: "family-law",
    },
    {
      icon: Home,
      title: locale === "ar" ? "العقارات" : "Real Estate",
      description:
        locale === "ar"
          ? "خدمات قانونية متكاملة في المعاملات العقارية تشمل البيع والشراء والإيجار والاستثمار العقاري. نساعدكم في حماية استثماراتكم العقارية وضمان سلامة المعاملات."
          : "Complete legal services in real estate transactions including buying, selling, leasing, and real estate investment. We help you protect your real estate investments and ensure transaction safety.",
      features: [
        locale === "ar" ? "عقود البيع والشراء" : "Sale and Purchase Contracts",
        locale === "ar" ? "عقود الإيجار" : "Lease Agreements",
        locale === "ar" ? "النزاعات العقارية" : "Real Estate Disputes",
        locale === "ar" ? "الاستثمار العقاري" : "Real Estate Investment",
      ],
      slug: "real-estate",
    },
    {
      icon: Briefcase,
      title: locale === "ar" ? "القانون التجاري" : "Business Law",
      description:
        locale === "ar"
          ? "استشارات قانونية شاملة للشركات والمؤسسات التجارية تشمل تأسيس الشركات والعقود التجارية وحل النزاعات التجارية والامتثال القانوني."
          : "Comprehensive legal consultation for companies and commercial institutions including company formation, commercial contracts, commercial dispute resolution, and legal compliance.",
      features: [
        locale === "ar" ? "تأسيس الشركات" : "Company Formation",
        locale === "ar" ? "العقود التجارية" : "Commercial Contracts",
        locale === "ar" ? "النزاعات التجارية" : "Commercial Disputes",
        locale === "ar" ? "الامتثال القانوني" : "Legal Compliance",
      ],
      slug: "business-law",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "الدفاع الجنائي" : "Criminal Defense",
      description:
        locale === "ar"
          ? "تمثيل قانوني قوي ومهني في القضايا الجنائية مع التركيز على حماية حقوق المتهمين وضمان العدالة. نقدم دفاعاً قوياً ومدروساً في جميع أنواع القضايا الجنائية."
          : "Strong and professional legal representation in criminal cases with focus on protecting defendants' rights and ensuring justice. We provide strong and well-studied defense in all types of criminal cases.",
      features: [
        locale === "ar" ? "الجرائم المالية" : "Financial Crimes",
        locale === "ar" ? "جرائم المرور" : "Traffic Violations",
        locale === "ar" ? "القضايا الجنائية العامة" : "General Criminal Cases",
        locale === "ar" ? "الاستئناف الجنائي" : "Criminal Appeals",
      ],
      slug: "criminal-defense",
    },
    {
      icon: FileText,
      title: locale === "ar" ? "صياغة العقود" : "Contract Drafting",
      description:
        locale === "ar"
          ? "صياغة ومراجعة العقود القانونية بجميع أنواعها مع ضمان حماية مصالح العملاء والامتثال للقوانين المحلية والدولية."
          : "Drafting and reviewing legal contracts of all types while ensuring protection of clients' interests and compliance with local and international laws.",
      features: [
        locale === "ar" ? "العقود التجارية" : "Commercial Contracts",
        locale === "ar" ? "عقود العمل" : "Employment Contracts",
        locale === "ar" ? "اتفاقيات الشراكة" : "Partnership Agreements",
        locale === "ar" ? "عقود الخدمات" : "Service Contracts",
      ],
      slug: "contract-drafting",
    },
    {
      icon: Gavel,
      title: locale === "ar" ? "التقاضي والتحكيم" : "Litigation & Arbitration",
      description:
        locale === "ar"
          ? "تمثيل قانوني متميز أمام المحاكم وهيئات التحكيم مع خبرة واسعة في إدارة القضايا المعقدة وتحقيق أفضل النتائج للعملاء."
          : "Distinguished legal representation before courts and arbitration bodies with extensive experience in managing complex cases and achieving the best results for clients.",
      features: [
        locale === "ar" ? "التقاضي المدني" : "Civil Litigation",
        locale === "ar" ? "التحكيم التجاري" : "Commercial Arbitration",
        locale === "ar" ? "تنفيذ الأحكام" : "Judgment Execution",
        locale === "ar" ? "الطعون والاستئناف" : "Appeals and Challenges",
      ],
      slug: "litigation-arbitration",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: locale === "ar" ? "الاستشارة الأولية" : "Initial Consultation",
      description: locale === "ar" ? "نبدأ بفهم احتياجاتكم القانونية" : "We start by understanding your legal needs",
    },
    {
      step: "02",
      title: locale === "ar" ? "تحليل القضية" : "Case Analysis",
      description: locale === "ar" ? "دراسة شاملة للوضع القانوني" : "Comprehensive study of the legal situation",
    },
    {
      step: "03",
      title: locale === "ar" ? "وضع الاستراتيجية" : "Strategy Development",
      description: locale === "ar" ? "تطوير خطة عمل قانونية مخصصة" : "Developing a customized legal action plan",
    },
    {
      step: "04",
      title: locale === "ar" ? "التنفيذ والمتابعة" : "Implementation & Follow-up",
      description: locale === "ar" ? "تنفيذ الخطة ومتابعة النتائج" : "Implementing the plan and monitoring results",
    },
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
                {getTranslation(locale, "servicesTitle")}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم القانونية"
                  : "We offer a comprehensive range of specialized legal services to meet all your legal needs"}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">
                        {locale === "ar" ? "الخدمات المشمولة:" : "Services Included:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group/btn">
                      <a href={`/services/${service.slug}`} className="flex items-center justify-center w-full">
                        {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                        <ArrowIcon className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                {locale === "ar" ? "كيف نعمل" : "How We Work"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا"
                  : "An organized and well-studied work process to ensure achieving the best results for our clients"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-xl">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/20" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
              {locale === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة قانونية مجانية ومناقشة احتياجاتكم"
                : "Contact us today for a free legal consultation and discuss your needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
    </div>
  )
}
