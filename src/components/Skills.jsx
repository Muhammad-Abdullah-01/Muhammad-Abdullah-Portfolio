import React from "react";
import { Cpu, Terminal, Shield, Blocks } from "lucide-react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
      {/* Background neon ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-glow-radial pointer-events-none opacity-40"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Tech Graphic/Aesthetic */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[300px]">
          {/* Floating Neon Shapes representing a tech hand or portal */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Spinning glowing outer rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/40 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 rounded-full border border-neon-purple/40 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-8 rounded-full bg-neon-blue/5 blur-md"></div>
            
            {/* Core Tech Icons orbiting */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute text-neon-blue"
            >
              <Cpu size={48} className="animate-pulse" />
            </motion.div>
            
            {/* Satellite Icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-neon-cyan bg-slate-900 p-2.5 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Terminal size={20} />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 text-neon-purple bg-slate-900 p-2.5 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(179,0,255,0.2)]">
              <Shield size={20} />
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 text-neon-blue bg-slate-900 p-2.5 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Blocks size={20} />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">My Tech Stack</h3>
            <p className="text-xs text-slate-400 max-w-[280px]">
              Leveraging advanced libraries and modern frameworks to construct robust digital solutions.
            </p>
          </div>
        </div>

        {/* Right Column: Progress Bars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="mb-4">
            <span className="text-xs font-bold text-neon-cyan tracking-wider uppercase block mb-1">
              Expertise levels
            </span>
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </div>

          <div className="space-y-5">
            {skillsData.technical.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-white" style={{ color: skill.color }}>{skill.percentage}%</span>
                </div>
                
                {/* Track */}
                <div className="h-2 w-full bg-slate-900/80 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  {/* Glowing progress filling */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}80, 0 0 4px ${skill.color}`
                    }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
