"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

interface Testimonial {
  id: number
  name: string
  nameAr: string
  role: string
  roleAr: string
  content: string
  contentAr: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    role: "Business Owner",
    roleAr: "صاحب شركة",
    content: "Exceptional legal service with great attention to detail. Highly professional and trustworthy.",
    contentAr: "خدمة قانونية استثنائية مع اهتمام كبير بالتفاصيل. مهني جداً وجدير بالثقة.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    role: "Real Estate Investor",
    roleAr: "مستثمرة عقارية",
    content: "Outstanding expertise in real estate law. Made the complex process simple and stress-free.",
    contentAr: "خبرة متميزة في قانون العقارات. جعل العملية المعقدة بسيطة وخالية من التوتر.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Al-Fahad",
    nameAr: "محمد الفهد",
    role: "Family Client",
    roleAr: "عميل أسري",
    content: "Compassionate and skilled representation during a difficult time. Truly grateful for the support.",
    contentAr: "تمثيل رحيم وماهر خلال وقت صعب. ممتن حقاً للدعم المقدم.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { locale } = useLocale()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-card border-border">
        <CardContent className="p-8 text-center">
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-current" />
            ))}
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">
            "{locale === "ar" ? currentTestimonial.contentAr : currentTestimonial.content}"
          </blockquote>

          {/* Author */}
          <div className="text-center">
            <p className="font-semibold text-foreground">
              {locale === "ar" ? currentTestimonial.nameAr : currentTestimonial.name}
            </p>
            <p className="text-muted-foreground text-sm">
              {locale === "ar" ? currentTestimonial.roleAr : currentTestimonial.role}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-accent" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
