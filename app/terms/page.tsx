"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CreditCard, Shield, Users, Gavel, Mail } from "lucide-react"
import { useLocale } from "@/hooks/use-locale-context"
import { motion } from "framer-motion"

export default function TermsPage() {
  const { locale } = useLocale()

  const lastUpdated = "2024-01-01"

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (locale === "ar") {
      return date.toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const sections = [
    {
      icon: Scale,
      title: locale === "ar" ? "قبول الشروط" : "Acceptance of Terms",
      content:
        locale === "ar"
          ? [
              "باستخدام خدماتنا القانونية أو زيارة موقعنا الإلكتروني، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.",
              "تطبق هذه الشروط على جميع العملاء والزوار والمستخدمين لخدماتنا، سواء كانوا أفراداً أو شركات أو مؤسسات.",
              "نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إشعارك بأي تغييرات جوهرية مسبقاً.",
            ]
          : [
              "By using our legal services or visiting our website, you agree to be bound by these terms and conditions. If you do not agree to any of these terms, please do not use our services.",
              "These terms apply to all clients, visitors, and users of our services, whether individuals, companies, or institutions.",
              "We reserve the right to modify these terms at any time, and you will be notified of any material changes in advance.",
            ],
    },
    {
      icon: FileText,
      title: locale === "ar" ? "الخدمات القانونية" : "Legal Services",
      content:
        locale === "ar"
          ? [
              "نقدم خدمات قانونية متخصصة في المجالات التالية:",
              "• قانون الأسرة والأحوال الشخصية",
              "• القانون التجاري وتأسيس الشركات",
              "• العقارات والاستثمار العقاري",
              "• الدفاع الجنائي والقضايا الجنائية",
              "• صياغة ومراجعة العقود",
              "• التقاضي والتحكيم",
              "جميع خدماتنا تقدم وفقاً لأعلى المعايير المهنية والأخلاقية في مهنة المحاماة.",
            ]
          : [
              "We provide specialized legal services in the following areas:",
              "• Family law and personal status",
              "• Commercial law and company formation",
              "• Real estate and property investment",
              "• Criminal defense and criminal cases",
              "• Contract drafting and review",
              "• Litigation and arbitration",
              "All our services are provided according to the highest professional and ethical standards in the legal profession.",
            ],
    },
    {
      icon: Users,
      title: locale === "ar" ? "مسؤوليات العميل" : "Client Responsibilities",
      content:
        locale === "ar"
          ? [
              "كعميل، أنت ملزم بما يلي:",
              "• تقديم معلومات دقيقة وكاملة حول قضيتك",
              "• التعاون الكامل مع فريقنا القانوني",
              "• الالتزام بالمواعيد المحددة والاتفاقيات",
              "• دفع الأتعاب والرسوم المتفق عليها في المواعيد المحددة",
              "• إبلاغنا فوراً بأي تغييرات تؤثر على قضيتك",
              "• احترام سرية المعلومات المتعلقة بقضايا العملاء الآخرين",
            ]
          : [
              "As a client, you are obligated to:",
              "• Provide accurate and complete information about your case",
              "• Fully cooperate with our legal team",
              "• Adhere to scheduled appointments and agreements",
              "• Pay agreed fees and charges on time",
              "• Immediately inform us of any changes affecting your case",
              "• Respect the confidentiality of information related to other clients' cases",
            ],
    },
    {
      icon: CreditCard,
      title: locale === "ar" ? "الأتعاب والدفع" : "Fees and Payment",
      content:
        locale === "ar"
          ? [
              "شروط الأتعاب والدفع:",
              "• يتم تحديد الأتعاب بناءً على طبيعة وتعقيد القضية",
              "• الاستشارة الأولية مجانية لمدة 30 دقيقة",
              "• يتم الاتفاق على الأتعاب كتابياً قبل بدء العمل",
              "• الدفع مطلوب مقدماً أو وفقاً لجدول الدفع المتفق عليه",
              "• الأتعاب لا تشمل الرسوم الحكومية أو رسوم المحاكم",
              "• في حالة التأخير في الدفع، قد نتوقف عن تقديم الخدمات",
            ]
          : [
              "Fee and payment terms:",
              "• Fees are determined based on the nature and complexity of the case",
              "• Initial consultation is free for 30 minutes",
              "• Fees are agreed upon in writing before starting work",
              "• Payment is required in advance or according to the agreed payment schedule",
              "• Fees do not include government fees or court costs",
              "• In case of payment delay, we may suspend services",
            ],
    },
    {
      icon: Shield,
      title: locale === "ar" ? "السرية والخصوصية" : "Confidentiality and Privacy",
      content:
        locale === "ar"
          ? [
              "نحن ملتزمون بأعلى معايير السرية المهنية:",
              "• جميع المعلومات التي تشاركها معنا محمية بسرية المحامي والموكل",
              "• لن نكشف عن معلوماتك لأي طرف ثالث دون موافقتك الكتابية",
              "• نحتفظ بسجلات آمنة لجميع المعلومات والوثائق",
              "• موظفونا مدربون على أهمية الحفاظ على سرية المعلومات",
              "• نستخدم تقنيات حديثة لحماية البيانات الإلكترونية",
              "• السرية تستمر حتى بعد انتهاء علاقتنا المهنية",
            ]
          : [
              "We are committed to the highest standards of professional confidentiality:",
              "• All information you share with us is protected by attorney-client privilege",
              "• We will not disclose your information to any third party without your written consent",
              "• We maintain secure records of all information and documents",
              "• Our staff are trained on the importance of maintaining information confidentiality",
              "• We use modern technologies to protect electronic data",
              "• Confidentiality continues even after our professional relationship ends",
            ],
    },
    {
      icon: AlertTriangle,
      title: locale === "ar" ? "إخلاء المسؤولية" : "Disclaimer",
      content:
        locale === "ar"
          ? [
              "يرجى ملاحظة القيود التالية:",
              "• المعلومات على موقعنا الإلكتروني لأغراض إعلامية عامة فقط",
              "• لا تشكل المعلومات المنشورة استشارة قانونية شخصية",
              "• النتائج السابقة لا تضمن نتائج مماثلة في المستقبل",
              "• نبذل قصارى جهدنا لكن لا نضمن نتائج محددة",
              "• مسؤوليتنا محدودة بقيمة الأتعاب المدفوعة",
              "• لا نتحمل مسؤولية الأضرار غير المباشرة أو التبعية",
            ]
          : [
              "Please note the following limitations:",
              "• Information on our website is for general informational purposes only",
              "• Published information does not constitute personal legal advice",
              "• Past results do not guarantee similar future results",
              "• We make our best efforts but do not guarantee specific outcomes",
              "• Our liability is limited to the value of fees paid",
              "• We are not responsible for indirect or consequential damages",
            ],
    },
    {
      icon: Gavel,
      title: locale === "ar" ? "القانون المطبق وحل النزاعات" : "Applicable Law and Dispute Resolution",
      content:
        locale === "ar"
          ? [
              "أحكام القانون وحل النزاعات:",
              "• تخضع هذه الشروط لقوانين المملكة العربية السعودية",
              "• أي نزاع ينشأ يحال إلى المحاكم المختصة في الرياض",
              "• نشجع على حل النزاعات ودياً قبل اللجوء للقضاء",
              "• يمكن اللجوء للتحكيم بموافقة الطرفين",
              "• اللغة العربية هي اللغة المعتمدة في حل النزاعات",
              "• تطبق الأنظمة واللوائح السعودية على جميع الخدمات",
            ]
          : [
              "Law and dispute resolution provisions:",
              "• These terms are subject to the laws of the Kingdom of Saudi Arabia",
              "• Any arising dispute is referred to the competent courts in Riyadh",
              "• We encourage amicable dispute resolution before litigation",
              "• Arbitration may be used with both parties' consent",
              "• Arabic is the approved language for dispute resolution",
              "• Saudi regulations and laws apply to all services",
            ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#060a12] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div 
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FileText className="h-8 w-8 text-accent" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {locale === "ar" ? "شروط الخدمة" : "Terms of Service"}
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {locale === "ar"
                  ? "الشروط والأحكام التي تحكم استخدام خدماتنا القانونية"
                  : "Terms and conditions governing the use of our legal services"}
              </motion.p>
              <motion.p 
                className="text-white/80 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {locale === "ar" ? "آخر تحديث: " : "Last updated: "}
                {formatDate(lastUpdated)}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="mb-12 border-accent/20 bg-accent/5">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed text-pretty">
                    {locale === "ar"
                      ? "تحدد هذه الشروط والأحكام القواعد والمبادئ التي تحكم العلاقة بيننا وبين عملائنا عند تقديم الخدمات القانونية. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا، حيث أن استخدامك لخدماتنا يعني موافقتك على هذه الشروط."
                      : "These terms and conditions outline the rules and principles governing the relationship between us and our clients when providing legal services. Please read these terms carefully before using our services, as your use of our services constitutes your agreement to these terms."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Terms Sections */}
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <section.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-foreground font-serif">{section.title}</h2>
                  </div>
                  <Card className="border-border">
                    <CardContent className="p-8">
                      <motion.div 
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {section.content.map((paragraph, paragraphIndex) => (
                          <motion.p 
                            key={paragraphIndex} 
                            className="text-muted-foreground leading-relaxed"
                            variants={scaleIn}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="mt-12 border-accent/20 bg-accent/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Mail className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-foreground font-serif">
                      {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                    </h2>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {locale === "ar"
                      ? "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:"
                      : "If you have any questions about these terms of service, please contact us:"}
                  </p>
                  <motion.div 
                    className="space-y-2 text-muted-foreground"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.p variants={fadeInUp}>
                      <strong>{locale === "ar" ? "البريد الإلكتروني: " : "Email: "}</strong>
                      legal@premiumlegal.com
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      <strong>{locale === "ar" ? "الهاتف: " : "Phone: "}</strong>
                      <span dir="ltr">+966 50 123 4567</span>
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      <strong>{locale === "ar" ? "العنوان: " : "Address: "}</strong>
                      {locale === "ar"
                        ? "شارع الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية"
                        : "King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia"}
                    </motion.p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
