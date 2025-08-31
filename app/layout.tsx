import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Cairo } from "next/font/google"
import { ClientLayout } from "@/components/client-layout"
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
  title: "Premium Legal Services | Professional Lawyer",
  description: "Expert legal consultation and representation. Trusted legal guidance in Arabic and English.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cairo.variable}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
