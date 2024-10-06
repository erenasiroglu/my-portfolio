"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layouts";
import Hero from "./components/Hero";
import About from "./components/About";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout className={poppins.className}>
        <Hero isLoading={isLoading} />
        <About isLoading={isLoading} />
      </Layout>
    </ThemeProvider>
  );
}
