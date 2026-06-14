import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./styles/globals.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Scrollspy effect
  useEffect(() => {
    const sectionIds = ["home", "about", "skills-portfolio", "education", "contact"];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Custom margins to trigger when section occupies main view
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 selection:bg-neon-cyan/30 selection:text-white">
      {/* Background grids and abstract glows */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Floating Vertical Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full min-h-screen pb-24 md:pb-8 md:pl-24 lg:pl-32 md:pr-8 lg:pr-12">
        {/* Home / Hero */}
        <Hero />

        {/* About & Languages Section (stacked grid on this page) */}
        <div className="max-w-6xl mx-auto space-y-12">
          <About />
          
          <div id="languages-anchor" className="px-4 md:px-12">
            <Languages />
          </div>
        </div>

        {/* Skills & Portfolio Section */}
        <section id="skills-portfolio" className="py-20 px-4 md:px-12 max-w-6xl mx-auto space-y-16 scroll-mt-10">
          <Skills />
          <Portfolio />
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-20 px-4 md:px-12 max-w-6xl mx-auto scroll-mt-10">
          <Education />
        </section>

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Custom micro-footer */}
      <footer className="relative z-10 w-full text-center py-8 border-t border-white/5 bg-slate-950/20 text-xs text-slate-500 md:pl-24 lg:pl-32 md:pr-8">
        <p>&copy; {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.</p>
        <p className="mt-1 text-[10px] text-slate-600">Built with React + Vite + Tailwind CSS</p>
      </footer>
    </div>
  );
}
