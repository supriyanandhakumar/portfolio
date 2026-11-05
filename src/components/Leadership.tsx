import React from 'react';
import { 
  Award, 
  Trophy, 
  Mic2, 
  ShieldAlert,
  Calendar, 
  Building, 
  CheckCircle2, 
  TrendingUp
} from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-200/40 dark:bg-pink-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Responsibility & Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Leadership & <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Responsibility</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Championing athletics, articulate communication, and civic road safety awareness through dedicated campus leadership roles.
          </p>
        </div>

        {/* 3 Highlighted Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP_DATA.map((role) => {
            const isSports = role.title.includes('Sports');
            const isSafety = role.title.includes('Road Safety');
            const Icon = isSports ? Trophy : isSafety ? ShieldAlert : Mic2;
            const accentColor = isSports 
              ? 'from-cyan-500 to-blue-600' 
              : isSafety 
                ? 'from-amber-500 to-rose-600' 
                : 'from-purple-500 to-pink-600';
            const roleCategoryTag = isSports 
              ? "Athletic Governance" 
              : isSafety 
                ? "Civic & Road Safety" 
                : "Communication & Oratory";

            return (
              <div
                key={role.title}
                className="glass-panel rounded-3xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Banner with Image and Overlay */}
                  <div className="relative h-48 sm:h-52 overflow-hidden border-b border-slate-200 dark:border-white/10">
                    <img
                      src={role.image || "/assets/images/toastmasters_public_speaking_1793370676806.jpg"}
                      alt={role.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#070b1a] via-slate-950/40 to-transparent"></div>

                    {/* Role Tag & Icon */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${accentColor} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                        {roleCategoryTag}
                      </span>
                    </div>

                    {/* Period in bottom corner */}
                    <div className="absolute bottom-4 left-6 flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mt-1">
                        <Building className="w-3.5 h-3.5" />
                        <span>{role.organization}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {role.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium">
                        Core Responsibilities:
                      </span>
                      {role.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Achievements Strip in Footer of Card */}
                <div className="p-6 sm:px-8 pt-4 pb-6 bg-slate-50 dark:bg-[#050814]/80 border-t border-slate-200 dark:border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-400 uppercase tracking-wider block font-semibold">
                    Leadership Milestones:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {role.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
