"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useTheme } from "next-themes";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

interface HeroProps {
  isLoading: boolean;
}

export default function Hero({ isLoading }: HeroProps) {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  // Hero görüntüleme takibi için useEffect
  useEffect(() => {
    // Google Analytics için Hero görüntüleme takibi
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "section_view", {
        event_category: "engagement",
        event_label: "hero_section",
        non_interaction: true,
      });
    }

    // Hotjar için Hero görüntüleme takibi
    if (typeof window !== "undefined" && window.hj) {
      window.hj("event", "hero_section_viewed");
    }
  }, []);

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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-32 md:pt-48 pb-24 md:pb-32 text-center"
      >
        {isLoading ? (
          <div className="flex flex-col items-center gap-6">
            {/* Name skeleton */}
            <Skeleton className="h-20 md:h-24 w-96 max-w-full mx-auto rounded-lg" />

            {/* Role skeleton */}
            <Skeleton className="h-10 md:h-12 w-72 max-w-full mx-auto rounded-lg" />

            {/* CTA Button skeleton */}
            <Skeleton className="h-14 w-64 mx-auto rounded-xl" />
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-blue-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              Eren Nasıroglu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl lg:text-3xl mb-12 md:mb-16 text-gray-300 font-medium tracking-wide"
            >
              {content[language].role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="https://github.com/erenasiroglu?tab=overview&from=2025-02-01&to=2025-02-25"
                passHref
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    // Google Analytics tracking
                    if (window.gtag) {
                      window.gtag("event", "click", {
                        event_category: "engagement",
                        event_label: "github_activity_cta",
                        value: 1,
                      });
                    }

                    // Hotjar tracking
                    if (window.hj) {
                      window.hj("event", "github_cta_clicked");
                    }
                  }}
                >
                  <Button
                    className="text-base md:text-lg px-8 py-4 md:px-10 md:py-5 relative overflow-hidden
                      bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700
                      hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600
                      text-white rounded-xl font-semibold
                      shadow-lg shadow-blue-900/40
                      hover:shadow-xl hover:shadow-blue-900/50
                      transition-all duration-300 ease-out
                      border border-gray-700/50"
                  >
                    <span className="relative z-10">{content[language].cta}</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </>
        )}
      </motion.section>
    </div>
  );
}
