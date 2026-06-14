import React, { useState } from "react";
import { User, ShieldCheck, Cpu, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [copied, setCopied] = useState(false);
  const stats = [
    { label: "Years Experience", value: "3+", icon: Cpu },
    { label: "Completed Projects", value: "10+", icon: Code },
    { label: "Certifications", value: "5+", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-12 max-w-6xl mx-auto scroll-mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
          <User className="text-neon-cyan" />
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Bio & Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">
            Driven by Passion, Guided by Code
          </h3>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            I am a full-stack developer dedicated to crafting modern, functional, and visually striking applications. 
            My journey in software engineering has allowed me to design intelligent systems like <strong>ProductPulse</strong> 
            and <strong>ScholarAssistant</strong>, aligning state-of-the-art AI tooling with user-friendly web design.
          </p>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            With a focus on performance, security, and elegant frontend solutions, I transform complex requirements into 
            seamless digital experiences. I am always eager to learn, adapt, and build the next frontier of web projects.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40">
              <span className="text-xs text-slate-500 block">Name</span>
              <span className="text-white font-medium">Muhammad Abdullah</span>
            </div>
            {/* <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40">
              <span className="text-xs text-slate-500 block">Location</span>
              <span className="text-white font-medium">Pakistan</span>
            </div> */}
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 relative">
              <span className="text-xs text-slate-500 block">Email</span>
              <a
                href="mailto:m.abdullah12589@gmail.com"
                onClick={() => {
                  navigator.clipboard.writeText("m.abdullah12589@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-neon-cyan hover:underline font-medium block truncate"
              >
                m.abdullah12589@gmail.com
              </a>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-950 border border-neon-cyan/40 text-neon-cyan text-[10px] px-2.5 py-1 rounded shadow-[0_0_10px_rgba(0,229,255,0.2)] font-semibold whitespace-nowrap z-20"
                  >
                    Email copied to clipboard!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40">
              <span className="text-xs text-slate-500 block">GitHub</span>
              <a href="https://github.com/Muhammad-Abdullah-01" target="_blank" rel="noreferrer" className="text-neon-cyan hover:underline font-medium block truncate">
                Muhammad-Abdullah-01
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Stats Panel & Creative Container */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="glass-panel-glow p-8 rounded-3xl space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-3">
              Core Philosophies
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2"></div>
                <p className="text-sm text-slate-300">
                  <strong>Clean Architecture</strong>: Structuring maintainable and testable code.
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2"></div>
                <p className="text-sm text-slate-300">
                  <strong>User-First Design</strong>: Enhancing user satisfaction by improving usability and accessibility.
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2"></div>
                <p className="text-sm text-slate-300">
                  <strong>Continuous Adaptation</strong>: Constantly learning new paradigms and refining tools.
                </p>
              </li>
            </ul>
          </div>

          {/* Stats Flex */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="glass-panel p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                  <Icon size={20} className="text-neon-cyan mb-2" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
