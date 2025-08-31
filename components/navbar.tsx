"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Scale, Phone } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import darkLogo from "@/assets/logos/dark-logo-icon.png";
import lightLogo from "@/assets/logos/light-logo-icon.png";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              {/* Elegant Law Firm Icon */}
              <div className="relative me-3">
                <div className="w-11 h-11 bg-black dark:bg-white rounded-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="w-8 h-8 flex flex-col items-center justify-center">
                    <Image
                      src={lightLogo}
                      alt="light-logo"
                      width={32}
                      height={32}
                      className="dark:hidden size-8"
                    />
                    <Image
                      src={darkLogo}
                      alt="dark-logo"
                      width={32}
                      height={32}
                      className="hidden dark:block size-8"
                    />
                  </div>
                </div>
              </div>

              {locale === "ar" ? (
                <div className="flex flex-col mt-1">
                  <span className="text-2xl font-bold text-foreground tracking-tight leading-none font-serif">
                    أديـ<span className="text-accent">كـس</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] mt-1 uppercase">
                    استشارات قانونية
                  </span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span
                    className="text-2xl font-bold text-foreground tracking-widest leading-none uppercase"
                    style={{ fontFamily: "Orbitron, monospace" }}
                  >
                    ADL<span className="text-accent">EX</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] mt-1 uppercase">
                    Legal Counsel
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6 rtl:space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActiveRoute(item.href)
                      ? "text-accent font-semibold"
                      : "text-foreground/70 hover:text-foreground"
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
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              {getTranslation(locale, "getConsultation")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent/10 p-2"
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
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-medium py-3 transition-all duration-200">
                  <Phone className="w-4 h-4 mr-2" />
                  {getTranslation(locale, "getConsultation")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
