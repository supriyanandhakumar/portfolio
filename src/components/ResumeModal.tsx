import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  FileCheck, 
  ExternalLink, 
  FileText, 
  Award, 
  Sparkles, 
  Briefcase, 
  BookOpen, 
  Globe, 
  Maximize2
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'formatted' | 'official-pdf'>('formatted');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadOfficialPdf = () => {
    const link = document.createElement('a');
    link.href = RESUME_DATA.header.pdfUrl;
    link.download = 'Supriya_N_Final_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTextResume = () => {
    const resumeText = `
================================================================================
                                SUPRIYA N
        B.E. Biomedical Engineering | Dr. N.G.P. Institute of Technology
================================================================================
Phone:    ${RESUME_DATA.header.phone}
Email:    ${RESUME_DATA.header.email}
LinkedIn: ${RESUME_DATA.header.linkedin}
Location: ${RESUME_DATA.header.location}

ACADEMIC BACKGROUND
--------------------------------------------------------------------------------
1. ${RESUME_DATA.academicBackground[0].degree}
   ${RESUME_DATA.academicBackground[0].institution} (${RESUME_DATA.academicBackground[0].period})
   CGPA: ${RESUME_DATA.academicBackground[0].score}

2. ${RESUME_DATA.academicBackground[1].degree}
   ${RESUME_DATA.academicBackground[1].institution} (${RESUME_DATA.academicBackground[1].period})
   Score: ${RESUME_DATA.academicBackground[1].score}

ACADEMIC, RESEARCH AND INDUSTRIAL EXPERIENCE
--------------------------------------------------------------------------------
1. ${RESUME_DATA.experience[0].title} (${RESUME_DATA.experience[0].period})
   ${RESUME_DATA.experience[0].organization}
   - ${RESUME_DATA.experience[0].description}

2. ${RESUME_DATA.experience[1].title} (${RESUME_DATA.experience[1].period})
   ${RESUME_DATA.experience[1].organization}
   - ${RESUME_DATA.experience[1].description}

3. ${RESUME_DATA.experience[2].title} (${RESUME_DATA.experience[2].period})
   ${RESUME_DATA.experience[2].organization}
   - ${RESUME_DATA.experience[2].description}

4. ${RESUME_DATA.experience[3].title} (${RESUME_DATA.experience[3].period})
   ${RESUME_DATA.experience[3].organization}
   - ${RESUME_DATA.experience[3].description}

DESCRIPTION OF ACTIVITIES
--------------------------------------------------------------------------------
${RESUME_DATA.descriptionOfActivities.map(act => `${act.index}. ${act.details}`).join('\n')}

PROJECTS
--------------------------------------------------------------------------------
1. ${RESUME_DATA.projects[0].name}
   Tools: ${RESUME_DATA.projects[0].tools.join(', ')}
   ${RESUME_DATA.projects[0].description}

2. ${RESUME_DATA.projects[1].name}
   Tools: ${RESUME_DATA.projects[1].tools.join(', ')}
   ${RESUME_DATA.projects[1].description}

3. ${RESUME_DATA.projects[2].name}
   Tools: ${RESUME_DATA.projects[2].tools.join(', ')}
   Link: ${RESUME_DATA.projects[2].link}
   ${RESUME_DATA.projects[2].description}

AREAS OF EXPERTISE & SKILLS
--------------------------------------------------------------------------------
${RESUME_DATA.skills.join(', ')}

LANGUAGES
--------------------------------------------------------------------------------
${RESUME_DATA.languages.join(', ')}

EXTRACURRICULARS & HONORS
--------------------------------------------------------------------------------
${RESUME_DATA.extracurriculars.map(e => `- ${e}`).join('\n')}

================================================================================
Generated via Supriya N's Official Portfolio
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Supriya_N_Final_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/65 dark:bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#090e24] border border-slate-300 dark:border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col text-slate-800 dark:text-slate-100">
        
        {/* Modal Controls Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 bg-slate-50/95 dark:bg-[#070b1a]/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Curriculum Vitae</h2>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 rounded-md font-semibold">
                  CGPA 7.87 · Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
                Official 2-Page Undergraduate Resume · Supriya N
              </p>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-200/70 dark:bg-white/10 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setActiveTab('formatted')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'formatted'
                  ? 'bg-white dark:bg-cyan-600 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Interactive CV</span>
            </button>
            <button
              onClick={() => setActiveTab('official-pdf')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'official-pdf'
                  ? 'bg-white dark:bg-cyan-600 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Official PDF</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadOfficialPdf}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-lg shadow-sm transition-all cursor-pointer"
              title="Download official PDF resume file directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            <button
              onClick={handleDownloadTextResume}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 border border-slate-300 dark:border-white/10 rounded-lg transition-colors cursor-pointer"
              title="Download formatted text resume"
            >
              <span>Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer ml-1"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Official PDF Embed */}
        {activeTab === 'official-pdf' ? (
          <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#060a18] p-3 overflow-hidden min-h-[580px]">
            <div className="flex items-center justify-between px-2 py-1.5 text-xs text-slate-600 dark:text-slate-300 font-mono">
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Viewing authentic uploaded document: final_resume_supriya_N__1__91f0282c.pdf</span>
              </span>
              <a
                href={RESUME_DATA.header.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-inner bg-white">
              <iframe
                src={`${RESUME_DATA.header.pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full min-h-[520px] border-0"
                title="Supriya N Official Resume PDF"
              />
            </div>
          </div>
        ) : (
          /* Tab 2: Structured Interactive CV (matching official 2 pages) */
          <div 
            className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-7 bg-white dark:bg-[#060a1c] custom-scrollbar text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-sans" 
            id="printable-resume"
          >
            
            {/* Header: Exact replica of Resume Page 1 Header */}
            <div className="border-b-2 border-slate-200 dark:border-white/10 pb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                    {RESUME_DATA.header.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-400 mt-1">
                    {RESUME_DATA.header.headline}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <a href={`tel:${RESUME_DATA.header.phone}`} className="hover:text-cyan-600 font-semibold">{RESUME_DATA.header.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <a href={`mailto:${RESUME_DATA.header.email}`} className="hover:text-indigo-600 truncate font-semibold" title={RESUME_DATA.header.email}>
                      {RESUME_DATA.header.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-[#0077b5] shrink-0" />
                    <a href={RESUME_DATA.header.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-semibold truncate">
                      {RESUME_DATA.header.linkedinDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span>{RESUME_DATA.header.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Academic Background */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold border-b border-cyan-500/30 pb-1.5 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Academic Background</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {RESUME_DATA.academicBackground.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">{item.period}</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-200">
                          {item.scoreType}: {item.score}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-1">{item.degree}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Academic, Research and Industrial Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold border-b border-indigo-500/30 pb-1.5 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Academic, Research and Industrial Experience</span>
              </h2>

              <div className="space-y-3">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-1"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        {idx + 1}. {exp.title}
                      </h3>
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-indigo-700 dark:text-indigo-300">
                      {exp.organization}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Description of Activities (8 Points) */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold border-b border-purple-500/30 pb-1.5 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Description of Activities & Certifications</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {RESUME_DATA.descriptionOfActivities.map((act) => (
                  <div 
                    key={act.index}
                    className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {act.index}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {act.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Projects (All 3 Projects on Page 2) */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold border-b border-pink-500/30 pb-1.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                <span>Engineering Projects</span>
              </h2>

              <div className="space-y-3">
                {RESUME_DATA.projects.map((proj, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-1.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        {idx + 1}. {proj.name}
                      </h3>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 hover:underline font-semibold"
                        >
                          <span>Live Web App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="text-[10px] font-mono uppercase text-slate-500 self-center font-medium mr-1">Tools:</span>
                      {proj.tools.map((t, ti) => (
                        <span key={ti} className="px-2 py-0.5 text-[10px] font-mono bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Areas of Expertise / Skills & Languages */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold border-b border-emerald-500/30 pb-1.5 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Areas of Expertise & Skills</span>
              </h2>

              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.map((skill, si) => (
                  <span 
                    key={si}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-slate-800 dark:text-slate-200 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Languages & Extracurriculars Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block mb-1">Languages:</span>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {RESUME_DATA.languages.join(', ')}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block mb-1">Key Responsibilities:</span>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    Sports Representative & Captain (2025–Present) · Toastmasters · Road Safety Club
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Modal Footer Banner */}
        <div className="p-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#070b1a]/90 font-mono">
          <span>Dr. N.G.P Institute of Technology · Class of 2028</span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Resume PDF verified & updated</span>
            <button
              onClick={handleDownloadOfficialPdf}
              className="text-cyan-700 dark:text-cyan-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Download Official PDF</span>
              <Download className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
