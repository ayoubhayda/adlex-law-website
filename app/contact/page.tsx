"use client";

import type React from "react";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BookingModal } from "@/components/booking-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Building,
  Calendar,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: locale === "ar" ? "الهاتف" : "Phone",
      value: "+966 50 123 4567",
      description:
        locale === "ar"
          ? "متاح من 9 صباحاً إلى 6 مساءً"
          : "Available 9 AM to 6 PM",
    },
    {
      icon: MessageCircle,
      title: locale === "ar" ? "واتساب" : "WhatsApp",
      value: "+966 50 123 4567",
      description:
        locale === "ar"
          ? "متاح 24/7 للاستفسارات العاجلة"
          : "Available 24/7 for urgent inquiries",
    },
    {
      icon: Mail,
      title: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: "info@premiumlegal.com",
      description:
        locale === "ar" ? "سنرد خلال 24 ساعة" : "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: locale === "ar" ? "العنوان" : "Address",
      value:
        locale === "ar"
          ? "الرياض، المملكة العربية السعودية"
          : "Riyadh, Saudi Arabia",
      description:
        locale === "ar"
          ? "شارع الملك فهد، حي العليا، الرياض 12211"
          : "King Fahd Road, Al Olaya District, Riyadh 12211",
    },
  ];

  const officeHours = [
    {
      day: locale === "ar" ? "الأحد - الخميس" : "Sunday - Thursday",
      hours: locale === "ar" ? "9:00 ص - 6:00 م" : "9:00 AM - 6:00 PM",
    },
    {
      day: locale === "ar" ? "الجمعة" : "Friday",
      hours: locale === "ar" ? "مغلق" : "Closed",
    },
    {
      day: locale === "ar" ? "السبت" : "Saturday",
      hours: locale === "ar" ? "10:00 ص - 2:00 م" : "10:00 AM - 2:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 text-white overflow-hidden">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="/elegant-law-office-banner.webp"
              alt="Professional Legal Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 font-serif text-balance drop-shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {getTranslation(locale, "contactTitle")}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-md px-2 md:px-0"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {locale === "ar"
                  ? "نحن هنا لمساعدتكم. تواصلوا معنا للحصول على استشارة قانونية مهنية"
                  : "We are here to help you. Contact us for professional legal consultation"}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-10 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: locale === "ar" ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="mb-4 md:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4 font-serif">
                    {locale === "ar" ? "تواصل معنا" : "Get in Touch"}
                  </h2>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {locale === "ar"
                      ? "نحن نقدر تواصلكم معنا ونتطلع لمساعدتكم في احتياجاتكم القانونية"
                      : "We value your communication and look forward to helping you with your legal needs"}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="border-border/50 shadow-sm bg-card/50 backdrop-blur-sm">
                    <CardContent className="px-4 md:px-8 py-4">
                      {isSubmitted ? (
                        <motion.div
                          className="text-center py-12"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-green-500/10 rounded-full animate-pulse" />
                            </div>
                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6 relative z-10" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">
                            {locale === "ar"
                              ? "تم إرسال الرسالة بنجاح!"
                              : "Message Sent Successfully!"}
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            {locale === "ar"
                              ? "شكراً لتواصلكم معنا. سنرد عليكم قريباً."
                              : "Thank you for contacting us. We'll get back to you soon."}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          onSubmit={handleSubmit}
                          className="space-y-8"
                          variants={staggerContainer}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            variants={fadeInUp}
                          >
                            <div className="flex flex-col gap-3">
                              <Label
                                htmlFor="name"
                                className="text-sm font-semibold text-foreground"
                              >
                                {getTranslation(locale, "name")}
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={
                                  locale === "ar"
                                    ? "اسمك الكامل"
                                    : "Your full name"
                                }
                                className="h-12 border-border/60 focus:border-accent transition-colors duration-200"
                              />
                            </div>
                            <div className="flex flex-col gap-3">
                              <Label
                                htmlFor="phone"
                                className="text-sm font-semibold text-foreground"
                              >
                                {getTranslation(locale, "phone")}
                              </Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={
                                  locale === "ar"
                                    ? "رقم الهاتف"
                                    : "Phone number"
                                }
                                className="h-12 border-border/60 focus:border-accent transition-colors duration-200"
                                dir="ltr"
                                style={{
                                  textAlign: locale === "ar" ? "right" : "left",
                                }}
                              />
                            </div>
                          </motion.div>

                          <motion.div
                            className="flex flex-col gap-3"
                            variants={fadeInUp}
                          >
                            <Label
                              htmlFor="email"
                              className="text-sm font-semibold text-foreground"
                            >
                              {getTranslation(locale, "email")}
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "بريدك الإلكتروني"
                                  : "Your email address"
                              }
                              className="h-12 border-border/60 focus:border-accent transition-colors duration-200"
                            />
                          </motion.div>

                          <motion.div
                            className="flex flex-col gap-3"
                            variants={fadeInUp}
                          >
                            <Label
                              htmlFor="subject"
                              className="text-sm font-semibold text-foreground"
                            >
                              {locale === "ar" ? "موضوع الرسالة" : "Subject"}
                            </Label>
                            <Input
                              id="subject"
                              name="subject"
                              type="text"
                              required
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "موضوع استفسارك"
                                  : "Subject of your inquiry"
                              }
                              className="h-12 border-border/60 focus:border-accent transition-colors duration-200"
                            />
                          </motion.div>

                          <motion.div
                            className="flex flex-col gap-3"
                            variants={fadeInUp}
                          >
                            <Label
                              htmlFor="message"
                              className="text-sm font-semibold text-foreground"
                            >
                              {getTranslation(locale, "message")}
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              rows={6}
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder={
                                locale === "ar"
                                  ? "اكتب رسالتك هنا... يرجى تقديم تفاصيل كافية عن استفسارك القانوني"
                                  : "Write your message here... Please provide sufficient details about your legal inquiry"
                              }
                              className="border-border/60 focus:border-accent transition-colors duration-200 resize-none"
                            />
                          </motion.div>

                          <motion.div variants={fadeInUp}>
                            <Button
                              type="submit"
                              size="lg"
                              disabled={isSubmitting}
                              className="w-full bg-accent text-white hover:bg-accent/90 transition-all duration-200 shadow-none cursor-pointer"
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                                  {locale === "ar"
                                    ? "جاري الإرسال..."
                                    : "Sending..."}
                                </>
                              ) : (
                                <>
                                  {getTranslation(locale, "sendMessage")}
                                  <Send className="ml-3 h-5 w-5" />
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </motion.form>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Map Section - Compact */}
                <motion.div
                  className="mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="border-border/50 shadow-sm bg-card/50">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 md:gap-3 text-foreground text-base md:text-xl font-serif">
                        <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                        </div>
                        {locale === "ar" ? "موقع المكتب" : "Office Location"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted/10">
                        <div className="aspect-[16/9] bg-muted/10 flex items-center justify-center p-6 relative">
                          <div className="text-center relative z-10">
                            <div className="relative mb-4">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-full animate-pulse" />
                              </div>
                              <Building className="h-12 w-12 text-accent mx-auto relative z-10" />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {locale === "ar"
                                ? "خريطة تفاعلية"
                                : "Interactive Map"}
                            </h4>
                            <div className="space-y-1 mb-4">
                              <p className="text-sm text-muted-foreground font-medium">
                                {locale === "ar"
                                  ? "شارع الملك فهد، حي العليا"
                                  : "King Fahd Road, Al Olaya District"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {locale === "ar"
                                  ? "الرياض 12211، المملكة العربية السعودية"
                                  : "Riyadh 12211, Saudi Arabia"}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-accent/40 text-accent hover:bg-accent hover:text-white bg-transparent font-medium"
                            >
                              <MapPin className="mr-2 h-3 w-3" />
                              {locale === "ar"
                                ? "عرض على الخريطة"
                                : "View on Map"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-4 md:space-y-8"
                initial={{ opacity: 0, x: locale === "ar" ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Contact Details */}
                <div>
                  <motion.h3
                    className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-8 font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {locale === "ar"
                      ? "معلومات التواصل"
                      : "Contact Information"}
                  </motion.h3>
                  <motion.div
                    className="space-y-4 md:space-y-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        variants={fadeInUp}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start gap-3 md:gap-5 p-4 md:p-6 rounded-xl border border-border/40 bg-card/30 hover:bg-card/60 hover:border-accent/30 transition-all duration-300">
                          <motion.div
                            className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl bg-accent/5 group-hover:bg-accent/10 border border-accent/10 group-hover:border-accent/20 transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <info.icon className="h-5 w-5 md:h-7 md:w-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-base md:text-lg">
                              {info.title}
                            </h4>
                            <p
                              className="text-foreground font-medium mb-1 md:mb-2 text-sm md:text-base"
                              dir="ltr"
                              style={{
                                textAlign: locale === "ar" ? "right" : "left",
                              }}
                            >
                              {info.value}
                            </p>
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="border-border/50 shadow-sm bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-foreground text-xl font-serif">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                          <Clock className="h-5 w-5 text-accent" />
                        </div>
                        {locale === "ar" ? "ساعات العمل" : "Office Hours"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {officeHours.map((schedule, index) => (
                          <motion.div
                            key={index}
                            className="flex justify-between items-center py-3 px-4 rounded-lg bg-muted/20 border border-border/30 hover:bg-muted/30 transition-colors duration-200"
                            variants={scaleIn}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-foreground font-semibold text-sm">
                              {schedule.day}
                            </span>
                            <span
                              className={`font-medium text-sm ${
                                schedule.hours === "مغلق" ||
                                schedule.hours === "Closed"
                                  ? "text-red-500"
                                  : "text-accent"
                              }`}
                            >
                              {schedule.hours}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="border-accent/30 bg-gradient-to-br from-accent/2 to-accent/5 shadow-none">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-foreground text-xl font-serif">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 border border-accent/30">
                          <Calendar className="h-5 w-5 text-accent" />
                        </div>
                        {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base">
                        {locale === "ar"
                          ? "احصل على استشارة قانونية مجانية لمدة 30 دقيقة"
                          : "Get a free 30-minute legal consultation"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {/* Book Appointment Button */}
                        <motion.div variants={scaleIn}>
                          <Button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold transition-all duration-200 shadow-none cursor-pointer"
                          >
                            <Calendar className="mr-3 h-5 w-5" />
                            {locale === "ar" ? "احجز موعد" : "Book Appointment"}
                          </Button>
                        </motion.div>
                        <motion.div variants={scaleIn}>
                          <Button
                            variant="outline"
                            className="w-full h-12 border-green-500/40 dark:border-green-500/40 da text-green-500 hover:bg-accent hover:border-accent hover:text-white bg-transparent font-semibold transition-all duration-200 shadow-none cursor-pointer"
                          >
                            <MessageCircle className="mr-3 h-5 w-5" />
                            {locale === "ar"
                              ? "تواصل عبر واتساب"
                              : "Contact via WhatsApp"}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
