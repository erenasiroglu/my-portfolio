"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// AnalyticsTracker'ı dinamik olarak import ediyoruz
const AnalyticsTracker = dynamic(() => import("./AnalyticsTracker"), {
  ssr: false,
});

export default function AnalyticsWrapper() {
  return <AnalyticsTracker />;
}
