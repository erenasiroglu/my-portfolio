import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2, Send, Mail, Phone, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "next-themes";

interface ContactProps {
  isLoading: boolean;
}

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Get in Touch",
      message:
        "Let's meet! Just shoot me a dm with a direct message on LinkedIn or drop me an email. I'll get back to you as soon as possible 🙂",
      linkedin: "Message on LinkedIn",
      email: "Send an Email",
    },
    tr: {
      title: "İletişime Geçin",
      message:
        "Hadi tanışalım! LinkedIn üzerinden bana direkt mesaj atın veya bir e-posta gönderin. En kısa sürede size geri döneceğim 🙂",
      linkedin: "LinkedIn'den Mesaj Gönder",
      email: "E-posta Gönder",
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      id="contact"
      className="py-20 max-w-2xl mx-auto px-4 text-center"
    >
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        {content[language].title}
      </h2>
      <p className="mb-8 text-lg leading-relaxed">
        {content[language].message}
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/eren-nasiroglu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Linkedin className="mr-2" />
          {content[language].linkedin}
        </a>
        <a
          href="mailto:erenasiroglu1@gmail.com"
          className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <Mail className="mr-2" />
          {content[language].email}
        </a>
      </div>
    </motion.section>
  );
}
