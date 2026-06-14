import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

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

export default function Portfolio() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center md:text-left">
        <span className="text-xs font-bold text-neon-cyan tracking-wider uppercase block mb-1">
          Recent work
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
          <Code2 size={24} className="text-neon-cyan" />
          My Portfolio
        </h3>
        <p className="text-xs text-slate-400 mt-2">
          A collection of my recent projects, including AI platforms and inventory systems.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group glass-panel rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300"
          >
            {/* Project Image & Status */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90"></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-900/90 border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider text-neon-cyan shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></span>
                {project.status}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-bold px-2 py-0.5 bg-slate-900/50 text-slate-400 border border-white/5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="px-6 pb-6 pt-2 grid grid-cols-1 gap-3 border-t border-white/5 bg-slate-900/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 border border-white/10 hover:border-white/30 bg-slate-950/40 hover:bg-slate-900 text-slate-300 hover:text-white py-2 px-3 rounded-lg text-xs font-semibold hover:scale-[1.02] transition-all duration-300"
              >
                <Github size={14} />
                GitHub
              </a>
              {/* <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-950 py-2 px-3 rounded-lg text-xs font-bold shadow-[0_0_10px_rgba(0,229,255,0.15)] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                <ExternalLink size={14} />
                Live Demo
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
