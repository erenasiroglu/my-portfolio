"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowLeft, Award } from "lucide-react";
import Link from "next/link";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  url?: string;
}

export default function Certificates() {
  const { language } = useLanguage();

  const certificates: Certificate[] = [
    {
      title: "React Native",
      issuer: "Meta (Coursera)",
      date: "2025",
      skills: ["React Native", "Mobile Development", "JavaScript"],
      url: "certificate-url-1",
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      url: "certificate-url-2",
    },
    {
      title: "React Development",
      issuer: "Patika.dev",
      date: "2024",
      skills: ["React", "JavaScript", "Frontend Development"],
      url: "certificate-url-3",
    },
    {
      title: "Google GDSC Core Member",
      issuer: "Google",
      date: "2023",
      url: "certificate-url-4",
    },
    {
      title: "Advanced Web Development",
      issuer: "Udemy",
      date: "2023",
      skills: ["HTML", "CSS", "JavaScript"],
      url: "certificate-url-5",
    },
    {
      title: "Advanced Javascript",
      issuer: "Udemy",
      date: "2022",
      skills: ["JavaScript", "ES6+", "Async Programming"],
      url: "certificate-url-6",
    },
    {
      title: "Data Science with Python and Tensorflow",
      issuer: "BTK Akademi",
      date: "2022",
      skills: ["Python", "TensorFlow", "Data Science"],
      url: "certificate-url-7",
    },
    {
      title: "MEF University Yetkin Gençler",
      issuer: "Yetkin Gençler",
      date: "2022",
      url: "certificate-url-8",
    },
  ];

  const content = {
    en: {
      title: "Certificates",
      back: "Back to Home",
    },
    tr: {
      title: "Sertifikalar",
      back: "Ana Sayfaya Dön",
    },
  };

  const TechBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-cyan-500/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
      {skill}
    </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-16 container-padding"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{content[language].back}</span>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text flex items-center gap-3"
          >
            <Award className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
            {content[language].title}
          </motion.h1>
        </motion.div>

        <div className="grid gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
              className="card-modern p-5 md:p-6 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <span className="text-sm text-gray-500 font-medium whitespace-nowrap ml-4">
                  {cert.date}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {cert.issuer}
              </p>
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
      </div>
    </motion.div>
  );
}
