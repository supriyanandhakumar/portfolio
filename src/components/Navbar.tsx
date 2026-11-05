import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  FolderDown, 
  Menu, 
  X, 
  Activity,
  Sun,
  Moon
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenVault: () => void;
  documentCount: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume, 
  onOpenVault, 
  documentCount,
  isDarkMode,
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Documents', href: '#documents' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-[#050814]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg dark:shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-sm shadow-cyan-500/20">
              <div className="w-full h-full bg-white dark:bg-[#070b19] rounded-[11px] flex items-center justify-center group-hover:bg-cyan-50 dark:group-hover:bg-[#070b19]/80 transition-colors">
                <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase -mt-1 font-medium">
                Biomedical & AI
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 text-xs tracking-wide uppercase font-mono py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
              title={isDarkMode ? "Switch to Light Plate Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Document Vault Button */}
            <button
              onClick={onOpenVault}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              title="Open Document & Certificate Vault"
            >
              <FolderDown className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span className="hidden sm:inline">Docs & Vault</span>
              <span className="bg-cyan-200/60 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
                {documentCount}
              </span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-lg shadow-sm shadow-indigo-600/20 transition-all cursor-pointer whitespace-nowrap shrink-0 hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 dark:border-white/10 pb-4 bg-white/95 dark:bg-[#070b1e]/95 backdrop-blur-2xl rounded-2xl p-4 shadow-xl">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-xs font-mono uppercase text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVault();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 rounded-lg"
              >
                <FolderDown className="w-4 h-4" />
                <span>Upload & View Documents ({documentCount})</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
