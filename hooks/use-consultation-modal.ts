"use client"

import { useState, useEffect } from "react"

export function useConsultationModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("consultation-modal-seen")

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 10000) // 10 seconds delay

      return () => clearTimeout(timer)
    }
  }, [])

  const openModal = () => setIsOpen(true)

  const closeModal = () => {
    setIsOpen(false)
    localStorage.setItem("consultation-modal-seen", "true")
  }

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
