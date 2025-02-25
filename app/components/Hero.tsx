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
      role: "Full Stack Developer",
      cta: "Discover my 2025 GitHub activity",
    },
    tr: {
      role: "Full Stack Geliştirici",
      cta: "2025 GitHub aktivitemi keşfedin",
    },
  };

  return (
    <div className="relative px-4 md:px-0">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 md:pt-40 pb-20 md:pb-40 text-center"
      >
        {isLoading ? (
          <Skeleton className="h-20 w-3/4 mx-auto mb-4" />
        ) : (
          <h1 className="text-[72px] md:text-[68px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Eren Nasıroglu
          </h1>
        )}
        {isLoading ? (
          <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        ) : (
          <p className="text-xl md:text-3xl mb-8 text-gray-300">
            {content[language].role}
          </p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {isLoading ? (
            <Skeleton className="h-12 w-40 mx-auto" />
          ) : (
            <Link
              href="https://github.com/erenasiroglu?tab=overview&from=2025-02-01&to=2025-02-25"
              passHref
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  className="text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 relative overflow-hidden
                    before:absolute before:inset-0 
                    before:bg-gradient-to-r before:from-blue-600 before:via-purple-600 before:to-blue-600
                    before:animate-[gradient_3s_ease_infinite]
                    before:bg-[length:200%_100%]
                    before:z-[-1]
                    text-white rounded-md transition-all duration-300"
                >
                  {content[language].cta}
                </Button>
              </motion.div>
            </Link>
          )}
        </motion.div>
      </motion.section>
    </div>
  );
}
