import React from 'react';
import { 
  GraduationCap, 
  Building, 
  MapPin, 
  Calendar, 
  CheckCircle
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#070b1d]/40">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Building a rigorous foundation in engineering mathematics, human physiology, medical instrumentation, and healthcare computation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Timeline Rule (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 -translate-x-1/2"></div>

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.degree}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#050814] border-2 border-cyan-500 dark:border-cyan-400 items-center justify-center shadow-md shadow-cyan-500/10 z-10">
                    <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-xl group">
                      
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[11px] font-mono tracking-wider text-cyan-700 dark:text-cyan-400 uppercase flex items-center gap-1.5 font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                            {item.degree}
                          </h3>
                        </div>

                        {/* Metric Score Pill */}
                        <div className="bg-cyan-50 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-cyan-200 dark:border-cyan-500/30 text-right shrink-0">
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase block font-medium">{item.scoreType}</span>
                          <span className="text-lg font-bold font-mono text-cyan-700 dark:text-cyan-400">{item.score}</span>
                        </div>
                      </div>

                      {/* Institution & Location */}
                      <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                          <Building className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Coursework Tags (Clean, unboxed) */}
                      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10">
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-medium">
                          Key Subjects & Labs
                        </span>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                          {item.coursework.map((course, cIdx) => (
                            <span key={course} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                              <span>{course}</span>
                              {cIdx < item.coursework.length - 1 && (
                                <span className="text-slate-300 dark:text-slate-600 ml-1">·</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                        {item.highlights.map((hl) => (
                          <div key={hl} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};
