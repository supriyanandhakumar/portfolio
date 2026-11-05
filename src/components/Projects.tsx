import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Play,
  FolderDown
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenVault: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenVault }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Innovative Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Innovations</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
              Deep dive into my two core engineering projects: 1st Year STEM Project (<strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Bridging Silence: Sign Language AI Vocalizer</strong>) and 2nd Year Biomedical Project (<strong className="text-purple-700 dark:text-purple-300 font-semibold">Tricol BioRegen Band: Nature-Boosted Wound Care</strong>).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenVault}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <FolderDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Project Reports & Documents Vault</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl group"
              >
                {/* Main Showcase Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-10 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Side (7 Cols) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 group-hover:border-cyan-500/40 transition-colors shadow-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-[#050814]/90 via-transparent to-transparent"></div>
                      
                      {/* Interactive Demo Tag Overlay */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-white bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-semibold">
                          {project.yearTag}
                        </span>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-300 bg-cyan-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/30">
                          {project.domain.split('|')[0]}
                        </span>
                      </div>

                      {/* Quick Interactive Button on Image */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 backdrop-blur-md rounded-xl transition-all shadow-lg shadow-cyan-600/30 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Interactive Sandbox</span>
                      </button>
                    </div>
                  </div>

                  {/* Narrative Side (5 Cols) */}
                  <div className={`lg:col-span-5 flex flex-col justify-between space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div>
                      {/* Domain Kicker */}
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-1 font-semibold">
                        <span>{project.academicLevel}</span>
                        <span>·</span>
                        <span>{project.domain}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mt-1">
                        {project.subtitle}
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/5">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools Tags */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-medium">
                        Stack & Core Tech:
                      </span>
                      <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                        {project.tools.map((tool, tIdx) => (
                          <span key={tool} className="flex items-center text-cyan-800 dark:text-cyan-300 font-medium">
                            <span>{tool}</span>
                            {tIdx < project.tools.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-600 ml-2.5">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                      >
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.reportPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-xl transition-all"
                      >
                        <span>PDF Report</span>
                        <ArrowUpRight className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      </a>
                    </div>

                  </div>

                </div>

                {/* Small Box Under Project for Project Report & Academic Verification */}
                <div className="border-t border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-[#060a1d]/90 p-5 sm:p-7 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    {/* Left: Report Document Badge & Supervisor Info */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                          {project.yearTag} Dossier
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                          Dr. N.G.P Institute of Technology
                        </span>
                      </div>

                      <div className="text-xs text-slate-700 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Supervisor:</strong> {project.guide}
                        <span className="hidden sm:inline mx-2 text-slate-300 dark:text-slate-600">|</span>
                        <span className="block sm:inline mt-1 sm:mt-0"><strong className="text-slate-900 dark:text-white">HoD:</strong> {project.hod}</span>
                      </div>

                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <strong>Team:</strong> {project.teamMembers.join(' · ')}
                      </div>
                    </div>

                    {/* Right: Key Verified Metrics from Report + Open Report Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
                      
                      {/* 2-3 Metric Badges */}
                      <div className="grid grid-cols-2 gap-2 text-center">
                        {project.reportMetrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-1.5 shadow-sm">
                            <span className="text-[10px] font-mono uppercase text-slate-400 block font-medium">{m.label}</span>
                            <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Official PDF Document Action Button */}
                      <a
                        href={project.reportPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap"
                        title="Open and read the official project report PDF"
                      >
                        <FolderDown className="w-4 h-4 text-cyan-200" />
                        <span>Open Official Project Report PDF</span>
                      </a>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenVault={() => {
            setSelectedProject(null);
            onOpenVault();
          }}
        />
      )}

    </section>
  );
};
