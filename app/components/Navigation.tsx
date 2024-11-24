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
      openMenu: "Open",
      closeMenu: "Close",
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
    <TooltipProvider>
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
        className="fixed z-50 cursor-move flex items-center bottom-6 left-1/2 -translate-x-1/2 md:transform-none md:left-auto md:bottom-auto"
      >
        <motion.div className="flex items-center bg-nav-bg/90 backdrop-blur-md rounded-full shadow-lg border border-gray-800">
          {/* Collapse button - Hide on mobile */}
          <div className="hidden md:block">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  className="p-2 rounded-full hover:bg-gray-800/50 text-gray-300"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{isCollapsed ? t.openMenu : t.closeMenu}</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Menu Items */}
          <motion.ul
            className={`flex items-center p-1.5 ${
              isCollapsed ? "md:w-0 md:overflow-hidden" : "w-auto"
            }`}
          >
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === "separator" ? (
                  <div className="hidden md:block mx-1 h-6 w-px bg-gray-700" />
                ) : (
                  <motion.li className="mx-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {item.href ? (
                          <Link href={item.href}>
                            <motion.a
                              className="flex items-center justify-center w-10 h-10 md:w-9 md:h-9 rounded-full hover:bg-gray-800/50 text-gray-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {item.icon && (
                                <item.icon className="w-5 h-5 md:w-4 md:h-4" />
                              )}
                            </motion.a>
                          </Link>
                        ) : (
                          <motion.button
                            className="flex items-center justify-center w-10 h-10 md:w-9 md:h-9 rounded-full hover:bg-gray-800/50 text-gray-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={item.action}
                          >
                            {item.icon && (
                              <item.icon className="w-5 h-5 md:w-4 md:h-4" />
                            )}
                          </motion.button>
                        )}
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.li>
                )}
              </React.Fragment>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </TooltipProvider>
  );
}
