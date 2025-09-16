"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowLeft,
  Award,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

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
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        
      },
    },
  };

  const valueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        
      },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Content Side */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-serif leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {locale === "ar" ? "عن المحامي" : "About Our Firm"}
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {locale === "ar"
                  ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية، نقدم خدمات قانونية متميزة تتسم بالنزاهة والمهنية العالية. نحن ملتزمون بحماية حقوق عملائنا وتحقيق أفضل النتائج في جميع القضايا."
                  : "With over 15 years of legal practice experience, we provide exceptional legal services characterized by integrity and high professionalism. We are committed to protecting our clients' rights and achieving the best results in all cases."}
              </motion.p>
            </motion.div>

            {/* Achievements - Desktop */}
            <motion.div
              className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={achievementVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                >
                  <motion.div
                    className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
                    whileHover={{ backgroundColor: "rgba(var(--accent), 0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <achievement.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievements - Mobile */}
            <motion.div
              className="flex flex-wrap gap-4 sm:hidden sm:grid-cols-3 sm:gap-6"
              variants={containerVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={achievementVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="flex-1 min-w-[140px] sm:min-w-0 sm:flex-none bg-background/95 backdrop-blur-sm border border-accent/20 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                    <CardContent className="p-2 sm:p-6 text-center">
                      <div className="mx-auto mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                        <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {achievement.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </motion.h3>
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
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 group"
                    variants={valueVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 400, damping: 17 },
                    }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                    </div>
                    <span className="text-muted-foreground text-base sm:text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="pt-2 sm:pt-4"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
            >
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-accent dark:border-border dark:hover:border-accent text-accent hover:bg-accent hover:text-white bg-transparent px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer"
                >
                  {locale === "ar" ? "اعرف المزيد عنا" : "Learn More About Us"}
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowIcon className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            className="relative order-first lg:order-last"
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-accent/5 to-accent/10 p-2"
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/professional-lawyer-portrait.webp"
                    alt="Professional Lawyer"
                    className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              {/* Floating Achievement Card - Enhanced */}
              <motion.div
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12 hidden lg:block"
                variants={floatingCardVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <Card className="bg-background/95 backdrop-blur-md shadow-none border border-accent/20 hover:border-accent/30 transition-all duration-300 hover:shadow-3xl hover:shadow-accent/20 group/card">
                  <CardContent className="px-6 py-y sm:px-8 sm:py-3 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent mb-2 group-hover/card:scale-110 transition-transform duration-300"
                        
                      >
                        15+
                      </div>
                      <div className="text-muted-foreground font-medium text-xs sm:text-sm">
                        {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                      </div>
                      {/* Decorative element */}
                      <motion.div
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-accent/20 group-hover/card:bg-accent/30 transition-colors duration-300"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
