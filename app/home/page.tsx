"use client";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <main>
      <Header />
      <Hero isLoading={isLoading} />
      <About isLoading={isLoading} />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
