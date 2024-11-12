"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import {
  User,
  FolderKanban,
  Mail,
  Linkedin,
  Github,
  Sun,
  Moon,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../contexts/LanguageContext";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type MenuItem = {
  href?: string;
  icon?: React.ComponentType<IconProps>;
  label: string;
  action?: () => void;
  type?: "separator";
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function Navigation() {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPosition = localStorage.getItem("navPosition");
    if (savedPosition) {
      const { x: savedX, y: savedY } = JSON.parse(savedPosition);
      x.set(savedX);
      y.set(savedY);
    } else {
      const setDefaultPosition = () => {
        const windowWidth = window.innerWidth;
        const navWidth = 300;
        x.set((windowWidth - navWidth) / 2);
        y.set(window.innerHeight - 100);
      };
      setDefaultPosition();
      window.addEventListener("resize", setDefaultPosition);
      return () => window.removeEventListener("resize", setDefaultPosition);
    }
  }, []);

  const translations = {
    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      // theme: "Change theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    tr: {
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",
      // theme: "Tema değiştir",
      openMenu: "Menüyü Aç",
      closeMenu: "Menüyü Kapat",
    },
  };

  const t = translations[language];

  const menuItems: MenuItem[] = [
    { href: "#about", icon: User, label: t.about },
    { href: "#projects", icon: FolderKanban, label: t.projects },
    { href: "#contact", icon: Mail, label: t.contact },
    {
      type: "separator",
      icon: undefined,
      label: "",
    },
    {
      href: "https://www.linkedin.com/in/eren-nasiroglu/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/erenasiroglu", icon: Github, label: "GitHub" },
    {
      type: "separator",
      icon: undefined,
      label: "",
    },
    {
      icon: Globe,
      label: language === "en" ? "🇬🇧 English" : "🇹🇷 Türkçe",
      action: () => setLanguage(language === "en" ? "tr" : "en"),
    },
    // {
    //   icon: mounted && theme === "dark" ? Sun : Moon,
    //   label: t.theme,
    //   action: () => setTheme(theme === "dark" ? "light" : "dark"),
    // },
  ];

  return (
    <motion.nav
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false);
        localStorage.setItem(
          "navPosition",
          JSON.stringify({ x: x.get(), y: y.get() })
        );
      }}
      style={{ x, y }}
      className="fixed z-50 cursor-move flex items-center"
    >
      <motion.div className="flex items-center bg-nav-bg/80 text-nav-text backdrop-blur-md rounded-full shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <TooltipProvider delayDuration={0}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <motion.button
                className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? (
                  <ChevronRight className="w-5 h-5" />
                ) : (
                  <ChevronLeft className="w-5 h-5" />
                )}
              </motion.button>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-gray-800 text-white text-xs py-1 px-2 rounded"
            >
              <p>{isCollapsed ? t.openMenu : t.closeMenu}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <motion.ul
          className={`flex items-center transition-all duration-300 ${
            isCollapsed ? "w-0 overflow-hidden" : "w-auto p-1"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TooltipProvider>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.label || index}>
                {item.type === "separator" ? (
                  <div className="mx-1 h-6 w-px bg-gray-300 dark:bg-gray-700" />
                ) : (
                  <motion.li className="mx-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {item.href ? (
                          <Link href={item.href} passHref>
                            <motion.a
                              className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                              title={item.label}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => isDragging && e.preventDefault()}
                            >
                              {item.icon && <item.icon className="w-4 h-4" />}
                            </motion.a>
                          </Link>
                        ) : (
                          <motion.button
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            title={item.label}
                            onClick={item.action}
                          >
                            {item.icon && <item.icon className="w-4 h-4" />}
                          </motion.button>
                        )}
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        className="bg-gray-800 text-white text-xs py-1 px-2 rounded"
                      >
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.li>
                )}
              </React.Fragment>
            ))}
          </TooltipProvider>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
