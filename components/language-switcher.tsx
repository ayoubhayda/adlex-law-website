"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import type { Locale } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { locale, switchLocale } = useLocale()

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "ar" : "en"
    switchLocale(newLocale)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-foreground hover:text-accent hover:bg-accent/10"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{locale === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
