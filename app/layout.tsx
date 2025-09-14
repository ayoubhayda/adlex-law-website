import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Cairo } from "next/font/google"
import { ClientLayout } from "@/components/client-layout"
import { LocaleProvider } from "@/hooks/use-locale-context"
import "./globals.css"

const geistSans = GeistSans
const geistMono = GeistMono

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Adlex Law - Premium Legal Services | Expert Legal Consultation",
    template: "%s | Adlex Law - Professional Legal Services"
  },
  description: "Leading law firm providing expert legal consultation and representation in Arabic and English. Specializing in corporate law, civil litigation, family law, and legal advisory services. Professional, trusted, and results-driven legal solutions.",
  keywords: [
    "law firm",
    "legal services",
    "lawyer",
    "attorney",
    "legal consultation",
    "legal advice",
    "corporate law",
    "civil litigation",
    "family law",
    "legal representation",
    "Arabic legal services",
    "English legal services",
    "professional lawyer",
    "legal expert",
    "legal advisory"
  ],
  authors: [{ name: "Adlex Law Firm" }],
  creator: "Adlex Law",
  publisher: "Adlex Law",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adlex-law.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ar-SA': '/ar-SA',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adlex-law.com',
    title: 'Adlex Law - Premium Legal Services | Expert Legal Consultation',
    description: 'Leading law firm providing expert legal consultation and representation in Arabic and English. Professional, trusted, and results-driven legal solutions.',
    siteName: 'Adlex Law',
    images: [
      {
        url: '/Adlex-Law-Premium-Legal-Services-Expert-Legal-Consultation.png',
        width: 1200,
        height: 630,
        alt: 'Adlex Law - Professional Legal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adlex Law - Premium Legal Services | Expert Legal Consultation',
    description: 'Leading law firm providing expert legal consultation and representation in Arabic and English. Professional, trusted, and results-driven legal solutions.',
    images: ['/Adlex-Law-Premium-Legal-Services-Expert-Legal-Consultation.png'],
    creator: '@adlexlaw',
    site: '@adlexlaw',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Legal Services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cairo.variable}`}
      >
        <LocaleProvider>
          <ClientLayout>{children}</ClientLayout>
        </LocaleProvider>
      </body>
    </html>
  )
}
