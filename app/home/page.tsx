"use client";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative">
            <div className="w-12 h-12 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-cyan-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen loading-prevent-fouc loaded"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Header />
        </motion.div>

        {/* Progressive component loading with staggered animations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero isLoading={loadingStates.hero} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <About isLoading={loadingStates.about} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Projects />
        </motion.section>

     

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Certificates />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.section>
        
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Footer />
        </motion.footer>
      </motion.main>
    </AnimatePresence>
  );
}
