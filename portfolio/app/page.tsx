"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <LoadingScreen
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>

      <Footer />
    </>
  );
}