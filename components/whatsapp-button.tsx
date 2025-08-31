"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "+966501234567" // Replace with actual WhatsApp number
  const message = "Hello, I would like to inquire about legal consultation."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact via WhatsApp</span>
    </Button>
  )
}
