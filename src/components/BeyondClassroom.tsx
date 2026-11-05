import React from 'react';
import { 
  Activity, 
  Cpu, 
  ShieldAlert, 
  Sparkles, 
  Scan, 
  Microscope, 
  FileText,
  Compass,
  ArrowRight
} from 'lucide-react';
import { CORE_SKILLS_EXPOSURE } from '../data/portfolioData';

export const BeyondClassroom: React.FC = () => {
  const iconMap: Record<string, any> = {
    Activity,
    Cpu,
    ShieldAlert,
    Sparkles,
    Scan,
    Microscope,
    FileText
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#070b1d]/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-200/40 dark:bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Applied Professional Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Beyond the <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Classroom</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Core biomedical instrumentation knowledge, regulatory hospital awareness, and hands-on laboratory discipline applied in real engineering situations.
          </p>
        </div>

        {/* 7 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CORE_SKILLS_EXPOSURE.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Activity;

            return (
              <div
                key={skill.title}
                className="glass-panel p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
              >
                <div>
                  
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 p-[1px] border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Tag */}
                  <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                    {skill.short}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {skill.desc}
                  </p>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  <span>Applied In Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
