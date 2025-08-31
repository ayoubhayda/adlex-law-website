"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"

interface ConsultationTriggerButtonProps {
  onClick: () => void
}

export function ConsultationTriggerButton({ onClick }: ConsultationTriggerButtonProps) {
  const { locale } = useLocale()

  const text = {
    en: "Free Consultation",
    ar: "استشارة مجانية",
  }

  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-40 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
      size="lg"
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      {text[locale]}
    </Button>
  )
}
