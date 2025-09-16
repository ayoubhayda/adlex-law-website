"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  GraduationCap,
  Scale,
  Heart,
  Shield,
  Target,
  Handshake,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import ServiceConsultationModelButton from "@/components/service-consultation-model-button";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { locale } = useLocale();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
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
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const milestones = [
    {
      year: "2008",
      title: locale === "ar" ? "بداية المسيرة المهنية" : "Started Legal Career",
      description:
        locale === "ar"
          ? "تخرج من كلية الحقوق بامتياز"
          : "Graduated from Law School with Honors",
      icon: GraduationCap,
    },
    {
      year: "2012",
      title: locale === "ar" ? "تأسيس المكتب" : "Founded Law Firm",
      description:
        locale === "ar"
          ? "افتتاح مكتب المحاماة المتخصص"
          : "Opened Specialized Law Practice",
      icon: Scale,
    },
    {
      year: "2018",
      title: locale === "ar" ? "جائزة التميز" : "Excellence Award",
      description:
        locale === "ar"
          ? "حصل على جائزة أفضل محامي للعام"
          : "Received Lawyer of the Year Award",
      icon: Award,
    },
    {
      year: "2023",
      title: locale === "ar" ? "500+ عميل راضي" : "500+ Satisfied Clients",
      description:
        locale === "ar"
          ? "وصل عدد العملاء الراضين إلى 500+"
          : "Reached 500+ Satisfied Clients Milestone",
      icon: Users,
    },
  ];

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
  ];

  const achievements = [
    {
      number: "15+",
      label: locale === "ar" ? "سنوات خبرة" : "Years Experience",
    },
    { number: "500+", label: locale === "ar" ? "عميل راضي" : "Happy Clients" },
    { number: "95%", label: locale === "ar" ? "معدل النجاح" : "Success Rate" },
    {
      number: "10+",
      label: locale === "ar" ? "جوائز مهنية" : "Professional Awards",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="/elegant-law-office-banner.webp"
              alt="Law Office Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-balance drop-shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {getTranslation(locale, "aboutTitle")}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {locale === "ar"
                  ? "تعرف على قصة نجاحنا وخبرتنا في تقديم أفضل الخدمات القانونية"
                  : "Learn about our success story and expertise in providing the best legal services"}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 ${
                locale === "ar" ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Side - Always on the left */}
              <motion.div
                className={`relative ${
                  locale === "ar" ? "lg:col-start-2" : ""
                }`}
                initial={{ opacity: 0, x: locale === "ar" ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <motion.img
                    src="/professional-lawyer-portrait.webp"
                    alt="Professional Lawyer"
                    className="w-full h-[600px] object-cover object-top"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  />
                </div>

                {/* Floating Stats */}
                <motion.div
                  className={`absolute -bottom-8 hidden lg:grid grid-cols-2 gap-4 -right-8`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {achievements.slice(0, 2).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="bg-background shadow-sm border-accent/20">
                        <CardContent className="px-4 text-center">
                          <div className="text-2xl font-bold text-accent mb-1">
                            {achievement.number}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {achievement.label}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                className={`space-y-8 ${
                  locale === "ar" ? "lg:col-start-1" : ""
                }`}
                initial={{ opacity: 0, x: locale === "ar" ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Badge
                      variant="secondary"
                      className="mb-4 bg-accent/10 text-accent"
                    >
                      {locale === "ar"
                        ? "المحامي المتميز"
                        : "Premium Legal Expert"}
                    </Badge>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif text-balance"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {locale === "ar"
                      ? "خبرة قانونية متميزة"
                      : "Distinguished Legal Expertise"}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {locale === "ar"
                      ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية، أقدم خدمات قانونية شاملة ومتخصصة في مختلف المجالات القانونية. حصلت على درجة البكالوريوس في الحقوق من جامعة الملك سعود بامتياز مع مرتبة الشرف، وأكملت دراساتي العليا في القانون التجاري الدولي."
                      : "With over 15 years of legal practice experience, I provide comprehensive and specialized legal services across various legal fields. I earned my Bachelor's degree in Law from King Saud University with honors, and completed my graduate studies in International Commercial Law."}
                  </motion.p>
                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {locale === "ar"
                      ? "أؤمن بأن كل عميل يستحق أفضل تمثيل قانوني ممكن، ولذلك أعمل بجد لفهم احتياجات كل عميل وتقديم حلول قانونية مبتكرة ومخصصة تحقق أفضل النتائج."
                      : "I believe every client deserves the best possible legal representation, which is why I work diligently to understand each client's needs and provide innovative, customized legal solutions that achieve the best results."}
                  </motion.p>
                </div>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {achievements.slice(2).map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 bg-muted/30 rounded-xl"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-bold text-accent mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
          {/* Background Decoration */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
          </motion.div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  {locale === "ar"
                    ? "مسيرة مهنية متميزة"
                    : "Distinguished Career Path"}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif text-balance">
                {locale === "ar" ? "مسيرة النجاح" : "Journey of Success"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "تعرف على أهم المحطات في مسيرتنا المهنية والإنجازات التي حققناها عبر السنين"
                  : "Discover the key milestones in our professional journey and the achievements we've accomplished over the years"}
              </p>
            </motion.div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent/60 to-accent/30 hidden lg:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/20 hidden lg:block" />

              <div className="space-y-6 lg:space-y-20">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`group relative flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:gap-12`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 w-full lg:w-auto ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } text-center lg:text-inherit`}
                    >
                      <Card className="group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 border-border hover:border-accent/40 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div
                            className={`flex items-start gap-6 mb-6 ${
                              index % 2 === 0
                                ? "lg:flex-row-reverse"
                                : "lg:flex-row-reverse"
                            } flex-row`}
                          >
                            {/* Icon Container */}
                            <motion.div 
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                                <milestone.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                              </div>
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge
                                  variant="outline"
                                  className="text-accent border-accent/50 bg-accent/5 hover:bg-accent/10 transition-colors duration-300 font-medium"
                                >
                                  {milestone.year}
                                </Badge>
                                <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-1 hidden lg:block" />
                              </div>
                              <h3 className="text-2xl font-bold text-foreground text-start mb-3 group-hover:text-accent transition-colors duration-300">
                                {milestone.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-start  text-lg">
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Enhanced Timeline Dot */}
                    <motion.div 
                      className="relative z-20 items-center justify-center hidden lg:flex"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
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
                    </motion.div>

                    {/* Spacer for desktop */}
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>

              {/* Timeline End Decoration */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 hidden lg:flex"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border-2 border-accent/30">
                  <div className="h-2 w-2 rounded-full bg-accent/60" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "القيم التي نؤمن بها وتوجه عملنا في تقديم أفضل الخدمات القانونية"
                  : "The values we believe in and that guide our work in providing the best legal services"}
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50 h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="h-8 w-8 text-accent" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

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
          <motion.div 
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
              {locale === "ar"
                ? "هل تحتاج إلى استشارة قانونية؟"
                : "Need Legal Consultation?"}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة قانونية مهنية ومتخصصة"
                : "Contact us today for professional and specialized legal consultation"}
            </p>

            {/* Get Consultation Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceConsultationModelButton />
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
