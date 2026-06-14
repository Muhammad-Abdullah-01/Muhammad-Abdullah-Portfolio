import React from "react";
import { Languages as LangIcon } from "lucide-react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

export default function Languages() {
  // Flag helper
  const getFlagEmoji = (code) => {
    if (code === "US") return "🇺🇸";
    if (code === "PK") return "🇵🇰";
    if (code === "ZH") return "🇨🇳";
    if (code === "FR") return "🇫🇷";
    if (code === "AR") return "🇸🇦";
    return "🌐";
  };

  return (
    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden h-full">
      {/* Background neon ambient glow */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-glow-radial-purple pointer-events-none opacity-30"></div>

      <div className="flex flex-col h-full justify-between">
        <div className="mb-6">
          <span className="text-xs font-bold text-neon-purple tracking-wider uppercase block mb-1">
            Communication
          </span>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <LangIcon size={22} className="text-neon-purple" />
            Languages
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            The languages I speak and my proficiency level in each.
          </p>
        </div>

        <div className="space-y-6 my-auto">
          {skillsData.languages.map((lang, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="text-lg" role="img" aria-label={lang.name}>
                    {getFlagEmoji(lang.code)}
                  </span>
                  {lang.name}
                </span>
                <span className="text-neon-purple">{lang.percentage}%</span>
              </div>
              
              {/* Track */}
              <div className="h-2 w-full bg-slate-900/80 rounded-full overflow-hidden border border-white/5 p-[1px]">
                {/* Purple glowing progress filling */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: "#b300ff",
                    boxShadow: "0 0 10px rgba(179, 0, 255, 0.8), 0 0 4px #b300ff"
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center border-t border-white/5 pt-4">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            Always learning and improving my language skills
          </p>
        </div>
      </div>
    </div>
  );
}
