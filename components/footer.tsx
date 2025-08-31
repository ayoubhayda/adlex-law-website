"use client"

import Link from "next/link"
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function Footer() {
  const { locale } = useLocale()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: getTranslation(locale, "home"), href: "/" },
    { name: getTranslation(locale, "about"), href: "/about" },
    { name: getTranslation(locale, "services"), href: "/services" },
    { name: getTranslation(locale, "contact"), href: "/contact" },
  ]

  const legalLinks = [
    { name: getTranslation(locale, "privacyPolicy"), href: "/privacy" },
    { name: getTranslation(locale, "termsOfService"), href: "/terms" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Scale className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold font-serif">
                {locale === "ar" ? "المحامي المتميز" : "Premium Legal"}
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              {locale === "ar"
                ? "نقدم خدمات قانونية متميزة بخبرة واسعة ونزاهة مهنية عالية. نحن هنا لحماية حقوقكم وتقديم أفضل الاستشارات القانونية."
                : "We provide exceptional legal services with extensive experience and high professional integrity. We are here to protect your rights and provide the best legal consultation."}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@premiumlegal.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">
                  {locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{locale === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{locale === "ar" ? "قانوني" : "Legal"}</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3">{locale === "ar" ? "تابعنا" : "Follow Us"}</h4>
              <div className="flex space-x-3 rtl:space-x-reverse">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {currentYear} {locale === "ar" ? "المحامي المتميز" : "Premium Legal"}.{" "}
            {getTranslation(locale, "copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
