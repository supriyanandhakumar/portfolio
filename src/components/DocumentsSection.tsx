import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  ExternalLink, 
  FolderDown, 
  FileBadge, 
  FileCheck, 
  Sparkles,
  Maximize2,
  X,
  Calendar,
  Layers
} from 'lucide-react';
import { UploadedDocument } from '../types/portfolio';

interface DocumentsSectionProps {
  documents: UploadedDocument[];
  onOpenVault: () => void;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  documents,
  onOpenVault
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewDoc, setPreviewDoc] = useState<UploadedDocument | null>(null);

  const categories = [
    'All',
    'Project Report',
    'Certificate',
    'Technical Training',
    'Research Paper',
    'Resume'
  ];

  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        doc.title.toLowerCase().includes(q) ||
        (doc.notes && doc.notes.toLowerCase().includes(q)) ||
        doc.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [documents, selectedCategory, searchQuery]);

  const handleDownload = (doc: UploadedDocument) => {
    if (doc.downloadUrl) {
      const link = document.createElement('a');
      link.href = doc.downloadUrl;
      link.download = doc.title;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (doc.dataBase64) {
      const link = document.createElement('a');
      link.href = doc.dataBase64;
      link.download = doc.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Project Report':
        return 'text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-500/30';
      case 'Certificate':
        return 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-500/30';
      case 'Technical Training':
        return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-500/30';
      case 'Research Paper':
        return 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-500/30';
      case 'Resume':
        return 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-300 dark:border-indigo-500/30';
      default:
        return 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border-slate-300 dark:border-white/10';
    }
  };

  return (
    <section id="documents" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-[#050816]/70 border-t border-slate-200/80 dark:border-white/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/30 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
              <FolderDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Academic Dossiers & Reports</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Official <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Documents & PDFs</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-normal max-w-2xl">
              Access and preview official institutional research project reports, NPTEL academic credentials, IIT Bombay technical tutorials, and verified symposium dossiers.
            </p>
          </div>

          <button
            onClick={onOpenVault}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/20 self-start md:self-auto cursor-pointer"
          >
            <FolderDown className="w-4 h-4 text-cyan-200" />
            <span>Interactive Document Vault</span>
          </button>
        </div>

        {/* Filter Pills & Search Bar Strip */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer font-medium ${
                    selectedCategory === cat
                      ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30 font-bold'
                      : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                  }`}
                >
                  {cat === 'All' ? `All Documents (${documents.length})` : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search documents or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
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
            <span>Showing {filteredDocuments.length} document{filteredDocuments.length === 1 ? '' : 's'}</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <FileCheck className="w-3.5 h-3.5" />
              <span>All files verified & directly accessible</span>
            </span>
          </div>
        </div>

        {/* Documents Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => {
            const isPdf = doc.fileType.includes('pdf');

            return (
              <div
                key={doc.id}
                className="glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 p-5 flex flex-col justify-between shadow-sm hover:shadow-md group"
              >
                <div>
                  
                  {/* Top Header: Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-lg border ${getCategoryColor(doc.category)}`}>
                      {doc.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{doc.uploadDate}</span>
                    </span>
                  </div>

                  {/* Document Title */}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {doc.title.replace(/_/g, ' ')}
                  </h3>

                  {/* File Metadata */}
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{doc.fileSize}</span>
                    <span>·</span>
                    <span className="uppercase text-[11px]">{isPdf ? 'PDF Document' : 'Image Scan'}</span>
                  </div>

                  {/* Context Notes */}
                  {doc.notes && (
                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal line-clamp-2">
                      {doc.notes}
                    </p>
                  )}

                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
                  
                  <button
                    onClick={() => setPreviewDoc(doc)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 rounded-xl transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {doc.downloadUrl && (
                      <a
                        href={doc.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                        title="Open in new browser tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => handleDownload(doc)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-sm cursor-pointer"
                      title="Direct download file"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Embedded Document Preview Modal */}
      {previewDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPreviewDoc(null);
          }}
        >
          <div className="relative w-full max-w-5xl bg-white dark:bg-[#070b1a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-800 dark:text-slate-100">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-[#090e24]/90 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${getCategoryColor(previewDoc.category)}`}>
                    {previewDoc.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white truncate mt-0.5">
                    {previewDoc.title.replace(/_/g, ' ')}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {previewDoc.downloadUrl && (
                  <a
                    href={previewDoc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Tab</span>
                  </a>
                )}

                <button
                  onClick={() => handleDownload(previewDoc)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Preview */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100/60 dark:bg-[#030611] flex flex-col items-center justify-center">
              {previewDoc.fileType.includes('pdf') && previewDoc.downloadUrl ? (
                <iframe
                  src={`${previewDoc.downloadUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  title={previewDoc.title}
                  className="w-full h-[66vh] rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg bg-white"
                />
              ) : previewDoc.downloadUrl || previewDoc.dataBase64 ? (
                <div className="max-h-[66vh] flex items-center justify-center overflow-auto">
                  <img
                    src={previewDoc.downloadUrl || previewDoc.dataBase64}
                    alt={previewDoc.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[64vh] w-auto object-contain rounded-xl shadow-lg border border-slate-200 dark:border-white/10"
                  />
                </div>
              ) : (
                <div className="text-center p-8 space-y-3">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Preview generated for this record. Use download button for full access.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer Notes */}
            {previewDoc.notes && (
              <div className="px-6 py-3 bg-white dark:bg-[#070b1a] border-t border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 font-normal">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Dossier Note: </span>
                {previewDoc.notes}
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
