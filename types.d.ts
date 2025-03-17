// Global window interface extensions
interface Window {
  gtag: (command: string, action: string, params?: any) => void;
  dataLayer: any[];
  hj?: (command: string, ...args: any[]) => void;
}

// Analytics event interfaces
interface BaseAnalyticsEvent {
  timestamp: number;
  sessionId: string;
  pageUrl: string;
}

interface PageViewEvent extends BaseAnalyticsEvent {
  type: 'pageview';
  referrer: string;
  title: string;
}

interface UserInteractionEvent extends BaseAnalyticsEvent {
  type: 'interaction';
  element: string;
  action: 'click' | 'scroll' | 'hover';
  position?: { x: number, y: number };
}

interface SessionEvent extends BaseAnalyticsEvent {
  type: 'session';
  duration: number;
  browser: string;
  os: string;
  device: string;
  screenSize: string;
  language: string;
  timezone: string;
  location?: {
    country?: string;
    city?: string;
  };
}

type AnalyticsEvent = PageViewEvent | UserInteractionEvent | SessionEvent; 