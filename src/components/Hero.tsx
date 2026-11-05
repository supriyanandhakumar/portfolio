import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Activity, 
  Award,
  FolderDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenVault: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenVault }) => {
  const dynamicWords = [
    "Artificial Intelligence in Healthcare",
    "Biomedical Device Innovation",
    "Computer Vision & Diagnostics",
    "Assistive Medical Technologies",
    "Herbal Bio-Bandage Innovation"
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % dynamicWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      
      {/* Background Animated Gradient Glow Orbs (Soft and vibrant on light plate) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute top-32 right-10 w-[500px] h-[500px] bg-cyan-300/30 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Subtitle Kicker (Clean unboxed metadata) */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-700 dark:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 ring-4 ring-cyan-500/20"></span>
              <span className="tracking-widest uppercase font-semibold">Future Healthcare Engineer</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium">Dr. N.G.P. iTech</span>
            </div>

            {/* Main Greeting & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                Biomedical Engineering Student <span className="text-cyan-600 dark:text-cyan-400">|</span> AI & Healthcare Technology Enthusiast
              </p>
            </div>

            {/* Dynamic Rotating Focus Pill-Free Display */}
            <div className="flex items-center gap-3 py-1 text-sm font-mono text-slate-700 dark:text-slate-300">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Focus Areas:</span>
              <div className="h-6 overflow-hidden">
                <span 
                  key={currentWordIdx}
                  className="inline-block text-cyan-700 dark:text-cyan-300 font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  {dynamicWords[currentWordIdx]}
                </span>
              </div>
            </div>

            {/* Narrative Brief */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              "{PERSONAL_INFO.subtitle}"
            </p>

            {/* Key Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              
              {/* Primary: Download/View Resume */}
              <button
                onClick={onOpenResume}
                className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Secondary: Explore My Work */}
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 rounded-xl shadow-sm transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-cyan-600 dark:text-cyan-400 transition-transform" />
              </a>

              {/* Tertiary: Document Vault */}
              <button
                onClick={onOpenVault}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-cyan-800 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-200 bg-cyan-50 dark:bg-cyan-950/30 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-500/20 rounded-xl transition-all shadow-sm"
                title="Manage and upload verified academic documents"
              >
                <FolderDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-mono font-medium">Upload Docs</span>
              </button>

            </div>

            {/* Social Links & Location */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/5">
              <span className="text-xs font-mono text-slate-400 uppercase font-medium">Connect:</span>
              
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame with Glowing Orbital Ring */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-84 lg:w-96 aspect-square flex items-center justify-center">
              
              {/* Outer Pulsing Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-400 opacity-60 dark:opacity-70 blur-xl animate-pulse"></div>
              
              {/* Spinning subtle technological dashed orbit */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-cyan-400/50 dark:border-cyan-500/30 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
              <div className="absolute -inset-8 rounded-full border border-slate-300/60 dark:border-slate-700/40 pointer-events-none"></div>

              {/* Glowing Circular Frame */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 shadow-xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-[#070b19] relative">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Supriya N — Biomedical Engineering & AI Specialist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_18%] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 dark:from-[#050814]/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Badge 1: Real-time Biomedical Status (Moving figure) */}
              <div className="absolute -bottom-3 -left-4 glass-panel px-3.5 py-2 rounded-xl shadow-md border border-cyan-200 dark:border-cyan-500/30 flex items-center gap-2.5 animate-float-figure z-20">
                <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">Innovation Focus</div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">AI Diagnostics & Devices</div>
                </div>
              </div>

              {/* Floating Badge 2: Academic Credential (Moving figure) */}
              <div className="absolute -top-3 -right-3 glass-panel px-3.5 py-2 rounded-xl shadow-md border border-purple-200 dark:border-purple-500/30 flex items-center gap-2.5 animate-float-slow z-20">
                <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">CGPA {PERSONAL_INFO.cgpa}</div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Dr. N.G.P. iTech</div>
                </div>
              </div>

              {/* Floating Graphic Node 3: Moving Bio-Circuit Pulse */}
              <div className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-500/30 items-center gap-2 shadow-sm animate-float-slow z-20">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-300 font-medium">Bio-Sensors Active</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Balanced KPI Metrics Strip (Full-width row below split) */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-cyan-500/40 transition-colors">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Academic Standing</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-cyan-700 dark:text-cyan-400">{PERSONAL_INFO.cgpa}</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">CGPA</span>
            </div>
            <div className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">Biomedical Engineering (B.E.)</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Secondary Education</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-indigo-700 dark:text-indigo-400">{PERSONAL_INFO.schoolPercentage}</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Score</span>
            </div>
            <div className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">Vikas Vidyalaya School</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-purple-500/40 transition-colors">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Core Projects</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-purple-700 dark:text-purple-400">2</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Projects</span>
            </div>
            <div className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">1st Year STEM & 2nd Year BME</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-pink-500/40 transition-colors">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Leadership & Campus</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-pink-700 dark:text-pink-400">3+1</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Roles</span>
            </div>
            <div className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">Sports · Road Safety · Toastmasters · Intern</div>
          </div>

        </div>

      </div>

    </section>
  );
};
