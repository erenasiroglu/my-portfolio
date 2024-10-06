import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      rights: "All rights reserved.",
    },
    tr: {
      rights: "Tüm hakları saklıdır.",
    },
  };

  return (
    <footer className="py-8 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; {currentYear} Eren Nasıroğlu. {content[language].rights}
        </p>
      </div>
    </footer>
  );
}
