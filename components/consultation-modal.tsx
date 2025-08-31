"use client"

import type React from "react"

import { useState } from "react"
import { X, Phone, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/hooks/use-locale"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { locale, t } = useLocale()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    legalIssue: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("[v0] Consultation form submitted:", formData)
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", legalIssue: "", message: "" })
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  const translations = {
    en: {
      title: "Get Your Free Consultation Today",
      subtitle: "Expert legal advice tailored to your needs",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      legalIssue: "Legal Issue Type",
      message: "Describe Your Legal Matter",
      submit: "Schedule Consultation",
      close: "Close",
      benefits: ["Free 30-minute consultation", "Expert legal guidance", "Confidential discussion"],
    },
    ar: {
      title: "احصل على استشارتك المجانية اليوم",
      subtitle: "مشورة قانونية خبيرة مصممة لاحتياجاتك",
      name: "الاسم الكامل",
      email: "عنوان البريد الإلكتروني",
      phone: "رقم الهاتف",
      legalIssue: "نوع القضية القانونية",
      message: "اوصف مسألتك القانونية",
      submit: "جدولة الاستشارة",
      close: "إغلاق",
      benefits: ["استشارة مجانية لمدة 30 دقيقة", "إرشاد قانوني خبير", "مناقشة سرية"],
    },
  }

  const text = translations[locale]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">{text.close}</span>
        </Button>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-primary text-primary-foreground p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">{text.title}</h3>
              </div>
              <p className="text-primary-foreground/80">{text.subtitle}</p>

              <div className="space-y-4">
                {text.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{text.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="border-border focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{text.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-border focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{text.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="border-border focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="legalIssue">{text.legalIssue}</Label>
                  <Input
                    id="legalIssue"
                    value={formData.legalIssue}
                    onChange={(e) => handleInputChange("legalIssue", e.target.value)}
                    placeholder="Family Law, Business Law, etc."
                    className="border-border focus:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{text.message}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="border-border focus:ring-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {text.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
