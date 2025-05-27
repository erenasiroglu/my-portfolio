"use client";
import { motion } from "framer-motion";
import { Skeleton } from "./ui/skeleton";
import { Briefcase, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

interface AboutProps {
  isLoading: boolean;
}

export default function About({ isLoading }: AboutProps) {
  const { theme } = useTheme();
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );
  const { language } = useLanguage();

  // About bölümü görüntüleme takibi
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Analytics için About görüntüleme takibi
      if (window.gtag) {
        window.gtag("event", "section_view", {
          event_category: "engagement",
          event_label: "about_section",
          non_interaction: true,
        });
      }

      // Hotjar için About görüntüleme takibi
      if (window.hj) {
        window.hj("event", "about_section_viewed");
      }
    }
  }, []);

  // Deneyim detaylarını genişletme olayını takip etme
  const handleExperienceExpand = (index: number) => {
    const newExpandedState = expandedExperience === index ? null : index;
    setExpandedExperience(newExpandedState);

    if (newExpandedState !== null && typeof window !== "undefined") {
      const companyName = experiences[index].company;

      // Google Analytics için deneyim genişletme takibi
      if (window.gtag) {
        window.gtag("event", "experience_expand", {
          event_category: "engagement",
          event_label: companyName,
        });
      }

      // Hotjar için deneyim genişletme takibi
      if (window.hj) {
        window.hj(
          "event",
          `experience_expanded_${companyName
            .replace(/\s+/g, "_")
            .toLowerCase()}`
        );
      }
    }
  };

  const content = {
    en: {
      title: "About Me",
      description:
        "Hi, I am Eren. I graduated from the Management Information Systems department in 2024. My experience in web development started in November 2022, and since then, I have been actively working to improve myself in the software industry. Although I have professional experience with React, Next.js, and Vue, I continue to enhance my skills every day with creative projects I come up with, focusing on React Native and Node.js as well. I always prioritize creating products with user-friendly design and clean code principles.",
      experience: "Professional Experience",
    },
    tr: {
      title: "Hakkımda",
      description:
        "Merhaba, ben Eren. 2024 yılında Yönetim Bilişim Sistemleri bölümünden mezun oldum. Web geliştirme deneyimim Kasım 2022'de başladı ve o zamandan beri yazılım endüstrisinde kendimi geliştirmek için aktif olarak çalışıyorum. React, Next.js ve Vue konusunda profesyonel deneyimim olmasına rağmen, React Native ve Node.js üzerine odaklanarak her gün kendimi geliştirmeye devam ediyorum. Her zaman kullanıcı dostu tasarım ve temiz kod prensiplerine sahip ürünler oluşturmayı önceliklendiriyorum.",
      experience: "Profesyonel Deneyim",
    },
  };

  const experiences = [
    {
      company: "Pulse FinTech",
      year: "05/2025 - Present",
      role: {
        en: "Full Stack Developer",
        tr: "Full Stack Geliştirici",
      },
      description: {
        en: "Pulse FinTech is a financial technology company where I develop mobile and web applications. I work with React Native for mobile development, JavaScript for frontend solutions, and Express.js for backend services, creating comprehensive fintech solutions.",
        tr: "Pulse FinTech, mobil ve web uygulamaları geliştirdiğim bir finansal teknoloji şirketidir. Mobil geliştirme için React Native, frontend çözümleri için JavaScript ve backend servisleri için Express.js kullanarak kapsamlı fintech çözümleri oluşturuyorum.",
      },
      technologies: [
        "React Native",
        "JavaScript",
        "Express.js",
        "REST API",
        "Mobile Development",
        "FinTech",
      ],
    },
    {
      company: "BeforeSunset AI",
      year: "07/2023 - 04/2024",
      role: {
        en: "Software Developer",
        tr: "Yazılım Geliştirici",
      },
      description: {
        en: "BeforeSunset AI is a project that uses artificial intelligence to help users better plan their time. I developed solutions using React, Next.js, Zustand, and Supabase, focusing on AI-powered productivity tools.",
        tr: "BeforeSunset AI, kullanıcıların zamanlarını daha iyi planlamalarına yardımcı olmak için yapay zeka kullanan bir projedir. React, Next.js, Zustand ve Supabase kullanarak AI destekli verimlilik araçlarına odaklanarak çözümler geliştirdim.",
      },
      technologies: [
        "React",
        "Next.js",
        "Zustand",
        "Supabase",
        "Storybook",
        "Firebase",
        "AI Integration",
      ],
    },
    {
      company: "GEMAS Pool Technology",
      year: "03/2024 - 06/2024",
      role: {
        en: "Full Stack Developer",
        tr: "Full Stack Geliştirici",
      },
      description: {
        en: "Gemas is a company that produces pool technologies. In this project, I was involved in creating an e-commerce site using PHP Laravel.",
        tr: "Gemas, havuz teknolojileri üreten bir şirkettir. Bu projede, PHP Laravel kullanarak bir e-ticaret sitesi oluşturmada yer aldım.",
      },
      technologies: ["PHP", "Laravel", "MySQL"],
    },
    {
      company: "Decktopus AI",
      year: "10/2022 - 03/2024",
      role: {
        en: "Frontend Developer",
        tr: "Frontend Geliştirici",
      },
      description: {
        en: "Decktopus AI is a project that allows users to create presentations quickly using artificial intelligence. I handled feature and bugfix tasks in the frontend using technologies like Vue, Vuetify, GraphQL, and Hasura.",
        tr: "Decktopus AI, kullanıcıların yapay zeka kullanarak hızlı bir şekilde sunumlar oluşturmasına olanak tanıyan bir projedir. Vue, Vuetify, GraphQL ve Hasura gibi teknolojileri kullanarak frontend'de özellik geliştirme ve hata düzeltme görevlerini üstlendim.",
      },
      technologies: [
        "Vue",
        "Vuetify",
        "GraphQL",
        "Hasura",
        "React",
        "Storybook",
        "Pandas",
        "Software Testing",
        "Redux",
        "Restful API",
        "UI Design",
        "Data Analysis",
        "Feature Flag",
      ],
    },
  ];

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="inline-block bg-gradient-to-r from-blue-900 to-purple-900 text-gray-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
      {tech}
    </span>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="about"
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {isLoading ? (
        <div className="space-y-6 sm:space-y-8">
          {/* Title skeleton */}
          <Skeleton className="h-8 w-48 mb-6 sm:mb-8" />

          {/* Description skeleton */}
          <div className="border-b pb-4 sm:pb-6 border-gray-700">
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-5/6 mb-3" />
            <Skeleton className="h-4 w-4/5 mb-3" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Experience section skeleton */}
          <div>
            <Skeleton className="h-6 w-56 mb-4 sm:mb-6" />
            <div className="space-y-3 sm:space-y-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 sm:p-4 border-gray-700"
                >
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            {content[language].title}
          </motion.h2>

          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-b pb-4 sm:pb-6 border-gray-700"
            >
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {content[language].description}
              </p>
            </motion.div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-100"
              >
                <Users className="mr-2 sm:mr-3 text-purple-500" size={20} />
                {content[language].experience}
              </motion.h3>
              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className={cn(
                      "border rounded-lg p-3 sm:p-4 border-gray-700 transition-all duration-300 cursor-pointer",
                      expandedExperience === index
                        ? "shadow-lg border-purple-500/30 bg-gray-900/30"
                        : "hover:shadow-md hover:border-gray-600"
                    )}
                  >
                    <div
                      className="flex justify-between items-center"
                      onClick={() => handleExperienceExpand(index)}
                    >
                      <h4 className="font-bold text-base sm:text-lg text-gray-100">
                        {exp.company}
                      </h4>
                      <div className="flex items-center">
                        <span className="text-xs sm:text-sm text-gray-300 font-medium mr-2">
                          {exp.year}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedExperience === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="text-gray-500" size={16} />
                        </motion.div>
                      </div>
                    </div>
                    {expandedExperience === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="mt-3 sm:mt-4 overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
                        >
                          {exp.role[language]}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3"
                        >
                          {exp.description[language]}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mb-2 sm:mb-3"
                        >
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.3 + i * 0.05,
                                duration: 0.3,
                              }}
                              className="inline-block bg-gradient-to-r from-blue-900 to-purple-900 text-gray-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded hover:from-blue-800 hover:to-purple-800 transition-all duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
}
