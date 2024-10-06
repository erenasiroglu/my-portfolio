"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layouts";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const LoadingDot = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-4 h-4 rounded-full bg-blue-500"
    initial={{ y: 0 }}
    animate={{ y: [-10, 0, -10] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <Layout className={poppins.className}>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
                  currentTheme === "dark" ? "bg-gray-900" : "bg-white"
                }`}
              >
                <div className="flex space-x-4 mb-8">
                  <LoadingDot delay={0} />
                  <LoadingDot delay={0.2} />
                  <LoadingDot delay={0.4} />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`text-2xl font-bold ${
                    currentTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Welcome to my portfolio
                </motion.h1>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero isLoading={false} />
                <About isLoading={false} />
                <Projects isLoading={false} />
                <Contact isLoading={false} />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
