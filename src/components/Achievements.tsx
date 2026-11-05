import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Volume2, 
  Layers, 
  CheckCircle2, 
  Award, 
  FileBadge, 
  FolderDown, 
  Eye, 
  Search, 
  Download, 
  RotateCw, 
  ExternalLink, 
  Building, 
  Calendar,
  Sparkles,
  Filter
} from 'lucide-react';
import { ACHIEVEMENTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types/portfolio';
import { CertificateViewerModal } from './CertificateViewerModal';

interface AchievementsProps {
  onOpenVault: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenVault }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  const iconComponents: Record<string, any> = {
    Volume2,
    Layers,
    CheckCircle2,
    Award
  };

  const categories = [
    'All',
    'Internship',
    'Workshops',
    'Technical Events',
    'Paper Presentations',
    'Projects',
    'Leadership and Achievements'
  ];

  const filteredCertificates = useMemo(() => {
    return CERTIFICATIONS_DATA.filter(cert => {
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(q)) ||
        cert.category.toLowerCase().includes(q) ||
        (cert.skillsAcquired && cert.skillsAcquired.some(s => s.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryGradients: Record<string, string> = {
    'Internship': 'from-cyan-500 to-blue-600',
    'Workshops': 'from-purple-500 to-indigo-600',
    'Technical Events': 'from-emerald-500 to-teal-600',
    'Paper Presentations': 'from-amber-500 to-orange-600',
    'Projects': 'from-blue-600 to-indigo-700',
    'Leadership and Achievements': 'from-rose-500 to-pink-600'
  };

  const handleDownloadCertificate = (e: React.MouseEvent, cert: CertificateItem) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = cert.previewUrl;
    link.download = `Supriya_N_${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.${cert.fileType === 'pdf' ? 'pdf' : 'jpeg'}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#070b1d]/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/40 dark:bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/40 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Honors & Milestones */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Trophy className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Recognized outcomes across artificial intelligence engineering, biomaterial innovation, clinical internships, and university student leadership.
          </p>
        </div>

        {/* 4 Core Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {ACHIEVEMENTS_DATA.map((ach) => {
            const Icon = iconComponents[ach.iconName] || Trophy;

            return (
              <div
                key={ach.id}
                className="glass-panel p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 p-[1px] border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">{ach.date}</span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1 font-medium">
                    {ach.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {ach.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Accomplishment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 2: Official Certificates & Accreditations Showcase */}
        <div id="certificates" className="pt-8 border-t border-slate-200 dark:border-white/10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-700 dark:text-purple-400 mb-1 font-semibold">
                <FileBadge className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Verified Credentials & Awards</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Certificates & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 dark:from-purple-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Accreditations</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl font-normal">
                Click any certificate to inspect in high resolution with interactive zoom, rotation, fullscreen reading, and direct download.
              </p>
            </div>

            <button
              onClick={onOpenVault}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 rounded-xl transition-all self-start sm:self-auto cursor-pointer shadow-sm"
            >
              <FolderDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Open Document Vault</span>
            </button>
          </div>

          {/* Category Filter Pills & Search Input */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 mb-8 space-y-4 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const count = cat === 'All' 
                    ? CERTIFICATIONS_DATA.length 
                    : CERTIFICATIONS_DATA.filter(c => c.category === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
                        selectedCategory === cat
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-600/30 font-bold'
                          : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        selectedCategory === cat 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Instant Search Bar */}
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by title, issuer, skill, ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
              <span>Displaying {filteredCertificates.length} verified credential{filteredCertificates.length === 1 ? '' : 's'}</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-medium">Click to inspect in full zoom window</span>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => {
              const badgeGradient = categoryGradients[cert.category] || 'from-indigo-500 to-purple-600';
              const isSideways = cert.defaultRotation === 90;

              return (
                <div
                  key={cert.id}
                  onClick={() => setActiveCertificate(cert)}
                  className="glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl group"
                >
                  <div>
                    
                    {/* Thumbnail Preview Window (Uncropped, crystal-clear) */}
                    <div className="relative h-48 sm:h-52 bg-slate-900/90 dark:bg-[#030611] overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-white/10 group-hover:bg-slate-950 transition-colors">
                      {cert.fileType === 'pdf' ? (
                        <div className="w-full h-full p-3 flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-800 to-slate-900">
                          <FileBadge className="w-12 h-12 text-cyan-400 mb-2 opacity-90 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-mono text-cyan-200 font-bold text-center px-4 line-clamp-1">
                            {cert.title}
                          </span>
                          <span className="text-[10px] font-mono text-slate-300 mt-1 uppercase tracking-wider">
                            Verified PDF Document
                          </span>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-2 overflow-hidden">
                          <img
                            src={cert.previewUrl}
                            alt={cert.title}
                            referrerPolicy="no-referrer"
                            className={`max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ${
                              isSideways ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                      )}

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold text-white bg-gradient-to-r ${badgeGradient} shadow-sm`}>
                          {cert.category}
                        </span>
                      </div>

                      {/* Right Overlay: Score or Credential ID */}
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-mono text-white/90 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/20">
                          {cert.issueDate}
                        </span>
                      </div>

                      {/* Quick Inspect Hover Overlay Button */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-2">
                        <span className="px-3.5 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-cyan-600" />
                          <span>View & Zoom</span>
                        </span>
                      </div>

                    </div>

                    {/* Card Content Details */}
                    <div className="p-5 space-y-2.5">
                      
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <span className="truncate max-w-[180px] font-medium">{cert.issuer}</span>
                        {cert.credentialId && (
                          <span className="text-[10px] bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                            {cert.credentialId}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {cert.title}
                      </h4>

                      {cert.scoreOrAward && (
                        <div className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{cert.scoreOrAward}</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 font-normal leading-relaxed">
                        {cert.description}
                      </p>

                    </div>

                  </div>

                  {/* Card Footer: Skills & Direct Download Action */}
                  <div className="px-5 py-3.5 bg-slate-50 dark:bg-[#050814]/80 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 group-hover:underline flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </span>

                    <button
                      onClick={(e) => handleDownloadCertificate(e, cert)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                      title="Direct Download File"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Certificate Viewer Modal with Zoom, Rotate, Fullscreen & Download */}
      <CertificateViewerModal
        certificate={activeCertificate}
        certificatesList={filteredCertificates}
        onClose={() => setActiveCertificate(null)}
        onSelectCertificate={(cert) => setActiveCertificate(cert)}
      />

    </section>
  );
};
