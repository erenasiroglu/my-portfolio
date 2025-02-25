"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <Link
          href="/home"
          className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          {language === "en" ? "Certificates" : "Sertifikalar"}
        </h1>

        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-2">
                {cert.issuer} • {cert.date}
              </p>
              {cert.skills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-r from-blue-900 to-purple-900 text-gray-200 px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
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
