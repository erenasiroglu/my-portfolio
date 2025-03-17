"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

interface Project {
  name: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  technologies: string[];
  github_url: string;
  live_url?: string;
  isNew?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: {
      en: "Expense Tracker App with Expo and Firebase",
      tr: "Gider Takip Uygulaması (Expo ve Firebase)",
    },
    isNew: true,
    description: {
      en: "This project is an expense tracker application developed using Expo and Firebase. The application allows users to add, delete, and update expenses, as well as view their total expenses.",
      tr: "Bu proje, Expo ve Firebase kullanılarak geliştirilen bir gider takip uygulamasıdır. Uygulama, kullanıcıların gider eklemelerine, silmelerine ve güncellemelerine izin verirken toplam giderlerini görüntülemelerine olanak tanır.",
    },
    technologies: ["Expo", "Firebase", "React Native", "Mobile Development"],
    github_url: "https://github.com/erenasiroglu/expense-tracker-app",
  },
  {
    name: {
      en: "Chatbot with Ollama",
      tr: "AI Chatbot",
    },
    isNew: false,
    description: {
      en: "This project is a chatbot application based on Ollama. The frontend is developed with React and Vite, while the backend uses the Hono framework running on Node.js.",
      tr: "Bu proje, Ollama tabanlı bir sohbet botu uygulamasıdır. Ön uç, React ve Vite ile geliştirilirken, arka uç, Node.js üzerinde çalışan Hono çerçevesini kullanır.",
    },
    technologies: ["Vite", "Ollama", "Node.js", "Hono", "React", "OpenAI"],
    github_url: "https://github.com/erenasiroglu/chatbot-ollama",
    live_url:
      "https://react-ollama-frontend-erenasiroglus-projects.vercel.app/",
  },
  {
    name: {
      en: "All The Stars",
      tr: "Tüm Yıldızlar",
    },
    description: {
      en: "In this project, I developed an e-commerce website utilizing Node.js, MongoDB, and Express.js for the backend, and React and CSS for the frontend. Additionally, I designed and implemented an admin panel for the project, establishing the necessary frontend-to-backend connections.",
      tr: "Yıldızlar ve gezegenler hakkında bilgi veren uygulama",
    },
    technologies: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "React",
      "Tailwind",
      "Fullstack Development",
    ],
    github_url: "https://github.com/erenasiroglu/allthestars",
    live_url: "https://all-the-stars.vercel.app/",
  },
  {
    name: {
      en: "Quiz App",
      tr: "Sınav Uygulaması",
    },
    description: {
      en: "Quiz app consisting of 10 questions with options A-B-C-D. No answer can be given in the first 10 seconds, and there is no return to the question. At the end of the quiz, a table is created where you can see your answers.",
      tr: "10 sorudan oluşan, A-B-C-D seçenekleri olan sınav uygulaması. İlk 10 saniye içinde cevap verilemez ve soruya geri dönüş yapılamaz. Sınav sonunda cevaplarınızı görebileceğiniz bir tablo oluşturulur.",
    },
    technologies: ["React", "Javascript", "SCSS"],
    github_url: "https://github.com/erenasiroglu/quiz-app",
    live_url: "https://quiz-app-erenasiroglus-projects.vercel.app/",
  },

  {
    name: {
      en: "Landing Page",
      tr: "Açılış Sayfası",
    },
    description: {
      en: "I created an creative landing page using React and Tailwind CSS that is mobile-responsive, including a header and footer, with a total of 9 sections.",
      tr: "Toplamda 9 bölümden oluşan, mobil uyumlu, başlık ve altbilgi içeren, React ve Tailwind CSS kullanarak yaratıcı bir açılış sayfası oluşturdum.",
    },
    technologies: [
      "React",
      "Tailwind CSS",
      "Redux",
      "Responsive Design",
      "Routing",
    ],
    github_url: "https://github.com/erenasiroglu/landing-page",
    live_url: "https://landing-page-erenasiroglus-projects.vercel.app/",
  },
  {
    name: {
      en: "Timer Craft",
      tr: "Zaman Uygulaması",
    },
    description: {
      en: "A simple timer application that allows you to set a timer for a specific time. The application is developed using React and Redux.",
      tr: "Belirli bir süre için bir zamanlayıcı ayarlamanıza izin veren basit bir zamanlayıcı uygulaması. Uygulama, React ve Redux kullanılarak geliştirilmiştir.",
    },
    technologies: ["React", "Redux", "UI Design", "Storybook", "Math.js"],
    github_url: "https://github.com/erenasiroglu/case-study",
    live_url: "https://case-study-before-sunset.vercel.app/",
  },
  {
    name: {
      en: "Table Design",
      tr: "Tablo Tasarımı",
    },
    description: {
      en: "A table design project that I developed using React and Tailwind CSS. The project includes create a table with sorting and filtering features.",
      tr: "React ve Tailwind CSS kullanarak geliştirdiğim bir tablo tasarım projesi. Proje, sıralama ve filtreleme özelliklerine sahip bir tabloyu oluşturmayu içerir.",
    },
    technologies: ["Shadcn", "React", "Tailwind CSS", "UI Design", "MongoDB"],
    github_url: "https://github.com/erenasiroglu/case-study",
  },
  {
    name: {
      en: "Getir Clone App",
      tr: "Getir Klon Uygulaması",
    },
    description: {
      en: "Getir Clone App is a clone of the Getir app. The app is developed using React Native and Expo.",
      tr: "Getir Klon Uygulaması, Getir uygulamasının bir klonudur. Uygulama, React Native ve Expo kullanılarak geliştirilmiştir.",
    },
    technologies: ["React Native", "Expo", "UI Design", "Mobile Development"],
    github_url: "https://github.com/erenasiroglu/case-study",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Bileşen yüklendiğinde Analytics takibi
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Analytics için Projects görüntüleme takibi
      if (window.gtag) {
        window.gtag("event", "section_view", {
          event_category: "engagement",
          event_label: "projects_section",
          non_interaction: true,
        });
      }

      // Hotjar için Projects görüntüleme takibi
      if (window.hj) {
        window.hj("event", "projects_section_viewed");
      }
    }
  }, []);

  // Proje genişletme olayını takip etme
  const handleProjectExpand = (index: number) => {
    const newExpandedState = expandedProject === index ? null : index;
    setExpandedProject(newExpandedState);

    if (newExpandedState !== null && typeof window !== "undefined") {
      const projectName = PROJECTS[index].name[language];

      // Google Analytics için proje genişletme takibi
      if (window.gtag) {
        window.gtag("event", "project_expand", {
          event_category: "engagement",
          event_label: projectName,
        });
      }

      // Hotjar için proje genişletme takibi
      if (window.hj) {
        window.hj("event", `project_expanded_${index}`);
      }
    }
  };

  // Proje bağlantı tıklamalarını takip etme
  const trackLinkClick = (type: "github" | "live", projectName: string) => {
    if (typeof window !== "undefined") {
      // Google Analytics için link tıklama takibi
      if (window.gtag) {
        window.gtag("event", "link_click", {
          event_category: "outbound",
          event_label: `${type}_link_${projectName}`,
          transport_type: "beacon",
        });
      }

      // Hotjar için link tıklama takibi
      if (window.hj) {
        window.hj("event", `${type}_link_clicked_${projectName}`);
      }
    }
  };

  // "Daha fazla göster" butonunu takip etme
  const handleShowMoreToggle = () => {
    setShowAllProjects(!showAllProjects);

    if (typeof window !== "undefined") {
      const action = !showAllProjects ? "show_more" : "show_less";

      // Google Analytics için "daha fazla göster" takibi
      if (window.gtag) {
        window.gtag("event", action, {
          event_category: "engagement",
          event_label: "projects",
        });
      }

      // Hotjar için "daha fazla göster" takibi
      if (window.hj) {
        window.hj("event", `projects_${action}`);
      }
    }
  };

  const content = {
    en: {
      title: "Projects",
      showMore: "Click to see more projects",
      showLess: "Show less projects",
    },
    tr: {
      title: "Projeler",
      showMore: "Daha fazla proje görmek için tıklayın",
      showLess: "Daha az proje göster",
    },
  };

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="inline-block bg-gradient-to-r from-blue-900 to-purple-900 text-gray-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
      {tech}
    </span>
  );

  const visibleProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        {content[language].title}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "border rounded-lg p-3 border-gray-700 transition-all duration-300 relative",
              expandedProject === index
                ? "shadow-md border-blue-500/30"
                : "hover:shadow-sm hover:border-purple-500/30",
              project.isNew && "animate-border-pulse"
            )}
            style={{
              background: project.isNew
                ? "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
                : "transparent",
            }}
          >
            {project.isNew && (
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.5,
                }}
                className="absolute -top-3 -left-3 bg-blue-500/10 text-blue-500 text-xs font-medium px-2 py-0.5 rounded-md
                border border-blue-500/20
                backdrop-blur-sm"
              >
                New Project Alert 🚨
              </motion.div>
            )}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleProjectExpand(index)}
            >
              <h4 className="font-bold text-sm sm:text-base text-gray-100">
                {project.name[language]}
              </h4>
              <div className="flex items-center">
                {project.live_url && (
                  <Link
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      trackLinkClick("live", project.name[language]);
                    }}
                  >
                    <ExternalLink size={16} />
                  </Link>
                )}
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 mr-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackLinkClick("github", project.name[language]);
                  }}
                >
                  <Github size={16} />
                </Link>
                {expandedProject === index ? (
                  <ChevronUp className="text-gray-500" size={16} />
                ) : (
                  <ChevronDown className="text-gray-500" size={16} />
                )}
              </div>
            </div>
            {expandedProject === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3"
              >
                <p className="text-sm sm:text-base text-gray-300 mb-2">
                  {project.description[language]}
                </p>
                <div className="mb-2">
                  {project.technologies.map((tech, i) => (
                    <TechBadge key={i} tech={tech} />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      {PROJECTS.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <button
            onClick={handleShowMoreToggle}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            {showAllProjects
              ? content[language].showLess
              : content[language].showMore}
            <ChevronDown
              className={`ml-1 w-4 h-4 transition-transform ${
                showAllProjects ? "rotate-180" : ""
              }`}
            />
          </button>
        </motion.div>
      )}
    </motion.section>
  );
}
