import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const roles = ["Full Stack Developer", "Software Engineer", "AI Enthusiast", "Creative Creator"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(200);
          return;
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollToPortfolio = () => {
    const element = document.getElementById("skills-portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 py-20 overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-radial rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-radial-purple rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Glowing Profile Avatar Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-36 h-36 md:w-44 md:h-44 mb-8 group"
        >
          {/* Neon outer rotating ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue via-transparent to-neon-purple p-[3px] animate-spin" style={{ animationDuration: '8s' }}>
            <div className="w-full h-full rounded-full bg-dark-bg"></div>
          </div>
          {/* Neon glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-300"></div>
          
          {/* Avatar Image */}
          <div className="absolute inset-2 rounded-full overflow-hidden border border-white/10 bg-slate-900">
            <img
              src="/Muhammad%20Abdullah.jpg"
              alt="Muhammad Abdullah"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Name and Typing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent text-glow-blue">Muhammad Abdullah</span>
          </h1>

          <div className="text-xl md:text-3xl font-medium text-slate-300 mb-6 h-10">
            I'm a <span className="text-neon-cyan font-semibold border-r-2 border-neon-cyan animate-pulse">{currentText}</span>
          </div>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build responsive, high-performance web experiences using cutting-edge technologies. 
            Passionate about clean architecture, dynamic UI animations, and user-centric systems.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={handleScrollToPortfolio}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            View My Work
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/20 hover:border-neon-cyan bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Download CV
            <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Floating indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs tracking-widest text-slate-500 uppercase">Scroll Down</span>
        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></div>
      </div>
    </section>
  );
}
