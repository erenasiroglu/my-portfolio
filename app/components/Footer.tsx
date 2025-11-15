import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      rights: "All rights reserved.",
    },
    tr: {
      rights: "Tüm hakları saklıdır.",
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 md:py-12 mt-20 md:mt-24 border-t border-gray-800/50"
    >
      <div className="container mx-auto container-padding text-center">
        <p className="text-sm md:text-base text-gray-400">
          &copy; {currentYear} Eren Nasıroğlu. {content[language].rights}
        </p>
      </div>
    </motion.footer>
  );
}
