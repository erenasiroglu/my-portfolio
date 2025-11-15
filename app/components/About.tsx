"use client";
import { motion } from "framer-motion";
import { Skeleton } from "./ui/skeleton";
import { Users, ChevronDown } from "lucide-react";
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
        en: "Pulse FinTech is a financial technology company where I develop mobile and web applications. I work with React Native for mobile development, JavaScript for frontend solutions, and Express.js for backend services, creating comprehensive fintech solutions. Developed the new version of the application with Next.js.",
        tr: "Pulse FinTech, mobil ve web uygulamaları geliştirdiğim bir finansal teknoloji şirketidir. Mobil geliştirme için React Native, frontend çözümleri için JavaScript ve backend servisleri için Express.js kullanarak kapsamlı fintech çözümleri oluşturuyorum. Next.js ile uygulamanın yeni versiyonunu geliştirdik.",
      },
      technologies: [
        "React Native",
        "Next.js",
        "JavaScript",
        "Express.js",
        "REST API",
        "Mobile Development",
        "FinTech",
      ],
    },
    {
      company: "BeforeSunset AI",
      year: "06/2024 - 05/2025",
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
    <span className="inline-block bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-cyan-500/10 text-gray-300 text-xs font-medium mr-2 mb-2 px-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
      {tech}
    </span>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="about"
      className="max-w-4xl mx-auto container-padding section-padding"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 gradient-text text-center"
          >
            {content[language].title}
          </motion.h2>

          <div className="space-y-10 md:space-y-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border-b pb-8 md:pb-10 border-gray-800"
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {content[language].description}
              </p>
            </motion.div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl font-semibold mb-8 md:mb-10 flex items-center text-gray-100"
              >
                <Users className="mr-3 text-blue-400 icon-lg" />
                {content[language].experience}
              </motion.h3>
              <div className="space-y-4 md:space-y-5">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                    className={cn(
                      "card-modern p-5 md:p-6 cursor-pointer",
                      expandedExperience === index
                        ? "border-blue-500/50 shadow-lg shadow-blue-500/10 bg-gray-900/50"
                        : ""
                    )}
                  >
                    <div
                      className="flex justify-between items-center"
                      onClick={() => handleExperienceExpand(index)}
                    >
                      <h4 className="font-bold text-lg md:text-xl text-gray-100">
                        {exp.company}
                      </h4>
                      <div className="flex items-center gap-3">
                        <span className="text-sm md:text-base text-gray-400 font-medium">
                          {exp.year}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedExperience === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="text-gray-500 icon-base" />
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
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-gray-800 overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="text-base md:text-lg font-semibold gradient-text mb-3"
                        >
                          {exp.role[language]}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed"
                        >
                          {exp.description[language]}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-wrap gap-2"
                        >
                          {exp.technologies.map((tech, i) => (
                            <TechBadge key={i} tech={tech} />
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
