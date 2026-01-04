"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const LOGO_DEV_API_KEY = "pk_UyYWwXM-S6C2oYw5bSHYIA";

  const content = {
    en: {
      rights: "All rights reserved.",
      freelance: "Freelance",
      blog: "Read my Blog",
    },
    tr: {
      rights: "Tüm hakları saklıdır.",
      freelance: "Freelance",
      blog: "Blogumu Oku",
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 md:py-12 mt-20 md:mt-24 border-t border-gray-800/50"
    >
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center gap-6 mb-6">
          <div className="flex items-center gap-6">
            <Link
              href="https://www.upwork.com/freelancers/~0108da942cb94bb82f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors group"
            >
              <Image
                src={`https://img.logo.dev/name/Upwork?token=pk_Si0cU7DFQ9uc-ejKA0ZqQA&retina=true`}
                alt="Upwork"
                width={24}
                height={24}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
                unoptimized
              />
              <span className="text-sm font-medium">{content[language].freelance}</span>
            </Link>
            <Link
              href="https://medium.com/@erenasiroglu1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors group"
            >
              <Image
                src={`https://img.logo.dev/name/Medium?token=pk_Si0cU7DFQ9uc-ejKA0ZqQA&retina=true`}
                alt="Medium"
                width={24}
                height={24}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
                unoptimized
              />
              <span className="text-sm font-medium">{content[language].blog}</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-400">
            &copy; {currentYear} Eren Nasıroğlu. {content[language].rights}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
