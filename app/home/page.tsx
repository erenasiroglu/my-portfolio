"use client";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Loading state management pattern
interface LoadingStates {
  initial: boolean;
  hero: boolean;
  about: boolean;
  projects: boolean;
  contact: boolean;
}

export default function Home() {
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    initial: true,
    hero: true,
    about: true,
    projects: true,
    contact: true,
  });

  const [isPageReady, setIsPageReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted
    setIsMounted(true);

    // Immediate page ready to prevent any flash
    const readyTimer = setTimeout(() => {
      setIsPageReady(true);
    }, 50);

    // Progressive loading sequence with optimized timing
    const loadingSequence = [
      { delay: 200, state: "initial" },
      { delay: 400, state: "hero" },
      { delay: 700, state: "about" },
      { delay: 1000, state: "projects" },
      { delay: 1300, state: "contact" },
    ];

    // Progressive loading timers
    const timers = loadingSequence.map(({ delay, state }) =>
      setTimeout(() => {
        setLoadingStates((prev) => ({
          ...prev,
          [state]: false,
        }));
      }, delay)
    );

    return () => {
      clearTimeout(readyTimer);
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  // Show loading screen until mounted and ready
  if (!isMounted || !isPageReady) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-400 font-medium tracking-wider"
          >
            INITIALIZING
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="min-h-screen loading-prevent-fouc loaded"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Header />
        </motion.div>

        {/* Progressive component loading with staggered animations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Hero isLoading={loadingStates.hero} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <About isLoading={loadingStates.about} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Contact />
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Footer />
        </motion.footer>
      </motion.main>
    </AnimatePresence>
  );
}
