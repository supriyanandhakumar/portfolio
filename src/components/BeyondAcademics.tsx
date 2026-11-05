import React from 'react';
import { 
  Heart, 
  Mic2, 
  Palette, 
  Flame
} from 'lucide-react';

export const BeyondAcademics: React.FC = () => {
  const facets = [
    {
      title: "Competitive Athletics & Sports",
      category: "Physical Fitness & Discipline",
      icon: Flame,
      color: "from-cyan-500 to-blue-600",
      description: "Dedicated to campus athletics and track events. Serving as Sports Representative taught me that physical grit, stamina, and team spirit directly translate into mental resilience during intense engineering troubleshooting."
    },
    {
      title: "Toastmasters & Executive Oratory",
      category: "Verbal Communication & Persuasion",
      icon: Mic2,
      color: "from-purple-500 to-pink-600",
      description: "Cultivating the art of impromptu thinking and articulate technical storytelling. Breaking down complex biomedical sensor mechanics into lucid, engaging narratives for diverse clinical and non-technical audiences."
    },
    {
      title: "3D Biomedical Visualization & Blender",
      category: "Creative Technology",
      icon: Palette,
      color: "from-emerald-500 to-teal-600",
      description: "Exploring 3D modeling and anatomical structure rendering in Blender. Visualizing medical device concepts, ergonomic electrode placements, and cellular micro-scaffolds with aesthetic precision."
    },
    {
      title: "Patient-Centered Clinical Empathy",
      category: "Medical Ethics & Humanism",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      description: "Believing that technology is only as valuable as the lives it touches. Visiting hospitals and engaging with non-verbal patients directly inspired 'Bridging Silence' to solve real human distress."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-cyan-200/30 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-cyan-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Heart className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Multifaceted Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Beyond <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Academics</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Nurturing holistic development through athletic endurance, passionate public speaking, creative 3D modeling, and compassionate healthcare ethics.
          </p>
        </div>

        {/* 4 Creative Facets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facets.map((facet, idx) => {
            const Icon = facet.icon;

            return (
              <div
                key={facet.title}
                className="glass-panel p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${facet.color} p-[1px]`}>
                      <div className="w-full h-full bg-white dark:bg-[#070b1a] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-700 dark:text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase block mb-1 font-semibold">
                    {facet.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {facet.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {facet.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Holistic Growth</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Integral to Engineering</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
