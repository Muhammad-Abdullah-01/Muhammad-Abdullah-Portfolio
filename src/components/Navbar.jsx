import React, { useEffect, useState } from "react";
import { Home, User, Code2, GraduationCap, Mail } from "lucide-react";

const Github = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills-portfolio", label: "Portfolio", icon: Code2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleScrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 lg:left-8 z-50 flex flex-row md:flex-col items-center gap-3 md:gap-6 py-2 px-4 md:py-6 md:px-3 glass-panel rounded-full shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={`group relative p-2.5 md:p-3 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/40 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent"
            }`}
            aria-label={item.label}
          >
            <Icon size={18} className="transition-transform duration-300 group-hover:scale-110 md:w-[20px] md:h-[20px]" />
            
            {/* Tooltip */}
            <span className="absolute bottom-16 md:bottom-auto md:left-16 opacity-0 translate-y-2 md:translate-y-0 md:translate-x-[-10px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 border border-white/10 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none shadow-xl">
              {item.label}
            </span>
          </button>
        );
      })}

      {/* Divider */}
      <div className="hidden md:block w-8 h-[1px] bg-slate-800 my-2"></div>

      {/* GitHub Social */}
      <a
        href="https://github.com/Muhammad-Abdullah-01"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 md:p-3 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
        aria-label="GitHub Profile"
      >
        <Github size={18} className="hover:scale-110 transition-transform duration-300 md:w-[20px] md:h-[20px]" />
      </a>
    </nav>
  );
}
