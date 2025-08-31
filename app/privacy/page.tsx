"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, Users, FileText, Calendar, Mail } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function PrivacyPage() {
  const { locale } = useLocale()

  const lastUpdated = "2024-01-01"

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
      icon: Eye,
      title: locale === "ar" ? "المعلومات التي نجمعها" : "Information We Collect",
      content:
        locale === "ar"
          ? [
              "نجمع المعلومات التالية عندما تتواصل معنا أو تستخدم خدماتنا:",
              "• المعلومات الشخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، والعنوان",
              "• معلومات القضية: تفاصيل الاستشارة القانونية أو القضية التي تحتاج المساعدة فيها",
              "• معلومات الاتصال: سجلات المكالمات والرسائل الإلكترونية والمراسلات",
              "• المعلومات التقنية: عنوان IP، نوع المتصفح، ونظام التشغيل عند زيارة موقعنا",
            ]
          : [
              "We collect the following information when you contact us or use our services:",
              "• Personal Information: Name, email address, phone number, and address",
              "• Case Information: Details about your legal consultation or case requiring assistance",
              "• Communication Information: Call logs, emails, and correspondence records",
              "• Technical Information: IP address, browser type, and operating system when visiting our website",
            ],
    },
    {
      icon: Database,
      title: locale === "ar" ? "كيف نستخدم معلوماتك" : "How We Use Your Information",
      content:
        locale === "ar"
          ? [
              "نستخدم المعلومات التي نجمعها للأغراض التالية:",
              "• تقديم الخدمات القانونية والاستشارات المطلوبة",
              "• التواصل معك بخصوص قضيتك أو استفساراتك",
              "• تحسين جودة خدماتنا وتطوير خدمات جديدة",
              "• الامتثال للمتطلبات القانونية والتنظيمية",
              "• حماية حقوقنا القانونية ومصالح عملائنا",
            ]
          : [
              "We use the information we collect for the following purposes:",
              "• Providing legal services and required consultations",
              "• Communicating with you regarding your case or inquiries",
              "• Improving the quality of our services and developing new services",
              "• Complying with legal and regulatory requirements",
              "• Protecting our legal rights and clients' interests",
            ],
    },
    {
      icon: Lock,
      title: locale === "ar" ? "حماية معلوماتك" : "Protecting Your Information",
      content:
        locale === "ar"
          ? [
              "نتخذ تدابير أمنية صارمة لحماية معلوماتك الشخصية:",
              "• التشفير: جميع البيانات الحساسة مشفرة أثناء النقل والتخزين",
              "• الوصول المحدود: فقط الموظفون المخولون يمكنهم الوصول لمعلوماتك",
              "• التدريب الأمني: جميع الموظفين مدربون على أفضل ممارسات الأمان",
              "• المراجعة الدورية: نراجع ونحدث إجراءاتنا الأمنية بانتظام",
              "• النسخ الاحتياطي الآمن: نحتفظ بنسخ احتياطية آمنة من جميع البيانات المهمة",
            ]
          : [
              "We take strict security measures to protect your personal information:",
              "• Encryption: All sensitive data is encrypted during transmission and storage",
              "• Limited Access: Only authorized personnel can access your information",
              "• Security Training: All staff are trained on security best practices",
              "• Regular Reviews: We regularly review and update our security procedures",
              "• Secure Backups: We maintain secure backups of all important data",
            ],
    },
    {
      icon: Users,
      title: locale === "ar" ? "مشاركة المعلومات" : "Information Sharing",
      content:
        locale === "ar"
          ? [
              "نحن ملتزمون بسرية معلوماتك ولا نشاركها إلا في الحالات التالية:",
              "• بموافقتك الصريحة والمكتوبة",
              "• عند الضرورة لتقديم الخدمات القانونية المطلوبة",
              "• للامتثال لأمر قضائي أو متطلب قانوني",
              "• لحماية حقوقنا القانونية أو سلامة الآخرين",
              "• مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تقديم خدماتنا",
            ]
          : [
              "We are committed to the confidentiality of your information and only share it in the following cases:",
              "• With your explicit written consent",
              "• When necessary to provide the required legal services",
              "• To comply with a court order or legal requirement",
              "• To protect our legal rights or the safety of others",
              "• With trusted service providers who help us deliver our services",
            ],
    },
    {
      icon: FileText,
      title: locale === "ar" ? "حقوقك" : "Your Rights",
      content:
        locale === "ar"
          ? [
              "لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:",
              "• الحق في الوصول: يمكنك طلب نسخة من المعلومات التي نحتفظ بها عنك",
              "• الحق في التصحيح: يمكنك طلب تصحيح أي معلومات غير دقيقة",
              "• الحق في الحذف: يمكنك طلب حذف معلوماتك في ظروف معينة",
              "• الحق في التقييد: يمكنك طلب تقييد معالجة معلوماتك",
              "• الحق في النقل: يمكنك طلب نقل معلوماتك إلى مقدم خدمة آخر",
            ]
          : [
              "You have the following rights regarding your personal information:",
              "• Right to Access: You can request a copy of the information we hold about you",
              "• Right to Correction: You can request correction of any inaccurate information",
              "• Right to Deletion: You can request deletion of your information under certain circumstances",
              "• Right to Restriction: You can request restriction of processing your information",
              "• Right to Portability: You can request transfer of your information to another service provider",
            ],
    },
    {
      icon: Calendar,
      title: locale === "ar" ? "الاحتفاظ بالبيانات" : "Data Retention",
      content:
        locale === "ar"
          ? [
              "نحتفظ بمعلوماتك للفترات التالية:",
              "• معلومات العملاء النشطين: طوال فترة تقديم الخدمات القانونية",
              "• سجلات القضايا: لمدة 10 سنوات بعد انتهاء القضية وفقاً للمتطلبات القانونية",
              "• المراسلات: لمدة 7 سنوات للأغراض القانونية والمهنية",
              "• البيانات التقنية: لمدة سنتين لأغراض الأمان وتحسين الخدمات",
              "• بعد انتهاء فترات الاحتفاظ، نقوم بحذف أو إتلاف جميع المعلومات بشكل آمن",
            ]
          : [
              "We retain your information for the following periods:",
              "• Active client information: Throughout the period of providing legal services",
              "• Case records: For 10 years after case completion according to legal requirements",
              "• Correspondence: For 7 years for legal and professional purposes",
              "• Technical data: For 2 years for security and service improvement purposes",
              "• After retention periods end, we securely delete or destroy all information",
            ],
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
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance">
                {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية"
                  : "We are committed to protecting your privacy and the security of your personal information"}
              </p>
              <p className="text-primary-foreground/80 mt-4">
                {locale === "ar" ? "آخر تحديث: " : "Last updated: "}
                {formatDate(lastUpdated)}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <Card className="mb-12 border-accent/20 bg-accent/5">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed text-pretty">
                  {locale === "ar"
                    ? "تحدد هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا عند استخدام خدماتنا القانونية أو زيارة موقعنا الإلكتروني. نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك وفقاً لأعلى المعايير المهنية والقانونية."
                    : "This policy outlines how we collect, use, and protect the personal information you provide when using our legal services or visiting our website. We are committed to protecting your privacy and ensuring the security of your information according to the highest professional and legal standards."}
                </p>
              </CardContent>
            </Card>

            {/* Privacy Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <section.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground font-serif">{section.title}</h2>
                  </div>
                  <Card className="border-border">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {section.content.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <Card className="mt-12 border-accent/20 bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground font-serif">
                    {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                  </h2>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  {locale === "ar"
                    ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى التواصل معنا:"
                    : "If you have any questions about this privacy policy or how we handle your personal information, please contact us:"}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>{locale === "ar" ? "البريد الإلكتروني: " : "Email: "}</strong>
                    privacy@premiumlegal.com
                  </p>
                  <p>
                    <strong>{locale === "ar" ? "الهاتف: " : "Phone: "}</strong>
                    +966 50 123 4567
                  </p>
                  <p>
                    <strong>{locale === "ar" ? "العنوان: " : "Address: "}</strong>
                    {locale === "ar"
                      ? "شارع الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية"
                      : "King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
