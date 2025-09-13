"use client"

import { ArrowLeftIcon, ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale-context"

interface FreeConsultationModelButtonProps {
  onClick: () => void
}

export function FreeConsultationModelButton({ onClick }: FreeConsultationModelButtonProps) {
  const { locale } = useLocale()

  return (
    <Button
      onClick={onClick}
      className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-4 cursor-pointer"
      size="lg"
    >
     {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
     <ArrowLeftIcon className="ml-2 h-5 w-5" />
    </Button>
  )
}
