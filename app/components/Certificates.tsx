"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";

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

  const content = {
    en: {
      title: "Certificates",
      subtitle: "Explore my professional certifications and achievements",
      viewAll: "View All Certificates",
    },
    tr: {
      title: "Sertifikalar",
      subtitle: "Profesyonel sertifikalarımı ve başarılarımı keşfedin",
      viewAll: "Tüm Sertifikaları Gör",
    },
  };

  const TechBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-cyan-500/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
      {skill}
    </span>
  );

  // Show first 4 certificates on home page
  const displayedCertificates = CERTIFICATES.slice(0, 4);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="certificates"
      className="max-w-4xl mx-auto container-padding section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text text-center flex items-center justify-center gap-3"
        >
          <Award className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
          {content[language].title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-gray-400 text-center mb-8"
        >
          {content[language].subtitle}
        </motion.p>
      </motion.div>

      <div className="grid gap-4 md:gap-6 mb-8">
        {displayedCertificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
            className="card-modern p-5 md:p-6 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-white transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {cert.issuer}
                </p>
              </div>
              <span className="text-sm text-gray-500 font-medium whitespace-nowrap ml-4">
                {cert.date}
              </span>
            </div>
            {cert.skills && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                {cert.skills.map((skill, i) => (
                  <TechBadge key={i} skill={skill} />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <Link href="/certificates">
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 
              bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700
              hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600
              text-white rounded-xl font-semibold
              shadow-lg shadow-blue-900/40
              hover:shadow-xl hover:shadow-blue-900/50
              transition-all duration-300 ease-out
              border border-gray-700/50"
          >
            <span>{content[language].viewAll}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}

