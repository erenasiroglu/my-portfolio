"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Github, ExternalLink, Check } from "lucide-react";
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
  github_url?: string;
  live_url?: string;
  app_store_url?: string;
  isNew?: boolean;
  highlights?: {
    en: string[];
    tr: string[];
  };
}

const PROJECTS: Project[] = [
  {
    name: {
      en: "Tadado: AI Party Guessing Game",
      tr: "Tadado: AI Parti Tahmin Oyunu",
    },
    isNew: true,
    description: {
      en: "Tadado is an iOS mobile party game with a fast-paced taboo-style word guessing experience for teams. I designed it to deliver quick rounds, endless replayability with AI-generated cards, and a polished mobile-first game flow.",
      tr: "Tadado, takımlar için hızlı tempolu tabu tarzı deneyim sunan bir iOS mobil parti oyunudur. Hızlı turlar, AI ile üretilen sınırsız kartlar ve mobil odaklı akıcı oyun akışıyla geliştirdim.",
    },
    live_url: "https://www.tadado.app/en",
    app_store_url:
      "https://apps.apple.com/tr/app/tadado-ai-party-guessing-game/id6753135485",
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "ASO",
      "SEO",
      "Content Marketing",
    ],
    highlights: {
      en: [
        "Built a modern taboo-style game flow: describe, guess, and win under time pressure",
        "Added AI custom deck generation to keep content fresh and highly replayable",
        "Shipped category-based decks, turn scoring, and pass-limit mechanics for balanced game rounds",
      ],
      tr: [
        "Süre baskısı altında anlat-tahmin et-kazan akışıyla modern tabu tarzı oyun deneyimi geliştirdim",
        "İçeriği sürekli taze tutmak için AI destekli özel deste üretimi ekledim",
        "Dengeli oyun turları için kategori bazlı desteler, tur skorlama ve pas limiti mekaniklerini uyguladım",
      ],
    },
  },
  {
    name: {
      en: "Expense Tracker App with Expo and Firebase",
      tr: "Gider Takip Uygulaması (Expo ve Firebase)",
    },
    description: {
      en: "This project is an expense tracker application developed using Expo and Firebase. The application allows users to add, delete, and update expenses, as well as view their total expenses.",
      tr: "Bu proje, Expo ve Firebase kullanılarak geliştirilen bir gider takip uygulamasıdır. Uygulama, kullanıcıların gider eklemelerine, silmelerine ve güncellemelerine izin verirken toplam giderlerini görüntülemelerine olanak tanır.",
    },
    technologies: ["Expo", "Firebase", "React Native", "Mobile Development"],
    github_url: "https://github.com/erenasiroglu/expense-tracker-app",
    highlights: {
      en: [
        "Developed expense tracker mobile app using Expo and React Native",
        "Integrated Firebase for real-time data synchronization",
        "Implemented user authentication and expense management features",
      ],
      tr: [
        "Expo ve React Native kullanarak gider takip mobil uygulaması geliştirdim",
        "Gerçek zamanlı veri senkronizasyonu için Firebase entegrasyonu yaptım",
        "Kullanıcı kimlik doğrulama ve gider yönetimi özellikleri uyguladım",
      ],
    },
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
    highlights: {
      en: [
        "Built AI chatbot application with React and Vite",
        "Integrated Ollama API for AI responses",
        "Developed backend using Hono framework on Node.js",
      ],
      tr: [
        "React ve Vite ile AI chatbot uygulaması geliştirdim",
        "AI yanıtları için Ollama API entegrasyonu yaptım",
        "Node.js üzerinde Hono framework kullanarak backend geliştirdim",
      ],
    },
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
      "Full-Stack Development",
    ],
    github_url: "https://github.com/erenasiroglu/allthestars",
    live_url: "https://all-the-stars.vercel.app/",
    highlights: {
      en: [
        "Developed full-stack e-commerce platform with Node.js and MongoDB",
        "Built responsive frontend with React and Tailwind CSS",
        "Implemented admin panel for product management",
      ],
      tr: [
        "Node.js ve MongoDB ile full-stack e-ticaret platformu geliştirdim",
        "React ve Tailwind CSS ile responsive frontend oluşturdum",
        "Ürün yönetimi için admin paneli uyguladım",
      ],
    },
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
    highlights: {
      en: [
        "Built interactive quiz application with React",
        "Implemented timer functionality and question navigation",
        "Created results table with answer tracking",
      ],
      tr: [
        "React ile interaktif quiz uygulaması geliştirdim",
        "Zamanlayıcı fonksiyonu ve soru navigasyonu uyguladım",
        "Cevap takibi ile sonuç tablosu oluşturdum",
      ],
    },
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
    highlights: {
      en: [
        "Created modern landing page with React and Tailwind CSS",
        "Implemented responsive design for all devices",
        "Built 9-section layout with smooth navigation",
      ],
      tr: [
        "React ve Tailwind CSS ile modern landing page oluşturdum",
        "Tüm cihazlar için responsive tasarım uyguladım",
        "Yumuşak navigasyon ile 9 bölümlü düzen oluşturdum",
      ],
    },
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
    highlights: {
      en: [
        "Developed timer application with React and Redux",
        "Implemented state management with Redux",
        "Created UI components with Storybook",
      ],
      tr: [
        "React ve Redux ile zamanlayıcı uygulaması geliştirdim",
        "Redux ile state management uyguladım",
        "Storybook ile UI bileşenleri oluşturdum",
      ],
    },
  },
  {
    name: {
      en: "Table Design",
      tr: "Tablo Tasarımı",
    },
    description: {
      en: "A table design project that I developed using React and Tailwind CSS. The project includes create a table with sorting and filtering features.",
      tr: "React ve Tailwind CSS kullanarak geliştirdiğim bir tablo tasarım projesi. Proje, sıralama ve filtreleme özelliklerine sahip bir tabloyu oluşturmayı içerir.",
    },
    technologies: ["Shadcn", "React", "Tailwind CSS", "UI Design", "MongoDB"],
    github_url: "https://github.com/erenasiroglu/case-study",
    highlights: {
      en: [
        "Built table component with sorting and filtering",
        "Implemented data visualization with React",
        "Created responsive table design with Tailwind CSS",
      ],
      tr: [
        "Sıralama ve filtreleme ile tablo bileşeni oluşturdum",
        "React ile veri görselleştirme uyguladım",
        "Tailwind CSS ile responsive tablo tasarımı oluşturdum",
      ],
    },
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
    highlights: {
      en: [
        "Developed mobile app clone using React Native and Expo",
        "Implemented UI design matching the original app",
        "Built mobile-optimized user interface",
      ],
      tr: [
        "React Native ve Expo kullanarak mobil uygulama klonu geliştirdim",
        "Orijinal uygulamaya uygun UI tasarımı uyguladım",
        "Mobil optimize edilmiş kullanıcı arayüzü oluşturdum",
      ],
    },
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number>(0);

  // Bileşen yüklendiğinde Analytics takibi
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "section_view", {
          event_category: "engagement",
          event_label: "projects_section",
          non_interaction: true,
        });
      }
      if (window.hj) {
        window.hj("event", "projects_section_viewed");
      }
    }
  }, []);

  // Proje seçimi takibi
  const handleProjectSelect = (index: number) => {
    setSelectedProject(index);
    if (typeof window !== "undefined") {
      const projectName = PROJECTS[index].name[language];
      if (window.gtag) {
        window.gtag("event", "project_select", {
          event_category: "engagement",
          event_label: projectName,
        });
      }
      if (window.hj) {
        window.hj("event", `project_selected_${index}`);
      }
    }
  };

  // Proje bağlantı tıklamalarını takip etme
  const trackLinkClick = (
    type: "github" | "live" | "app_store",
    projectName: string
  ) => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "link_click", {
          event_category: "outbound",
          event_label: `${type}_link_${projectName}`,
          transport_type: "beacon",
        });
      }
      if (window.hj) {
        window.hj("event", `${type}_link_clicked_${projectName}`);
      }
    }
  };

  const content = {
    en: {
      title: "Projects",
    },
    tr: {
      title: "Projeler",
    },
  };

  const selectedProj = PROJECTS[selectedProject];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="projects"
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

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Left Side - Project List */}
        <div className="flex md:flex-col gap-2 md:gap-0 border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-8 md:min-w-[250px] overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {PROJECTS.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => handleProjectSelect(index)}
              className={cn(
                "flex items-center gap-2.5 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-left transition-all whitespace-nowrap md:whitespace-normal flex-shrink-0 min-h-[44px]",
                selectedProject === index
                  ? "bg-gray-800/50 text-white"
                  : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/30 active:bg-gray-800/40"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 opacity-80" />
              <span className="font-medium text-xs md:text-sm lg:text-base flex-1">
                {project.name[language]}
              </span>
              {project.isNew && (
                <span className="ml-2 bg-blue-500/20 text-blue-400 text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-500/30 flex-shrink-0">
                  New
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Right Side - Project Details */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-5 md:mb-6 flex items-start justify-between gap-3 md:gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 mb-1.5 md:mb-2 leading-tight">
                    <span className="gradient-text break-words">{selectedProj.name[language]}</span>
                  </h4>
                  {selectedProj.isNew && (
                    <span className="inline-block bg-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full border border-blue-500/30 mb-2">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 flex-shrink-0">
                  {selectedProj.live_url && (
                    <Link
                      href={selectedProj.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs md:text-sm font-medium text-blue-300 transition-all hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-blue-200"
                      onClick={() => trackLinkClick("live", selectedProj.name[language])}
                    >
                      Website
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                  {selectedProj.app_store_url && (
                    <Link
                      href={selectedProj.app_store_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs md:text-sm font-medium text-cyan-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:text-cyan-200"
                      onClick={() => trackLinkClick("app_store", selectedProj.name[language])}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 transition-transform group-hover:scale-110"
                        fill="currentColor"
                      >
                        <path d="M16.365 12.635c.023 2.346 2.06 3.126 2.083 3.136-.017.055-.326 1.12-1.074 2.217-.646.948-1.317 1.892-2.375 1.911-1.04.02-1.374-.617-2.563-.617-1.188 0-1.56.598-2.543.637-1.02.039-1.797-1.024-2.448-1.968-1.33-1.925-2.347-5.441-.98-7.818.68-1.18 1.896-1.926 3.214-1.945 1.002-.02 1.949.676 2.563.676.615 0 1.77-.836 2.982-.713.508.021 1.933.205 2.848 1.545-.074.045-1.7.995-1.687 2.94zm-2.318-5.292c.542-.658.91-1.573.81-2.488-.78.031-1.726.52-2.287 1.178-.503.58-.942 1.509-.824 2.398.87.068 1.759-.443 2.301-1.088z" />
                      </svg>
                      App Store
                    </Link>
                  )}
                  {selectedProj.github_url && (
                    <Link
                      href={selectedProj.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors p-1.5 md:p-1 -m-1.5 md:-m-1"
                      onClick={() => trackLinkClick("github", selectedProj.name[language])}
                    >
                      <Github className="w-5 h-5 md:w-5 md:h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                {selectedProj.description[language]}
              </p>

              {selectedProj.highlights && (
                <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                  {selectedProj.highlights[language].map((highlight, index) => (
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
              )}

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-5 md:mt-6">
                {selectedProj.technologies.map((tech, i) => (
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
    </motion.section>
  );
}
