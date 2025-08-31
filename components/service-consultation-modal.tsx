"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLocale } from "@/hooks/use-locale"
import { MessageCircle, Phone, Mail, Calendar, CheckCircle, X } from "lucide-react"

interface ServiceConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
}

export function ServiceConsultationModal({ isOpen, onClose, serviceName }: ServiceConsultationModalProps) {
  const { locale } = useLocale()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    urgency: "",
    caseDescription: "",
    hasDocuments: false,
    agreedToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Service consultation form submitted:", { ...formData, service: serviceName })
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "",
        urgency: "",
        caseDescription: "",
        hasDocuments: false,
        agreedToTerms: false,
      })
      onClose()
    }, 3000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {locale === "ar" ? "تم إرسال طلبكم بنجاح!" : "Request Submitted Successfully!"}
            </h3>
            <p className="text-muted-foreground text-sm">
              {locale === "ar"
                ? "سنتواصل معكم خلال 24 ساعة لتحديد موعد الاستشارة"
                : "We will contact you within 24 hours to schedule your consultation"}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-accent" />
            {locale === "ar" ? "طلب استشارة قانونية" : "Legal Consultation Request"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            {locale === "ar" ? "الخدمة: " : "Service: "}
            <span className="font-medium text-accent">{serviceName}</span>
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">
              {locale === "ar" ? "المعلومات الشخصية" : "Personal Information"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{locale === "ar" ? "الاسم الكامل" : "Full Name"} *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder={locale === "ar" ? "أدخل اسمكم الكامل" : "Enter your full name"}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{locale === "ar" ? "البريد الإلكتروني" : "Email Address"} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={locale === "ar" ? "أدخل بريدكم الإلكتروني" : "Enter your email address"}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{locale === "ar" ? "رقم الهاتف" : "Phone Number"} *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder={locale === "ar" ? "أدخل رقم هاتفكم" : "Enter your phone number"}
                required
              />
            </div>
          </div>

          {/* Consultation Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">
              {locale === "ar" ? "تفضيلات الاستشارة" : "Consultation Preferences"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{locale === "ar" ? "طريقة التواصل المفضلة" : "Preferred Contact Method"}</Label>
                <Select
                  value={formData.preferredContact}
                  onValueChange={(value) => handleInputChange("preferredContact", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={locale === "ar" ? "اختر طريقة التواصل" : "Select contact method"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {locale === "ar" ? "مكالمة هاتفية" : "Phone Call"}
                      </div>
                    </SelectItem>
                    <SelectItem value="email">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {locale === "ar" ? "بريد إلكتروني" : "Email"}
                      </div>
                    </SelectItem>
                    <SelectItem value="whatsapp">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        {locale === "ar" ? "واتساب" : "WhatsApp"}
                      </div>
                    </SelectItem>
                    <SelectItem value="office">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {locale === "ar" ? "زيارة المكتب" : "Office Visit"}
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{locale === "ar" ? "مستوى الأولوية" : "Urgency Level"}</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={locale === "ar" ? "اختر مستوى الأولوية" : "Select urgency level"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">
                      {locale === "ar" ? "عادي - خلال أسبوع" : "Normal - Within a week"}
                    </SelectItem>
                    <SelectItem value="medium">
                      {locale === "ar" ? "متوسط - خلال 3 أيام" : "Medium - Within 3 days"}
                    </SelectItem>
                    <SelectItem value="high">
                      {locale === "ar" ? "عاجل - خلال 24 ساعة" : "Urgent - Within 24 hours"}
                    </SelectItem>
                    <SelectItem value="critical">{locale === "ar" ? "طارئ - فوري" : "Critical - Immediate"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Case Description */}
          <div className="space-y-2">
            <Label htmlFor="caseDescription">
              {locale === "ar" ? "وصف القضية أو الاستشارة المطلوبة" : "Case Description or Required Consultation"} *
            </Label>
            <Textarea
              id="caseDescription"
              value={formData.caseDescription}
              onChange={(e) => handleInputChange("caseDescription", e.target.value)}
              placeholder={
                locale === "ar"
                  ? "يرجى وصف قضيتكم أو الاستشارة المطلوبة بالتفصيل..."
                  : "Please describe your case or required consultation in detail..."
              }
              rows={4}
              required
            />
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Checkbox
                id="hasDocuments"
                checked={formData.hasDocuments}
                onCheckedChange={(checked) => handleInputChange("hasDocuments", checked as boolean)}
              />
              <Label htmlFor="hasDocuments" className="text-sm">
                {locale === "ar"
                  ? "لدي وثائق أو مستندات متعلقة بالقضية"
                  : "I have documents or papers related to the case"}
              </Label>
            </div>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Checkbox
                id="agreedToTerms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                required
              />
              <Label htmlFor="agreedToTerms" className="text-sm">
                {locale === "ar"
                  ? "أوافق على شروط الخدمة وسياسة الخصوصية"
                  : "I agree to the terms of service and privacy policy"}{" "}
                *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={!formData.agreedToTerms}
            >
              {locale === "ar" ? "إرسال طلب الاستشارة" : "Submit Consultation Request"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="px-6 bg-transparent">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
