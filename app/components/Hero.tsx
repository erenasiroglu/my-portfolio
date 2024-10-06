"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useTheme } from "next-themes";
import { useLanguage } from "../contexts/LanguageContext";

interface HeroProps {
  isLoading: boolean;
}

import { useState } from "react"; // Import useState for managing download progress

export default function Hero({ isLoading }: HeroProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [downloadProgress, setDownloadProgress] = useState(0); // State for download progress

  const content = {
    en: {
      role: "Frontend Developer",
      cta: "Discover my 2024 GitHub activity",
    },
    tr: {
      role: "Frontend Geliştirici",
      cta: "2024 GitHub aktivitemi keşfedin",
    },
  };

  const handleDownload = () => {
    const total = 100;
    let current = 0;

    const interval = setInterval(() => {
      if (current < total) {
        current += 10;
        setDownloadProgress(current);
      } else {
        clearInterval(interval);
        const link = document.createElement("a");
        link.href = "/erenasiroglu_cv.pdf";
        link.download = "erenasiroglu_cv.pdf";
        link.click();
      }
    }, 300);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-40 text-center ${
        theme === "dark" ? "text-gray-200" : "text-gray-900"
      }`}
    >
      <div className="absolute top-4 right-4">
        <Button
          onClick={handleDownload}
          className="text-lg px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-md"
        >
          Download CV
        </Button>
        {downloadProgress > 0 && (
          <div className="mt-2 text-gray-600">
            Downloading... {downloadProgress}%
          </div>
        )}
      </div>
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
  );
}
