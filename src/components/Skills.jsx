import React from "react";

// Brand SVGs matching official logos
const SVGIcons = {
  html: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#e34f26] fill-current">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562h11.125l-.227-2.5H6.05l.69 7.562h7.822l-.28 3.09-2.316.626-2.33-.632-.148-1.656H7.018l.29 3.25 4.67 1.263 4.656-1.263.633-7.063H8.531z" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#1572b6] fill-current">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.03 5h11.11l-.22 2.5H9.27l.22 2.5h7.18l-.63 7.06-4.04 1.12-4-1.12-.26-3h2.5l.13 1.5 1.63.44 1.64-.44.27-3H6.78L6.53 5z" />
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#f7df1e] fill-current rounded-sm">
      <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-.84-.712-1.428-1.674-1.802-.958-.382-2.03-.614-3.21-.698-.328-.022-.646-.036-.956-.046-.226-.008-.432-.016-.622-.022-.508-.016-.866-.062-1.074-.14-.236-.092-.358-.236-.368-.438-.01-.194.1-.384.32-.57.218-.184.582-.278 1.092-.278.472 0 .848.084 1.13.252.28.168.498.428.654.774h2.52c-.174-.992-.72-1.77-1.638-2.336-.918-.564-2.128-.846-3.632-.846-1.498 0-2.678.3-3.538.9-.86.6-1.29 1.404-1.29 2.41 0 .976.388 1.718 1.16 2.228.772.51 1.944.824 3.518.94.394.028.784.048 1.17.06.312.01.604.02.876.03.626.022 1.066.082 1.318.182.254.102.38.272.38.51 0 .26-.144.476-.432.65-.288.174-.75.262-1.386.262-.774 0-1.344-.132-1.708-.396-.366-.264-.594-.658-.684-1.182h-2.58c.114 1.258.694 2.226 1.74 2.904 1.046.678 2.458 1.018 4.236 1.018 1.708 0 3.03-.326 3.966-.976.936-.65 1.404-1.504 1.404-2.564 0-1.15-.46-1.956-1.38-2.42zM10.428 10h-2.52v6.626c0 1.264-.326 2.05-.978 2.358-.65.308-1.508.384-2.574.228l-.228 2.1c1.236.42 2.478.27 3.234-.45.756-.72 1.066-2.036 1.066-3.95V10z" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00d8ff] fill-none stroke-current" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#339933] fill-current">
      <path d="M12 0L1.758 5.914v11.828L12 23.656l10.242-5.914V5.914L12 0zm-1.125 18.232c-2.414-.143-4.348-1.57-4.348-3.93h2.385c0 1.157.94 1.776 1.963 1.776 1.05 0 1.71-.58 1.71-1.382 0-.82-.57-1.173-1.636-1.428l-1.32-.317c-2.046-.492-3.1-1.64-3.1-3.415 0-2.096 1.76-3.522 3.99-3.522 2.1 0 3.863 1.258 3.978 3.518h-2.316c-.078-.97-.732-1.516-1.662-1.516-.89 0-1.574.49-1.574 1.254 0 .765.485 1.066 1.48 1.302l1.32.31c2.19.52 3.255 1.635 3.255 3.535 0 2.29-1.848 3.816-4.002 3.816z" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#ffffff] fill-current">
      <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 24-5.373 24-12zm-18.158 5l3.29-4.896 3.12 4.896h2.24l-4.256-6.408 3.856-5.592h-2.224l-2.92 4.416-2.768-4.416h-2.24l3.728 5.728-4.104 6.272h2.248zm12.31 0h1.848v-2.016h-1.848V17zm0-3.024h1.848V9.016h-1.848v4.96z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#47a248] fill-current">
      <path d="M12 0c-.3 0-.6.1-.8.2C10.7.6 5 4.9 5 11c0 4.1 2.5 7.4 5.9 8.5v3c0 .8.7 1.5 1.5 1.5.3 0 .6-.1.8-.2.5-.4 5.8-4.7 5.8-10.8 0-6.1-5.7-10.4-5.9-10.8-.2-.1-.5-.2-.8-.2zm-.6 3.6c.1-.1.3-.1.4 0 .8.9 3.5 4.3 3.5 7.4 0 3.7-2.1 6.5-3.5 7.7v-15.1zm1.2 0v15.1c-1.4-1.2-3.5-4-3.5-7.7 0-3.1 2.7-6.5 3.5-7.4z" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#4479a1] fill-current">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.58 3.81 10.27 9 11.62.61.16.89-.25.89-.57v-2.26c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.28.73.89.61 5.2-1.35 9-6.04 9-11.62 0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#3776ab] fill-current">
      <path d="M12 0C5.4 0 5 4.8 5 4.8l.05 1.76h6.98v.64H5.06S2 7.66 2 12c0 4.34 2.72 4.8 2.72 4.8h1.62v-2.28c0-2.3 1.88-4.22 4.22-4.22h5.88s1.56.02 1.56-1.6V5.4S18 0 12 0zm0 1.68c.46 0 .84.38.84.84s-.38.84-.84.84-.84-.38-.84-.84.38-.84.84-.84zM12 24c6.6 0 7-4.8 7-4.8l-.05-1.76h-6.98v-.64h6.97S22 16.34 22 12c0-4.34-2.72-4.8-2.72-4.8h-1.62v2.28c0 2.3-1.88 4.22-4.22 4.22H7.56s-1.56-.02-1.56 1.6v3.28S6 24 12 24zm0-1.68c-.46 0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84-.38.84-.84.84z" />
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#ff6f00] fill-current">
      <path d="M12 0L2 5.8v11.6l10 5.8 10-5.8V5.8L12 0zm0 2.3l8 4.6v9.2l-8 4.6-8-4.6V6.9l8-4.6zm-1 3.5h2v6.6h3v2h-8v-2h3V5.8z" />
    </svg>
  ),
  keras: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#d00000] fill-current">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.922 17.653h-2.58l-3.32-4.46v4.46H7.48V6.347h2.542v4.432l3.193-4.432h2.617l-3.805 5.285 3.895 6.02z" />
    </svg>
  ),
  scikit: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#f89939] fill-current">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm2 17h-4v-2h4v2zm2-4h-8v-2h8v2zm1-4H7V7h10v2z" />
    </svg>
  ),
  numpy: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#013243] fill-current">
      <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-1 21.6L3.6 17v-4.3l7.4 4.3v4.6zm0-6.6L3.6 10.7V6.4L11 10.7v4.3zm9.4 2L13 21.6v-4.6l7-4v4zm0-6.4l-7 4v-4.3l7-4v4.3z" />
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#ee4c2c] fill-current">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.8 16.5c-.8.8-2 1.3-3.3 1.3-2.6 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8c1.3 0 2.5.5 3.3 1.3l-1.5 1.5c-.5-.5-1.1-.8-1.8-.8-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c.7 0 1.3-.3 1.8-.8l1.5 1.5z" />
    </svg>
  ),
  pandas: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#150458] fill-current">
      <path d="M5 2h4v20H5V2zm5 4h4v16h-4V6zm5 5h4v11h-4V11z" />
    </svg>
  ),
  c: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#03599C] fill-current">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.3 16.5c-.8.8-2 1.3-3.3 1.3-2.6 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8c1.3 0 2.5.5 3.3 1.3l-1.5 1.5c-.5-.5-1.1-.8-1.8-.8-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c.7 0 1.3-.3 1.8-.8l1.5 1.5z" />
    </svg>
  ),
  cpp: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00599C] fill-current">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.3 16.5c-.8.8-2 1.3-3.3 1.3-2.6 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8c1.3 0 2.5.5 3.3 1.3l-1.5 1.5c-.5-.5-1.1-.8-1.8-.8-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c.7 0 1.3-.3 1.8-.8l1.5 1.5zm6.7-3.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z" />
    </svg>
  ),
  ubuntu: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#e95420] fill-current">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#007acc] fill-current">
      <path d="M23.984 6.842l-2.62-5.59L12.56 5.867 4.156 1.25.132 3.125l3.87 3.717L.132 10.56l4.024 1.875 8.404-4.617 8.804 4.615 2.624-5.59z" />
    </svg>
  ),
  visualstudio: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#5c2d91] fill-current">
      <path d="M17 0l-8.5 7.5L5 5.5l-3.5 3v7l3.5 3 3.5-2 8.5 7.5 5-2.5v-19z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#f05032] fill-current">
      <path d="M23.384 11.41L12.59.616c-.82-.82-2.148-.82-2.968 0L8.43 1.81l3.18 3.18c.764-.26 1.62-.06 2.228.548.607.608.81 1.464.548 2.228l3.18 3.18c.764-.262 1.62-.06 2.228.548.82.82.82 2.148 0 2.968-.82.82-2.148.82-2.968 0-.608-.608-.81-1.464-.548-2.228l-3.18-3.18c-.262.262-.57.447-.91.548v7.62c.59.256 1.014.8 1.1 1.45.1.8-.46 1.52-1.26 1.62-.8.1-1.52-.46-1.62-1.26-.086-.65.338-1.2.928-1.45V9.454c-.34-.1-.648-.286-.91-.548l-3.18 3.18c.262.764.06 1.62-.548 2.228-.82.82-2.148.82-2.968 0-.82-.82-.82-2.148 0-2.968.608-.608 1.464-.81 2.228-.548l3.18-3.18c-.26-.764-.06-1.62.548-2.228.34-.34.757-.557 1.206-.648L8.43 1.812 1.015 9.227c-.82.82-.82 2.148 0 2.968l10.793 10.793c.82.82 2.148.82 2.968 0l8.608-8.608c.82-.82.82-2.148 0-2.968z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#ffffff] fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 3.293-.015 5.943-.015 6.75 0 .324.213.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
};

const BrandTile = ({ icon, name, color }) => (
  <div 
    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#0f172a]/80 border border-white/5 hover:border-neon-cyan/40 transition-all duration-300 hover:scale-105 group select-none relative w-20 h-20 md:w-24 md:h-24"
    style={{
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.2), 0 2px 4px -1px rgba(0,0,0,0.1)"
    }}
  >
    {/* Glow back-layer on hover */}
    <div 
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none blur-md"
      style={{ backgroundColor: color }}
    ></div>
    <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <span className="text-[10px] md:text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-300 text-center truncate w-full px-1">
      {name}
    </span>
  </div>
);

const SplitBadge = ({ label, value, colorClass }) => (
  <div className="flex items-center rounded-lg overflow-hidden border border-white/10 select-none text-[10px] md:text-xs font-bold shadow-md hover:scale-105 transition-transform duration-300">
    <span className="bg-[#1e293b] text-slate-300 px-2.5 py-1.5 uppercase tracking-wider">
      {label}
    </span>
    <span className={`${colorClass} text-white px-2.5 py-1.5 uppercase tracking-wider`}>
      {value}
    </span>
  </div>
);

export default function Skills() {
  return (
    <div className="space-y-12">
      {/* Visual Header */}
      <div className="text-center space-y-3 mb-8">
        <span className="text-xs font-bold text-neon-cyan tracking-wider uppercase block">
          Skills & Technologies
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-glow-blue">
          Full-Stack MERN Developer | AI Engineer | Software Developer 🚀
        </h2>
      </div>

      {/* Brand Icon Groups with Sub-Text Details merged */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Web Development */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-glow-radial pointer-events-none opacity-20"></div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span role="img" aria-label="Web">🌐</span> Web Development
            </h3>
            
            {/* Icons */}
            <div className="flex flex-wrap gap-4 items-center justify-start">
              <BrandTile icon={SVGIcons.html} name="HTML5" color="#e34f26" />
              <BrandTile icon={SVGIcons.css} name="CSS3" color="#1572b6" />
              <BrandTile icon={SVGIcons.js} name="JavaScript" color="#f7df1e" />
              <BrandTile icon={SVGIcons.react} name="React" color="#00d8ff" />
              <BrandTile icon={SVGIcons.node} name="Node.js" color="#339933" />
              <BrandTile icon={SVGIcons.express} name="Express" color="#ffffff" />
              <BrandTile icon={SVGIcons.mongodb} name="MongoDB" color="#47a248" />
              <BrandTile icon={SVGIcons.mysql} name="MySQL" color="#4479a1" />
            </div>
            
            {/* Integrated Details */}
            <div className="border-t border-white/5 pt-4 space-y-3 text-xs md:text-sm text-slate-400">
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Frontend:</strong> 
                TailwindCSS, Framer Motion, Responsive UI Design, DOM Manipulation, CSS3 Animations.
              </p>
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Backend:</strong> 
                FastAPI, REST API Design & Development, SMTP Email Server Integration.
              </p>
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Databases:</strong> 
                SQLite, PostgreSQL, Database Design, Normalization, Query Optimization.
              </p>
            </div>
          </div>
        </div>

        {/* AI / Machine Learning */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-glow-radial-purple pointer-events-none opacity-20"></div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span role="img" aria-label="AI">🤖</span> AI / Machine Learning
            </h3>
            
            {/* Icons */}
            <div className="flex flex-wrap gap-4 items-center justify-start">
              <BrandTile icon={SVGIcons.python} name="Python" color="#3776ab" />
              <BrandTile icon={SVGIcons.tensorflow} name="TensorFlow" color="#ff6f00" />
              <BrandTile icon={SVGIcons.keras} name="Keras" color="#d00000" />
              <BrandTile icon={SVGIcons.scikit} name="Scikit-learn" color="#f89939" />
              <BrandTile icon={SVGIcons.numpy} name="NumPy" color="#013243" />
              <BrandTile icon={SVGIcons.pytorch} name="PyTorch" color="#ee4c2c" />
              <BrandTile icon={SVGIcons.pandas} name="Pandas" color="#150458" />
            </div>
            
            {/* Integrated Details */}
            <div className="border-t border-white/5 pt-4 space-y-3 text-xs md:text-sm text-slate-400">
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">AI & NLP focus:</strong> 
                Large Language Models (LLMs), RAG (Retrieval-Augmented Generation), Prompt Engineering, Semantic Search, NLP Applications.
              </p>
            </div>
          </div>
        </div>

        {/* Systems & Low-Level */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-glow-radial pointer-events-none opacity-20"></div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span role="img" aria-label="System">💻</span> Systems & Low-Level
            </h3>
            
            {/* Icons */}
            <div className="flex flex-wrap gap-4 items-center justify-start">
              <BrandTile icon={SVGIcons.c} name="C" color="#03599C" />
              <BrandTile icon={SVGIcons.cpp} name="C++" color="#00599C" />
              <BrandTile icon={SVGIcons.ubuntu} name="Linux" color="#e95420" />
              
              <div className="flex flex-col gap-2 mt-1">
                <SplitBadge label="AS NASM" value="ASSEMBLY" colorClass="bg-[#d9534f]" />
                <SplitBadge label="RISC-V" value="ARCHITECTURE" colorClass="bg-[#0275d8]" />
                <SplitBadge label="COAL" value="ASSEMBLY" colorClass="bg-[#5cb85c]" />
              </div>
            </div>
            
            {/* Integrated Details */}
            <div className="border-t border-white/5 pt-4 space-y-3 text-xs md:text-sm text-slate-400">
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Architecture:</strong> 
                x86 Assembly, RISC-V ISA, Computer Organization & Assembly Language (COAL), DOSBox.
              </p>
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Concepts & OOP:</strong> 
                Object-Oriented Programming (OOP) in C++, Data Structures & Algorithms (DSA), low-level memory handling.
              </p>
            </div>
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-32 h-32 bg-glow-radial-purple pointer-events-none opacity-20"></div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span role="img" aria-label="Tools">🛠️</span> Tools & DevOps
            </h3>
            
            {/* Icons */}
            <div className="flex flex-wrap gap-4 items-center justify-start">
              <BrandTile icon={SVGIcons.vscode} name="VS Code" color="#007acc" />
              <BrandTile icon={SVGIcons.visualstudio} name="Visual Studio" color="#5c2d91" />
              <BrandTile icon={SVGIcons.git} name="Git" color="#f05032" />
              <BrandTile icon={SVGIcons.github} name="GitHub" color="#ffffff" />
            </div>
            
            {/* Integrated Details */}
            <div className="border-t border-white/5 pt-4 space-y-3 text-xs md:text-sm text-slate-400">
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Development Tools:</strong> 
                Vite, npm, Vercel, Postman API Testing.
              </p>
              <p>
                <strong className="text-slate-300 font-semibold block mb-0.5">Methodologies:</strong> 
                Git Version Control, Software Engineering Principles, Clean Architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
