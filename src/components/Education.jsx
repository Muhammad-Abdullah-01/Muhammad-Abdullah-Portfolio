import React from "react";
import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { educationData, certificationsData } from "../data/skills";

export default function Education() {
  return (
    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-glow-radial pointer-events-none opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Panel: Education Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-neon-cyan" size={24} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-3 pl-6 space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                </span>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neon-cyan">
                    <Calendar size={12} />
                    {edu.duration}
                  </div>
                  <h4 className="text-lg font-bold text-white">{edu.title}</h4>
                  <span className="text-xs text-slate-300 block">{edu.institution}</span>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Panel: Certifications */}
        {/* <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-neon-cyan" size={24} />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {certificationsData.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-slate-950/40 hover:bg-slate-900/40 hover:border-neon-cyan/30 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="space-y-1 flex-grow">
                  <h4 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <div className="flex justify-between items-center pr-4">
                    <span className="text-xs text-slate-400">{cert.issuer}</span>
                    <span className="text-[10px] text-slate-500 font-semibold">{cert.date}</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 group-hover:text-neon-cyan group-hover:border-neon-cyan/30 transition-all duration-300">
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>

          {/* <div className="mt-8 p-4 rounded-xl border border-dashed border-slate-800 text-center">
            <span className="text-[10px] text-slate-500 tracking-widest uppercase block animate-pulse">
              ⚡ Always learning and growing
            </span>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
