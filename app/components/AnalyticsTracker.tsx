"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface AnalyticsEvent {
  eventName: string;
  eventData: Record<string, any>;
  timestamp: number;
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastActivityTime = useRef<number>(Date.now());
  const sessionStart = useRef<number>(Date.now());

  // Track page views
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_title: document.title,
      });

      // Custom event for detailed tracking
      const browserInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      window.gtag("event", "detailed_page_view", {
        page_path: pathname,
        browser_info: browserInfo,
        session_id:
          sessionStorage.getItem("session_id") || `session_${Date.now()}`,
      });

      // Set session ID if not exists
      if (!sessionStorage.getItem("session_id")) {
        const sessionId = `session_${Date.now()}`;
        sessionStorage.setItem("session_id", sessionId);
      }

      // Hotjar için sayfa görüntüleme takibi
      if (window.hj) {
        window.hj("event", `viewed_${pathname.replace(/\//g, "_")}`);
      }
    }
  }, [pathname]);

  // Track user activity
  useEffect(() => {
    const trackActivity = () => {
      lastActivityTime.current = Date.now();
    };

    // Track clicks, scrolls, and mouse movements
    document.addEventListener("click", trackActivity);
    document.addEventListener("scroll", trackActivity);
    document.addEventListener("mousemove", trackActivity);

    // Log activity before user leaves
    const handleBeforeUnload = () => {
      const timeOnPage = (Date.now() - sessionStart.current) / 1000;
      const timeSinceLastActivity =
        (Date.now() - lastActivityTime.current) / 1000;

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "session_data", {
          total_time_on_page: timeOnPage,
          time_since_last_activity: timeSinceLastActivity,
          page_path: pathname,
        });
      }
    };

    // Görünürlük takibi için Intersection Observer kurulumu
    const setupVisibilityTracking = () => {
      const sections = document.querySelectorAll("section[id]");

      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;

              // Google Analytics için bölüm görünürlük takibi
              if (window.gtag) {
                window.gtag("event", "section_visibility", {
                  event_category: "engagement",
                  event_label: `${sectionId}_visible`,
                  non_interaction: true,
                });
              }

              // Hotjar için bölüm görünürlük takibi
              if (window.hj) {
                window.hj("event", `section_viewed_${sectionId}`);
              }
            }
          });
        },
        { threshold: 0.5 }
      ); // En az %50'si görünür olduğunda tetikle

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    // Sayfa tamamen yüklendikten sonra görünürlük takibi başlat
    const timer = setTimeout(() => {
      setupVisibilityTracking();
    }, 1000);

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", trackActivity);
      document.removeEventListener("scroll", trackActivity);
      document.removeEventListener("mousemove", trackActivity);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timer);
    };
  }, [pathname]);

  // Dış bağlantı tıklamalarını takip et
  useEffect(() => {
    const trackExternalLinks = () => {
      const externalLinks = document.querySelectorAll('a[href^="http"]');

      externalLinks.forEach((link) => {
        if (!(link as HTMLElement).dataset.tracked) {
          link.addEventListener("click", (e) => {
            const href = (link as HTMLAnchorElement).href;
            const linkText = link.textContent || "unknown";

            // Google Analytics için dış link takibi
            if (window.gtag) {
              window.gtag("event", "external_link_click", {
                event_category: "outbound",
                event_label: linkText,
                value: href,
                transport_type: "beacon",
              });
            }

            // Hotjar için dış link takibi
            if (window.hj) {
              window.hj("event", "external_link_click", { link_url: href });
            }
          });

          (link as HTMLElement).dataset.tracked = "true";
        }
      });
    };

    // Sayfa değiştiğinde dış bağlantıları yeniden takip et
    const timer = setTimeout(trackExternalLinks, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  // This component doesn't render anything
  return null;
}

// Add this to global types.d.ts
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: any) => void;
  }
}
