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

  const menuItems = [
    { href: "#about", icon: User, label: "Hakkımda" },
    { href: "#projects", icon: FolderKanban, label: "Projeler" },
    { href: "#contact", icon: Mail, label: "İletişim" },
    {
      href: "https://www.linkedin.com/in/eren-nasiroglu/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/erenasiroglu", icon: Github, label: "GitHub" },
    {
      icon: mounted && theme === "dark" ? Sun : Moon,
      label: "Toggle theme",
      action: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
    {
      icon: Globe,
      label: language === "en" ? "🇬🇧 English" : "🇹🇷 Türkçe",
      action: () => setLanguage(language === "en" ? "tr" : "en"),
    },
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
      <motion.button
        className="bg-nav-bg/80 text-nav-text backdrop-blur-md p-2 rounded-l-full shadow-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="w-6 h-6" />
        ) : (
          <ChevronLeft className="w-6 h-6" />
        )}
      </motion.button>
      <motion.ul
        className={`flex bg-nav-bg/80 text-nav-text backdrop-blur-md rounded-r-full p-1 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
          isCollapsed ? "w-0 overflow-hidden" : "w-auto"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {menuItems.map((item, index) => (
          <motion.li key={item.label || index} className="mx-1">
            {item.href ? (
              <Link href={item.href} passHref>
                <motion.a
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => isDragging && e.preventDefault()}
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              </Link>
            ) : (
              <motion.button
                className="flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
                onClick={item.action}
              >
                <item.icon className="w-6 h-6" />
              </motion.button>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
