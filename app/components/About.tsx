"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "./ui/skeleton";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";
import { Check, Building2 } from "lucide-react";

interface AboutProps {
  isLoading: boolean;
}

export default function About({ isLoading }: AboutProps) {
  const { theme } = useTheme();
  const [selectedExperience, setSelectedExperience] = useState<number>(0);
  const { language } = useLanguage();

  // About bölümü görüntüleme takibi
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "section_view", {
          event_category: "engagement",
          event_label: "about_section",
          non_interaction: true,
        });
      }
      if (window.hj) {
        window.hj("event", "about_section_viewed");
      }
    }
  }, []);

  // Şirket seçimi takibi
  const handleCompanySelect = (index: number) => {
    setSelectedExperience(index);
    if (typeof window !== "undefined") {
      const companyName = experiences[index].company;
      if (window.gtag) {
        window.gtag("event", "experience_select", {
          event_category: "engagement",
          event_label: companyName,
        });
      }
      if (window.hj) {
        window.hj(
          "event",
          `experience_selected_${companyName.replace(/\s+/g, "_").toLowerCase()}`
        );
      }
    }
  };

  const content = {
    en: {
      title: "About Me",
      description:
        "Hi, I am Eren. I graduated from the Management Information Systems department in 2024. My experience in web development started in November 2022, and since then, I have been actively working to improve myself in the software industry. Although I have professional experience with React, Next.js, and Vue, I continue to enhance my skills every day with creative projects I come up with, focusing on React Native and Node.js as well. I always prioritize creating products with user-friendly design and clean code principles.",
      experience: "Work Experience",
    },
    tr: {
      title: "Hakkımda",
      description:
        "Merhaba, ben Eren. 2024 yılında Yönetim Bilişim Sistemleri bölümünden mezun oldum. Web geliştirme deneyimim Kasım 2022'de başladı ve o zamandan beri yazılım endüstrisinde kendimi geliştirmek için aktif olarak çalışıyorum. React, Next.js ve Vue konusunda profesyonel deneyimim olmasına rağmen, React Native ve Node.js üzerine odaklanarak her gün kendimi geliştirmeye devam ediyorum. Her zaman kullanıcı dostu tasarım ve temiz kod prensiplerine sahip ürünler oluşturmayı önceliklendiriyorum.",
      experience: "İş Deneyimi",
    },
  };

  const experiences = [
    {
      company: "Pulse FinTech",
      logoDomain: "pulsefintech.com",
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
      highlights: {
        en: [
          "Developed mobile and web applications using React Native and Next.js",
          "Built comprehensive fintech solutions with Express.js backend",
          "Created user-friendly interfaces with modern web technologies",
        ],
        tr: [
          "React Native ve Next.js kullanarak mobil ve web uygulamaları geliştirdim",
          "Express.js backend ile kapsamlı fintech çözümleri oluşturdum",
          "Modern web teknolojileriyle kullanıcı dostu arayüzler tasarladım",
        ],
      },
    },
    {
      company: "BeforeSunset AI",
      logoDomain: "beforesunset.ai",
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
      highlights: {
        en: [
          "Built AI-powered productivity tools with React and Next.js",
          "Implemented state management using Zustand",
          "Integrated Supabase for backend services",
        ],
        tr: [
          "React ve Next.js ile AI destekli verimlilik araçları geliştirdim",
          "Zustand kullanarak state management uyguladım",
          "Backend servisleri için Supabase entegrasyonu yaptım",
        ],
      },
    },
    {
      company: "GEMAS Pool Technology",
      logoDomain: "gemas.com",
      year: "03/2024 - 06/2024",
      role: {
        en: "Full Stack Developer",
        tr: "Full Stack Geliştirici",
      },
      description: {
        en: "GEMAS is a company that produces pool technologies. In this project, I was involved in creating an e-commerce site using PHP Laravel.",
        tr: "GEMAS, havuz teknolojileri üreten bir şirkettir. Bu projede, PHP Laravel kullanarak bir e-ticaret sitesi oluşturmada yer aldım.",
      },
      technologies: ["PHP", "Laravel", "MySQL"],
      highlights: {
        en: [
          "Developed e-commerce platform using PHP Laravel",
          "Implemented MySQL database for product management",
          "Created responsive user interfaces",
        ],
        tr: [
          "PHP Laravel kullanarak e-ticaret platformu geliştirdim",
          "Ürün yönetimi için MySQL veritabanı uyguladım",
          "Responsive kullanıcı arayüzleri oluşturdum",
        ],
      },
    },
    {
      company: "Decktopus AI",
      logoDomain: "decktopus.com",
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
      highlights: {
        en: [
          "Developed features for AI-powered presentation tool",
          "Worked with Vue, Vuetify, and GraphQL for frontend development",
          "Implemented UI components and user experience improvements",
        ],
        tr: [
          "AI destekli sunum aracı için özellikler geliştirdim",
          "Frontend geliştirme için Vue, Vuetify ve GraphQL kullandım",
          "UI bileşenleri ve kullanıcı deneyimi iyileştirmeleri uyguladım",
        ],
      },
    },
  ];

  const selectedExp = experiences[selectedExperience];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="about"
      className="max-w-7xl mx-auto container-padding section-padding"
    >
      {isLoading ? (
        <div className="space-y-6 sm:space-y-8">
          <Skeleton className="h-8 w-48 mb-6 sm:mb-8" />
          <div className="border-b pb-4 sm:pb-6 border-gray-700">
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-5/6 mb-3" />
            <Skeleton className="h-4 w-4/5 mb-3" />
            <Skeleton className="h-4 w-3/4" />
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
                className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-gray-100"
              >
                {content[language].experience}
              </motion.h3>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Left Side - Company List */}
                <div className="flex md:flex-col gap-2 md:gap-0 border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-8 md:min-w-[200px] overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                  {experiences.map((exp, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleCompanySelect(index)}
                      className={cn(
                        "flex items-center gap-2.5 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-left transition-all whitespace-nowrap md:whitespace-normal flex-shrink-0 min-h-[44px]",
                        selectedExperience === index
                          ? "bg-gray-800/50 text-white"
                          : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/30 active:bg-gray-800/40"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Building2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 opacity-80" />
                      <span className="font-medium text-xs md:text-sm lg:text-base">
                        {exp.company}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Right Side - Experience Details */}
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedExperience}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-5 md:mb-6">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 mb-1.5 md:mb-2 leading-tight">
                          <span className="gradient-text">
                            {selectedExp.role[language]}
                          </span>{" "}
                          <span className="text-blue-400 text-lg md:text-xl lg:text-2xl">@ {selectedExp.company}</span>
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm lg:text-base">
                          {selectedExp.year}
                        </p>
                      </div>

                      <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                        {selectedExp.highlights[language].map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2.5 md:gap-3"
                          >
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-5 md:mt-6">
                        {selectedExp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-cyan-500/10 text-gray-300 text-xs font-medium px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
}
