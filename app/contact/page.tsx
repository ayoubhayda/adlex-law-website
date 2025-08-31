"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Building, Calendar } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function ContactPage() {
  const { locale } = useLocale()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: locale === "ar" ? "الهاتف" : "Phone",
      value: "+966 50 123 4567",
      description: locale === "ar" ? "متاح من 9 صباحاً إلى 6 مساءً" : "Available 9 AM to 6 PM",
    },
    {
      icon: MessageCircle,
      title: locale === "ar" ? "واتساب" : "WhatsApp",
      value: "+966 50 123 4567",
      description: locale === "ar" ? "متاح 24/7 للاستفسارات العاجلة" : "Available 24/7 for urgent inquiries",
    },
    {
      icon: Mail,
      title: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: "info@premiumlegal.com",
      description: locale === "ar" ? "سنرد خلال 24 ساعة" : "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: locale === "ar" ? "العنوان" : "Address",
      value: locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      description:
        locale === "ar" ? "شارع الملك فهد، حي العليا، الرياض 12211" : "King Fahd Road, Al Olaya District, Riyadh 12211",
    },
  ]

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
                {getTranslation(locale, "contactTitle")}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "نحن هنا لمساعدتكم. تواصلوا معنا للحصول على استشارة قانونية مهنية"
                  : "We are here to help you. Contact us for professional legal consultation"}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground font-serif">
                      {locale === "ar" ? "أرسل لنا رسالة" : "Send us a Message"}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {locale === "ar"
                        ? "املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن"
                        : "Fill out the form below and we'll get back to you as soon as possible"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {locale === "ar" ? "تم إرسال الرسالة بنجاح!" : "Message Sent Successfully!"}
                        </h3>
                        <p className="text-muted-foreground">
                          {locale === "ar"
                            ? "شكراً لتواصلكم معنا. سنرد عليكم قريباً."
                            : "Thank you for contacting us. We'll get back to you soon."}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">{getTranslation(locale, "name")}</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={locale === "ar" ? "اسمك الكامل" : "Your full name"}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">{getTranslation(locale, "phone")}</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder={locale === "ar" ? "رقم الهاتف" : "Phone number"}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">{getTranslation(locale, "email")}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={locale === "ar" ? "بريدك الإلكتروني" : "Your email address"}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">{locale === "ar" ? "موضوع الرسالة" : "Subject"}</Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder={locale === "ar" ? "موضوع استفسارك" : "Subject of your inquiry"}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">{getTranslation(locale, "message")}</Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={
                              locale === "ar"
                                ? "اكتب رسالتك هنا... يرجى تقديم تفاصيل كافية عن استفسارك القانوني"
                                : "Write your message here... Please provide sufficient details about your legal inquiry"
                            }
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2" />
                              {locale === "ar" ? "جاري الإرسال..." : "Sending..."}
                            </>
                          ) : (
                            <>
                              {getTranslation(locale, "sendMessage")}
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                    {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium mb-1">{info.value}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Clock className="h-5 w-5 text-accent" />
                      {locale === "ar" ? "ساعات العمل" : "Office Hours"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-5 w-5 text-accent" />
                      {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
                    </CardTitle>
                    <CardDescription>
                      {locale === "ar"
                        ? "احصل على استشارة قانونية مجانية لمدة 30 دقيقة"
                        : "Get a free 30-minute legal consultation"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Calendar className="mr-2 h-4 w-4" />
                        {locale === "ar" ? "احجز موعد" : "Book Appointment"}
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {locale === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                {locale === "ar" ? "موقعنا" : "Our Location"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "يقع مكتبنا في موقع مميز في قلب الرياض لسهولة الوصول إليه"
                  : "Our office is located in a prime location in the heart of Riyadh for easy access"}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {locale === "ar" ? "خريطة تفاعلية - موقع المكتب" : "Interactive Map - Office Location"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {locale === "ar"
                      ? "شارع الملك فهد، حي العليا، الرياض 12211"
                      : "King Fahd Road, Al Olaya District, Riyadh 12211"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
