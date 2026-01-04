"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Award, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
}

const CERTIFICATES: Certificate[] = [
  {
    title: "React Native",
    issuer: "Meta (Coursera)",
    date: "2025",
    skills: ["React Native", "Mobile Development", "JavaScript"],
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    title: "React Development",
    issuer: "Patika.dev",
    date: "2024",
    skills: ["React", "JavaScript", "Frontend Development"],
  },
  {
    title: "Google GDSC Core Member",
    issuer: "Google",
    date: "2023",
  },
  {
    title: "Advanced Web Development",
    issuer: "Udemy",
    date: "2023",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Advanced Javascript",
    issuer: "Udemy",
    date: "2022",
    skills: ["JavaScript", "ES6+", "Async Programming"],
  },
  {
    title: "Data Science with Python and Tensorflow",
    issuer: "BTK Akademi",
    date: "2022",
    skills: ["Python", "TensorFlow", "Data Science"],
  },
  {
    title: "MEF University Yetkin Gençler",
    issuer: "Yetkin Gençler",
    date: "2022",
  },
];

export default function Certificates() {
  const { language } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<number>(0);

  const content = {
    en: {
      title: "Certificates",
    },
    tr: {
      title: "Sertifikalar",
    },
  };

  const selectedCert = CERTIFICATES[selectedCertificate];

  const handleCertificateSelect = (index: number) => {
    setSelectedCertificate(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="certificates"
      className="max-w-7xl mx-auto container-padding section-padding"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-gray-100"
      >
        {content[language].title}
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Side - Certificate List */}
        <div className="flex md:flex-col gap-2 md:gap-0 border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-8 md:min-w-[250px] overflow-x-auto md:overflow-x-visible">
          {CERTIFICATES.map((cert, index) => (
            <motion.button
              key={index}
              onClick={() => handleCertificateSelect(index)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all whitespace-nowrap md:whitespace-normal",
                selectedCertificate === index
                  ? "bg-gray-800/50 text-white"
                  : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/30"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Award className="w-5 h-5 flex-shrink-0 opacity-80" />
              <span className="font-medium text-sm md:text-base">
                {cert.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Right Side - Certificate Details */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCertificate}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                  <span className="gradient-text">{selectedCert.title}</span>
                </h4>
                <p className="text-gray-400 text-sm md:text-base mb-2">
                  {selectedCert.issuer}
                </p>
                <p className="text-gray-500 text-sm">
                  {selectedCert.date}
                </p>
              </div>

              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-gray-200 mb-4">
                    Skills & Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-cyan-500/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
