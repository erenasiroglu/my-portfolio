"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animasyonu
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Daha hızlı yönlendirme
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [router]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]"
    >
      {/* Ana container */}
      <div className="relative flex flex-col items-center">
        {/* Logo/İsim animasyonu */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 100,
          }}
          className="mb-12"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Eren Nasıroğlu
          </motion.h1>
        </motion.div>

        {/* Modern progress bar with glow */}
        <div className="relative w-72 md:w-80 mb-8">
          <div className="relative h-1 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-md"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
        </div>

        {/* Subtle loading indicator */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                animate={{
                  scale: [1, 1.2, 1],
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

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"
            initial={{
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : Math.random() * 1000,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : Math.random() * 800,
              opacity: 0,
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Ambient gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
