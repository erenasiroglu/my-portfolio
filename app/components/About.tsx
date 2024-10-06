"use client";
import { motion } from "framer-motion";
import { Skeleton } from "./ui/skeleton";
import { Briefcase, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

interface AboutProps {
  isLoading: boolean;
}

interface AboutProps {
  isLoading: boolean;
}

export default function About({ isLoading }: AboutProps) {
  const { theme } = useTheme();
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      description:
        "I'm a web developer constantly evolving in the field, with mobile and backend experience using React Native and Node.js. As a Management Information Systems graduate (2024), I've been working professionally since November 2022.",
      experience: "Professional Experience",
    },
    tr: {
      title: "Hakkımda",
      description:
        "Web alanında sürekli gelişen, React Native ve Node.js ile mobil ve backend deneyimi olan bir yazılım geliştiriciyim. Yönetim Bilişim Sistemleri mezunu (2024) olarak, 2022 Kasım'dan beri profesyonel olarak çalışıyorum.",
      experience: "Profesyonel Deneyim",
    },
  };

  const experiences = [
    {
      company: "BeforeSunset AI",
      year: "07/2024 - Present",
      role: {
        en: "Frontend Developer",
        tr: "Frontend Geliştirici",
      },
      description: {
        en: "BeforeSunset AI is a project that uses artificial intelligence to help users better plan their time. We develop solutions using React, Next.js, Zustand, and Supabase.",
        tr: "BeforeSunset AI, kullanıcıların zamanlarını daha iyi planlamalarına yardımcı olmak için yapay zeka kullanan bir projedir. React, Next.js, Zustand ve Supabase kullanarak çözümler geliştiriyoruz.",
      },
      technologies: ["React", "Next.js", "Zustand", "Supabase"],
      highlights: {
        en: ["Feature development", "Bug fixing", "Task documentation"],
        tr: ["Özellik geliştirme", "Hata düzeltme", "Görev dokümantasyonu"],
      },
    },
    {
      company: "GEMAS Pool Technology",
      year: "03/2024 - 06/2024",
      role: {
        en: "Fullstack Developer",
        tr: "Fullstack Geliştirici",
      },
      description: {
        en: "Gemas is a company that produces pool technologies. In this project, I was involved in creating an e-commerce site using PHP Laravel.",
        tr: "Gemas, havuz teknolojileri üreten bir şirkettir. Bu projede, PHP Laravel kullanarak bir e-ticaret sitesi oluşturmada yer aldım.",
      },
      technologies: ["PHP", "Laravel"],
      highlights: {
        en: ["Frontend development", "Admin panel backend"],
        tr: ["Frontend geliştirme", "Yönetici paneli backend"],
      },
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
        "Python",
        "NumPy",
        "Matplotlib",
        "Pandas",
      ],
      highlights: {
        en: [
          "Feature development",
          "Admin panel creation",
          "UI redesign",
          "Analytics integration",
          "Data analysis",
        ],
        tr: [
          "Özellik geliştirme",
          "Yönetici paneli oluşturma",
          "Kullanıcı arayüzü yeniden tasarımı",
          "Analitik entegrasyonu",
          "Veri analizi",
        ],
      },
    },
  ];

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:from-blue-900 dark:to-purple-900 dark:text-blue-200">
      {tech}
    </span>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-12 max-w-3xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        {content[language].title}
      </h2>
      {isLoading ? (
        <Skeleton className="h-64 w-full" />
      ) : (
        <div className="space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border-b pb-6 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
              <Briefcase className="mr-3 text-blue-500" size={20} />
              {language === "en" ? "Web Developer" : "Web Geliştirici"}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {content[language].description}
            </p>
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-gray-200">
              <Users className="mr-3 text-purple-500" size={20} />
              {content[language].experience}
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "border rounded-lg p-4 border-gray-200 dark:border-gray-700 transition-all duration-300",
                    expandedExperience === index
                      ? "shadow-md"
                      : "hover:shadow-sm"
                  )}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setExpandedExperience(
                        expandedExperience === index ? null : index
                      )
                    }
                  >
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                      {exp.company}
                    </h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mr-2">
                        {exp.year}
                      </span>
                      {expandedExperience === index ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </div>
                  </div>
                  {expandedExperience === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                        {exp.role[language]}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {exp.description[language]}
                      </p>
                      <div className="mb-3">
                        {exp.technologies.map((tech, i) => (
                          <TechBadge key={i} tech={tech} />
                        ))}
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                        {exp.highlights[language].map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
