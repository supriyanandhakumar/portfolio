import React, { useState } from 'react';
import { 
  Code, 
  Cpu, 
  Activity, 
  Users, 
  Search, 
  CheckCircle2,
  Sparkles,
  Sliders
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { label: 'All', icon: Sliders },
    { label: 'Programming', icon: Code },
    { label: 'Software & AI', icon: Sparkles },
    { label: 'Biomedical Engineering', icon: Activity },
    { label: 'Professional', icon: Users }
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (cat: SkillItem['category']) => {
    switch (cat) {
      case 'Programming':
        return 'from-cyan-500 to-blue-600 text-cyan-600 dark:text-cyan-400';
      case 'Software & AI':
        return 'from-purple-500 to-indigo-600 text-purple-600 dark:text-purple-400';
      case 'Biomedical Engineering':
        return 'from-pink-500 to-rose-600 text-pink-600 dark:text-pink-400';
      case 'Professional':
        return 'from-emerald-500 to-teal-600 text-emerald-600 dark:text-emerald-400';
      default:
        return 'from-cyan-500 to-purple-600 text-cyan-600 dark:text-cyan-400';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-200/40 via-purple-200/40 to-pink-200/40 dark:from-cyan-500/10 dark:via-purple-500/10 dark:to-pink-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            A balanced synthesis of bio-instrumentation hardware knowledge, machine learning frameworks, and structured engineering practices.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 rounded-xl backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. OpenCV, ECG)..."
              className="w-full bg-white dark:bg-[#0a1026] border border-slate-300 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const colorClass = getCategoryColor(skill.category);
            
            return (
              <div
                key={skill.name}
                className="glass-panel p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 group relative flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{skill.category}</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{skill.experience}</span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {skill.description}
                  </p>

                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                  
                  {/* Progress Bar & Numeric Indicator */}
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Proficiency</span>
                    <span className="text-slate-800 dark:text-slate-200 font-bold tabular-nums">{skill.level}%</span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-700`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Tags (Unboxed with subtle dots) */}
                  <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tag} className="flex items-center">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{tag}</span>
                        {tIdx < skill.tags.length - 1 && (
                          <span className="text-slate-300 dark:text-slate-600 ml-2">/</span>
                        )}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Summary Metric Footer */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span>Showing <strong className="text-slate-900 dark:text-white">{filteredSkills.length}</strong> verified competencies across hardware, software & clinical science</span>
          </div>
          <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Continuous Curriculum Integration</span>
        </div>

      </div>

    </section>
  );
};
