"use client"

import { useState, useEffect } from "react"
import type { Locale } from "@/lib/i18n"
import { defaultLocale } from "@/lib/i18n"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
      setLocale(savedLocale)
      document.documentElement.setAttribute("dir", savedLocale === "ar" ? "rtl" : "ltr")
      document.documentElement.setAttribute("lang", savedLocale)
    }
  }, [])

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.setAttribute("dir", newLocale === "ar" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", newLocale)
  }

  return { locale, switchLocale }
}
