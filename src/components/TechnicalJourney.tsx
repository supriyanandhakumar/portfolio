import React, { useState } from 'react';
import { 
  Compass, 
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { TECHNICAL_JOURNEY_DATA } from '../data/portfolioData';

interface TechnicalJourneyProps {
  onOpenVault: () => void;
}

export const TechnicalJourney: React.FC<TechnicalJourneyProps> = ({ onOpenVault }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Workshops',
    'Symposiums',
    'Paper Presentations',
    'Hackathons',
    'Biomedical Events',
    'AI Activities',
    'Technical Demos'
  ];

  const filteredItems = TECHNICAL_JOURNEY_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Active Scientific Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Journey & <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Participation</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Continuous presence across medical device symposiums, competitive assistive hackathons, research presentations, and hands-on laboratory workshops.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20'
                  : 'bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
            >
              <div>
                
                {/* Top metadata */}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{item.category}</span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Organization & Location */}
                <div className="mt-2 text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
                  <div className="font-semibold text-indigo-700 dark:text-indigo-300">{item.organization}</div>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 space-y-3">
                
                {/* Key Takeaways */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium">
                    Core Learning Outcomes:
                  </span>
                  {item.keyTakeaways.map((k, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{k}</span>
                    </div>
                  ))}
                </div>

                {/* Certificate action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    Record Verified
                  </span>
                  <button
                    onClick={onOpenVault}
                    className="text-xs font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <span>Vault Record</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
