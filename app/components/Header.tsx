"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function Header() {
  const { language } = useLanguage();

  const content = {
    en: {
      certificates: "Certificates",
      freelance: "Available for Freelance",
      blog: "Read my Blog",
    },
    tr: {
      certificates: "Sertifikalar",
      freelance: "Freelance İşlere Açığım",
      blog: "Blogumu Oku",
    },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/90 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="https://www.linkedin.com/in/eren-nasiroglu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-colors"
          >
            <Image
              src="/erenasiroglu.png"
              alt="Eren Nasıroğlu"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </motion.div>
        </Link>

        <div className="flex items-center space-x-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/certificates"
                  className="p-2 rounded-full hover:bg-gray-800/50 text-gray-300 transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{content[language].certificates}</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.upwork.com/freelancers/~0108da942cb94bb82f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800/50 text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295s5.281-2.378 5.281-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.688 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{content[language].freelance}</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://medium.com/@erenasiroglu1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800/50 text-gray-300 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{content[language].blog}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.header>
  );
}
