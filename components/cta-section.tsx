"use client";

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { useState } from "react";
import { FreeConsultationModelButton } from "./free-consultation-model-button";
import { ConsultationModal } from "./consultation-modal";
import { motion } from "framer-motion";

export function CTASection() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,

      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,

      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        
      },
    },
  };

  const contactCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,

      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        
      },
    },
  };

  return (
    <section className="py-20 bg-[#060a12] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance"
            variants={itemVariants}
          >
            {locale === "ar"
              ? "هل تحتاج إلى استشارة قانونية؟"
              : "Need Legal Consultation?"}
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed text-pretty"
            variants={itemVariants}
          >
            {locale === "ar"
              ? "لا تتردد في التواصل معنا للحصول على استشارة قانونية مهنية. نحن هنا لمساعدتكم في جميع احتياجاتكم القانونية."
              : "Don't hesitate to contact us for professional legal consultation. We are here to help you with all your legal needs."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            {/* Book Free Consultation Button */}
            <motion.div variants={buttonVariants} whileHover="hover">
              <FreeConsultationModelButton onClick={openModal} />
              <ConsultationModal isOpen={isOpen} onClose={closeModal} />
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 dark:border-zinc-700 text-white hover:border-accent dark:hover:border-accent hover:text-accent bg-transparent hover:bg-transparent"
              >
                {locale === "ar" ? "اتصل بنا الآن" : "Call Us Now"}
                <Phone className="ms-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div
              className="text-center"
              variants={contactCardVariants}
              whileHover="hover"
            >
              <motion.div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20"
                whileHover="hover"
                variants={iconVariants}
              >
                <Phone className="h-8 w-8 text-accent" />
              </motion.div>
              <h3 className="font-semibold mb-2">
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
              </h3>
              <p className="text-white/80" dir="ltr">+966 50 123 4567</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={contactCardVariants}
              whileHover="hover"
            >
              <motion.div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20"
                whileHover="hover"
                variants={iconVariants}
              >
                <Mail className="h-8 w-8 text-accent" />
              </motion.div>
              <h3 className="font-semibold mb-2">
                {locale === "ar" ? "راسلنا" : "Email Us"}
              </h3>
              <p className="text-white/80">info@premiumlegal.com</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={contactCardVariants}
              whileHover="hover"
            >
              <motion.div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20"
                whileHover="hover"
                variants={iconVariants}
              >
                <MessageCircle className="h-8 w-8 text-accent" />
              </motion.div>
              <h3 className="font-semibold mb-2">
                {locale === "ar" ? "واتساب" : "WhatsApp"}
              </h3>
              <p className="text-white/80">
                {locale === "ar" ? "متاح 24/7" : "Available 24/7"}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
