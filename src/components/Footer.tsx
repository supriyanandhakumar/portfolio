import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Activity, 
  Linkedin, 
  Github, 
  Mail, 
  FolderDown, 
  FileText 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenVault: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenVault }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#04060f] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 overflow-hidden text-slate-600 dark:text-slate-400">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/5">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-white dark:bg-[#070b19] rounded-[11px] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
              Biomedical Engineering undergraduate at Dr. N.G.P Institute of Technology. Engineering assistive artificial intelligence, novel collagen biomaterials, and clinical healthcare systems.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-800 dark:text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#education" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Education & CGPA</a></li>
              <li><a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Industrial Internship</a></li>
              <li><a href="#leadership" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Leadership & Toastmasters</a></li>
            </ul>
          </div>

          {/* Quick Actions & Documents (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-800 dark:text-slate-300 font-bold">
              Resources & Dossier
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
              Access the interactive document repository to upload and download verified certificates and project whitepapers.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={onOpenVault}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 rounded-xl transition-all cursor-pointer text-left shadow-sm"
              >
                <FolderDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Document & Certificate Vault</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-500/30 rounded-xl transition-all cursor-pointer text-left shadow-sm"
              >
                <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Interactive Curriculum Vitae</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Supriya N. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <span>Engineered with biomedical passion & precision</span>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 hover:scale-110 transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

    </footer>
  );
};
