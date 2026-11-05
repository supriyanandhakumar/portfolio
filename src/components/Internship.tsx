import React from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Cpu, 
  ShieldCheck, 
  FileCheck2,
  Award,
  Activity
} from 'lucide-react';
import { INTERNSHIP_DATA } from '../data/portfolioData';

interface InternshipProps {
  onOpenVault: () => void;
}

export const Internship: React.FC<InternshipProps> = ({ onOpenVault }) => {
  const learningModules = [
    {
      title: "Biomedical Equipment Calibration",
      desc: "Calibration protocols on multi-parameter patient monitors, syringe infusion pumps, and ECG signal amplifiers.",
      icon: Activity
    },
    {
      title: "Manufacturing & Industrial Workflows",
      desc: "PCB board assembly inspection, component soldering quality, and diagnostic equipment assembly lines.",
      icon: Cpu
    },
    {
      title: "ISO Quality & Electrical Safety Testing",
      desc: "Strict adherence to leakage current thresholds, patient ground isolation, and safety interlocks.",
      icon: ShieldCheck
    },
    {
      title: "Technical SOP Documentation",
      desc: "Authored standard operating procedures (SOPs) for routine maintenance, fault isolation, and logging.",
      icon: FileCheck2
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#070b1d]/40">
      
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-200/40 dark:bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internship <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Hands-on clinical instrumentation and diagnostic hardware training in an industrial biomedical manufacturing environment.
          </p>
        </div>

        {/* Feature Experience Showcase */}
        <div className="glass-panel rounded-3xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-lg group">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Side (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src={INTERNSHIP_DATA.image}
                alt="Atheenapandian Biomedical Lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 lg:from-slate-950/60 via-transparent to-transparent"></div>
              
              {/* Floating Credential Tag */}
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 text-white">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono">Verified Industrial Credential</span>
              </div>

              {/* Bottom Card on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Credential ID:</div>
                <div className="text-xs font-mono font-bold text-cyan-300 mt-0.5">{INTERNSHIP_DATA.verifiedCredentialId}</div>
                <button
                  onClick={onOpenVault}
                  className="mt-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>View Certificate in Document Vault →</span>
                </button>
              </div>
            </div>

            {/* Narrative Content Side (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
              
              <div>
                
                {/* Header Information */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase font-semibold">
                    {INTERNSHIP_DATA.type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {INTERNSHIP_DATA.period}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {INTERNSHIP_DATA.role}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    {INTERNSHIP_DATA.company}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {INTERNSHIP_DATA.location}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {INTERNSHIP_DATA.description}
                </p>

              </div>

              {/* 4 Focused Competency Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {learningModules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.title} className="p-3.5 bg-slate-50 dark:bg-[#050814] rounded-xl border border-slate-200 dark:border-white/5 space-y-1 shadow-sm">
                      <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                        <Icon className="w-4 h-4" />
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{mod.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {mod.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Key Industrial Responsibilities */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider block font-medium">
                  Industrial Contributions & Training Highlights:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {INTERNSHIP_DATA.responsibilities.slice(0, 4).map((r, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tag Row */}
              <div className="pt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-white/5">
                <span className="text-slate-400 font-medium">Domains:</span>
                {INTERNSHIP_DATA.technologies.map((tech, idx) => (
                  <span key={tech} className="text-slate-700 dark:text-slate-300">
                    {tech}
                    {idx < INTERNSHIP_DATA.technologies.length - 1 && <span className="text-slate-300 dark:text-slate-600 ml-3">·</span>}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
