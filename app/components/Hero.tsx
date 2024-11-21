"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useTheme } from "next-themes";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HeroProps {
  isLoading: boolean;
}

export default function Hero({ isLoading }: HeroProps) {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      role: "Frontend Developer",
      cta: "Discover my 2024 GitHub activity",
      upwork: "Available for Freelance",
      medium: "Read my blog on Medium",
    },
    tr: {
      role: "Frontend Geliştirici",
      cta: "2024 GitHub aktivitemi keşfedin",
      upwork: "Freelance İşlere Açığım",
      medium: "Medium'da Yazılarım",
    },
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-center md:justify-end md:absolute md:top-4 md:right-4 z-10 gap-3 px-4 pt-4 md:pt-0 md:px-0">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="https://www.upwork.com/freelancers/~0108da942cb94bb82f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative flex items-center gap-2 bg-[#6fda44] hover:bg-[#5fb534] text-white w-full px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295s5.281-2.378 5.281-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.688 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
                <span className="font-medium">{content[language].upwork}</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="https://medium.com/@erenasiroglu1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl bg-white text-black hover:bg-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                <span className="font-medium">{content[language].medium}</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-40 text-center text-gray-200"
      >
        {isLoading ? (
          <Skeleton className="h-20 w-3/4 mx-auto mb-4" />
        ) : (
          <h1 className="text-[68px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Eren Nasıroglu
          </h1>
        )}
        {isLoading ? (
          <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        ) : (
          <p
            className={`text-3xl mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {content[language].role}
          </p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {isLoading ? (
            <Skeleton className="h-14 w-48 mx-auto" />
          ) : (
            <Link
              href="https://github.com/erenasiroglu?tab=overview&from=2024-10-01&to=2024-10-05"
              passHref
            >
              <Button className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-500 ease-in-out relative overflow-hidden group">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-gray-800">
                  {content[language].cta}
                </span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
              </Button>
            </Link>
          )}
        </motion.div>
      </motion.section>
    </div>
  );
}
