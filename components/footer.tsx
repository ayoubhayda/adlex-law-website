"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useLocale } from "@/hooks/use-locale-context"
import { getTranslation } from "@/lib/i18n"
import Image from "next/image"
import darkLogo from "@/assets/logos/dark-logo-icon.png"
import lightLogo from "@/assets/logos/light-logo-icon.png"

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
    <footer className="bg-[#060a12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left md:rtl:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 rtl:space-x-reverse mb-4 md:mb-6">
              {/* Elegant Logo Container */}
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow-lg">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <Image
                      src={darkLogo}
                      alt="Adlex Logo"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Name */}
              {locale === "ar" ? (
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight leading-none font-serif">
                    أديـ<span className="text-accent">كـس</span>
                  </span>
                  <span className="text-[10px] text-white/60 font-medium tracking-[0.2em] mt-1 uppercase">
                    استشارات قانونية
                  </span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span
                    className="text-xl font-bold text-white tracking-widest leading-none uppercase"
                    style={{ fontFamily: "Orbitron, monospace" }}
                  >
                    ADL<span className="text-accent">EX</span>
                  </span>
                  <span className="text-[10px] text-white/60 font-medium tracking-[0.2em] mt-1 uppercase">
                    Legal Counsel
                  </span>
                </div>
              )}
            </div>
            <p className="text-white/80 mb-4 md:mb-6 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
              {locale === "ar"
                ? "نقدم خدمات قانونية متميزة بخبرة واسعة ونزاهة مهنية عالية. نحن هنا لحماية حقوقكم وتقديم أفضل الاستشارات القانونية."
                : "We provide exceptional legal services with extensive experience and high professional integrity. We are here to protect your rights and provide the best legal consultation."}
            </p>

            {/* Contact Info - Hidden on mobile for minimal design */}
            <div className="hidden md:block space-y-2">
              <div className="flex items-center gap-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@premiumlegal.com</span>
              </div>
              <div className="flex items-center gap-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">
                  {locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links - Hidden on mobile for minimal design */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">{locale === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links & Social - Hidden on mobile for minimal design */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">{locale === "ar" ? "قانوني" : "Legal"}</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3">{locale === "ar" ? "تابعنا" : "Follow Us"}</h4>
              <div className="flex gap-4 rtl:space-x-reverse">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile-only Social Media - Centered */}
          <div className="md:hidden text-center">
            <h4 className="text-sm font-semibold mb-4">{locale === "ar" ? "تابعنا" : "Follow Us"}</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-zinc-700 text-white/20">
          <p className="text-center text-white/60 text-xs md:text-sm">
            © {currentYear} {locale === "ar" ? "أديـكس" : "ADLEX"}.{" "}
            {getTranslation(locale, "copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
