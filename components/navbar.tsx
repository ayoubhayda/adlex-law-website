"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Scale, Phone } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import darkLogo from "@/assets/logos/dark-logo-icon.png";
import lightLogo from "@/assets/logos/light-logo-icon.png";
import Image from "next/image";
import { ServiceConsultationModal } from "./service-consultation-modal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: getTranslation(locale, "home"), href: "/" },
    { name: getTranslation(locale, "about"), href: "/about" },
    { name: getTranslation(locale, "services"), href: "/services" },
    { name: getTranslation(locale, "blog"), href: "/blog" },
    { name: getTranslation(locale, "contact"), href: "/contact" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-18 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                {/* Elegant Law Firm Icon */}
                <div className="relative me-2 lg:me-3">
                  <div className="w-9 h-9 lg:w-11 lg:h-11 bg-black dark:bg-white rounded-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 flex flex-col items-center justify-center">
                      <Image
                        src={lightLogo}
                        alt="light-logo"
                        width={24}
                        height={24}
                        className="dark:hidden w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <Image
                        src={darkLogo}
                        alt="dark-logo"
                        width={24}
                        height={24}
                        className="hidden dark:block w-6 h-6 lg:w-8 lg:h-8"
                      />
                    </div>
                  </div>
                </div>

                {locale === "ar" ? (
                  <div className="hidden sm:flex flex-col mt-1">
                    <span className="text-xl lg:text-2xl font-bold text-foreground tracking-tight leading-none font-serif">
                      أديـ<span className="text-accent">كـس</span>
                    </span>
                    <span className="text-[9px] lg:text-[10px] text-muted-foreground font-medium tracking-[0.2em] mt-1 uppercase">
                      استشارات قانونية
                    </span>
                  </div>
                ) : (
                  <div className="hidden sm:flex flex-col">
                    <span
                      className="text-xl lg:text-2xl font-bold text-foreground tracking-widest leading-none uppercase"
                      style={{ fontFamily: "Orbitron, monospace" }}
                    >
                      AD<span className="text-accent">EX</span>
                    </span>
                    <span className="text-[9px] lg:text-[10px] text-muted-foreground font-medium tracking-[0.2em] mt-1 uppercase">
                      Legal Counsel
                    </span>
                  </div>
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-8 flex items-center space-x-5 rtl:space-x-reverse">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors duration-200",
                      isActiveRoute(item.href)
                        ? "text-accent font-semibold"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 rtl:space-x-reverse">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="h-6 w-px bg-border"></div>
              <Button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-accent text-white hover:bg-accent/90 shadow-none font-medium transition-all duration-200 cursor-pointer"
              >
                {getTranslation(locale, "getConsultation")}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2 rtl:space-x-reverse">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent border-border/50 dark:border-zinc-700 hover:border-accent/50 hover:bg-accent/5 dark:hover:bg-accent/20 dark:hover:text-white dark:hover:border-accent/30 cursor-pointer transition-all duration-200 shadow-none"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-border/40 bg-background/50 backdrop-blur-sm">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-md",
                      isActiveRoute(item.href)
                        ? "text-accent font-semibold bg-accent/5"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-2">
                  <Button
                    onClick={() => setIsConsultationOpen(true)}
                    size="lg"
                    className="w-full bg-accent text-white hover:bg-accent/90 shadow-sm font-medium py-3 transition-all duration-200 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {getTranslation(locale, "getConsultation")}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />
    </>
  );
}
