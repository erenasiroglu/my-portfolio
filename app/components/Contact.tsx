import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

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
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      id="contact"
      className="section-padding max-w-3xl mx-auto container-padding text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 gradient-text"
      >
        {content[language].title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-16 text-lg md:text-xl leading-relaxed text-gray-300"
      >
        {content[language].message}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
      >
        <motion.a
          href="https://www.linkedin.com/in/eren-nasiroglu/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 
            bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-500 hover:to-blue-600
            text-white rounded-xl font-semibold
            shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40
            transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 icon-base" />
          {content[language].linkedin}
        </motion.a>
        <motion.a
          href="mailto:erenasiroglu1@gmail.com"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 
            bg-gradient-to-r from-purple-600 to-cyan-600 
            hover:from-purple-500 hover:to-cyan-500
            text-white rounded-xl font-semibold
            shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40
            transition-all duration-300"
        >
          <Mail className="w-5 h-5 icon-base" />
          {content[language].email}
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
