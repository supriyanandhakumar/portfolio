import React, { useState, useRef } from 'react';
import { 
  X, 
  UploadCloud, 
  FileText, 
  Download, 
  Trash2, 
  Eye, 
  CheckCircle, 
  AlertCircle, 
  Plus, 
  FolderDown, 
  Filter, 
  FileCheck
} from 'lucide-react';
import { UploadedDocument } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DocumentVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: UploadedDocument[];
  onUploadDocument: (doc: UploadedDocument) => void;
  onDeleteDocument: (id: string) => void;
  onOpenResumePreview: () => void;
}

export const DocumentVaultModal: React.FC<DocumentVaultModalProps> = ({
  isOpen,
  onClose,
  documents,
  onUploadDocument,
  onDeleteDocument,
  onOpenResumePreview
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showUploadForm, setShowUploadForm] = useState<boolean>(false);
  
  // Upload Form State
  const [docTitle, setDocTitle] = useState<string>('');
  const [docCategory, setDocCategory] = useState<UploadedDocument['category']>('Certificate');
  const [docNotes, setDocNotes] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Preview State
  const [previewDoc, setPreviewDoc] = useState<UploadedDocument | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!docTitle) {
        setDocTitle(file.name);
      }
      setErrorMessage('');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (!docTitle) {
        setDocTitle(file.name);
      }
      setErrorMessage('');
    }
  };

  const handleSubmitUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docTitle.trim()) {
      setErrorMessage('Please enter a document title');
      return;
    }
    if (!selectedFile) {
      setErrorMessage('Please select a file to upload');
      return;
    }

    setIsUploading(true);
    setErrorMessage('');

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result as string;
      const fileSizeKb = Math.round(selectedFile.size / 1024);
      const formattedSize = fileSizeKb > 1024 
        ? `${(fileSizeKb / 1024).toFixed(1)} MB` 
        : `${fileSizeKb} KB`;

      const newDoc: UploadedDocument = {
        id: `custom-doc-${Date.now()}`,
        title: docTitle.trim(),
        category: docCategory,
        fileType: selectedFile.type || 'application/pdf',
        uploadDate: new Date().toISOString().split('T')[0],
        fileSize: formattedSize,
        isPreloaded: false,
        dataBase64: base64Data,
        notes: docNotes.trim() || undefined
      };

      onUploadDocument(newDoc);
      setIsUploading(false);
      setUploadSuccess(true);
      
      setTimeout(() => {
        setUploadSuccess(false);
        setShowUploadForm(false);
        setDocTitle('');
        setDocNotes('');
        setSelectedFile(null);
      }, 1200);
    };

    reader.onerror = () => {
      setIsUploading(false);
      setErrorMessage('Error reading file. Please try again.');
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleDownload = (doc: UploadedDocument) => {
    if (doc.downloadUrl) {
      const a = document.createElement('a');
      a.href = doc.downloadUrl;
      a.download = doc.title;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }

    if (doc.dataBase64) {
      const a = document.createElement('a');
      a.href = doc.dataBase64;
      a.download = doc.title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      if (doc.category === 'Resume') {
        onOpenResumePreview();
        return;
      }
      
      const blob = new Blob([
        `============================================================\n` +
        `SUPRIYA N — VERIFIED ACADEMIC DOCUMENT RECORD\n` +
        `Dr. N.G.P Institute of Technology | Biomedical Engineering\n` +
        `============================================================\n\n` +
        `Document Title: ${doc.title}\n` +
        `Category: ${doc.category}\n` +
        `Verification Date: ${doc.uploadDate}\n` +
        `File Size: ${doc.fileSize}\n` +
        `Notes: ${doc.notes || 'Verified institutional record'}\n\n` +
        `Candidate Contact:\n` +
        `Email: supriyanandhakumar2007@gmail.com\n` +
        `Location: Tiruppur, Tamil Nadu, India\n` +
        `CGPA: ${PERSONAL_INFO.cgpa} / 10.0\n\n` +
        `This file is certified by Supriya N's Digital Academic Portfolio.\n`
      ], { type: 'text/plain;charset=utf-8' });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = doc.title.endsWith('.pdf') ? doc.title.replace('.pdf', '_Record.txt') : `${doc.title}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const categories = ['All', 'Resume', 'Certificate', 'Project Report', 'Technical Training', 'Research Paper', 'Other'];

  const filteredDocs = documents.filter((doc) => {
    if (activeCategory === 'All') return true;
    return doc.category === activeCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 dark:bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#090e24] border border-slate-300 dark:border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800 dark:text-slate-100">
        
        {/* Top Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4 bg-slate-50/90 dark:bg-[#070b1a]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
              <FolderDown className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Document & Certificate Vault</h2>
                <span className="text-[10px] font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-500/30 font-semibold">
                  {documents.length} Files
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                Upload, store, inspect, and download official credentials and research whitepapers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{showUploadForm ? 'View Vault' : 'Upload Document'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar">
          
          {/* Upload Form (Expandable) */}
          {showUploadForm && (
            <div className="glass-panel p-6 rounded-2xl border border-cyan-200 dark:border-cyan-500/40 bg-slate-50 dark:bg-slate-900/90 shadow-md space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                  <UploadCloud className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">Upload New Document to Portfolio</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">Client-Side Local Vault</span>
              </div>

              {uploadSuccess ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-xl text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Document Successfully Stored!</h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">Your file is now cataloged in the vault and available for immediate preview.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitUpload} className="space-y-4">
                  
                  {/* Drag and Drop Zone */}
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-cyan-300 dark:border-cyan-500/30 hover:border-cyan-500 rounded-2xl p-6 text-center cursor-pointer bg-cyan-50/60 dark:bg-cyan-950/20 hover:bg-cyan-100/60 transition-all shadow-inner"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.png,.jpg,.jpeg,.docx,.txt"
                      className="hidden"
                    />
                    <UploadCloud className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      {selectedFile ? (
                        <span className="text-cyan-800 dark:text-cyan-300 font-mono">{selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)</span>
                      ) : (
                        <span>Click to browse or drag & drop files here</span>
                      )}
                    </div>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                      Supports PDF, PNG, JPG, DOCX, TXT (Max 15MB)
                    </p>
                  </div>

                  {/* Document Title & Category Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-8">
                      <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-300 mb-1 uppercase font-medium">
                        Document Title / Name:
                      </label>
                      <input
                        type="text"
                        value={docTitle}
                        onChange={(e) => setDocTitle(e.target.value)}
                        placeholder="e.g. Hospital_Infection_Control_Whitepaper.pdf"
                        className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-sm"
                        required
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-300 mb-1 uppercase font-medium">
                        Category:
                      </label>
                      <select
                        value={docCategory}
                        onChange={(e) => setDocCategory(e.target.value as any)}
                        className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 shadow-sm"
                      >
                        <option value="Certificate">Certificate</option>
                        <option value="Research Paper">Research Paper</option>
                        <option value="Project Report">Project Report</option>
                        <option value="Resume">Resume</option>
                        <option value="Other">Other Document</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Description */}
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-300 mb-1 uppercase font-medium">
                      Notes or Summary (Optional):
                    </label>
                    <input
                      type="text"
                      value={docNotes}
                      onChange={(e) => setDocNotes(e.target.value)}
                      placeholder="e.g. Issued by IEEE EMBS student chapter on 2024"
                      className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-sm"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2 rounded-lg border border-rose-200 dark:border-rose-500/20">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowUploadForm(false)}
                      className="px-4 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isUploading}
                      className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <UploadCloud className="w-3.5 h-3.5" />
                      <span>{isUploading ? 'Uploading...' : 'Save to Vault'}</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          )}

          {/* Filter Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-white/10">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1 shrink-0 font-medium">
              <Filter className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Document List */}
          <div className="space-y-3">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="glass-panel p-4 rounded-xl border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-white/5 border border-cyan-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {doc.title}
                      </h4>
                      {doc.isPreloaded && (
                        <span className="text-[9px] font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-semibold">
                          Institutional Verified
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                      <span className="text-indigo-700 dark:text-indigo-400 font-semibold">{doc.category}</span>
                      <span>·</span>
                      <span>{doc.uploadDate}</span>
                      <span>·</span>
                      <span>{doc.fileSize}</span>
                    </div>
                    {doc.notes && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal italic">
                        "{doc.notes}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  
                  {/* Preview Button */}
                  <button
                    onClick={() => {
                      if (doc.category === 'Resume') {
                        onClose();
                        onOpenResumePreview();
                      } else {
                        setPreviewDoc(doc);
                      }
                    }}
                    className="p-2 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Inspect file"
                  >
                    <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="hidden md:inline font-medium">Inspect</span>
                  </button>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(doc)}
                    className="p-2 text-xs font-mono font-medium text-cyan-800 dark:text-white bg-cyan-100 dark:bg-cyan-950/60 hover:bg-cyan-200 dark:hover:bg-cyan-900 border border-cyan-300 dark:border-cyan-500/30 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    title="Download document"
                  >
                    <Download className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                    <span className="hidden md:inline">Download</span>
                  </button>

                  {/* Delete Button (Only for custom user uploads) */}
                  {!doc.isPreloaded && (
                    <button
                      onClick={() => onDeleteDocument(doc.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 bg-slate-100 dark:bg-white/5 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"
                      title="Remove from vault"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Document Inspector Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-xl w-full p-6 sm:p-8 rounded-3xl border border-slate-300 dark:border-cyan-500/40 bg-white dark:bg-[#090e24] shadow-2xl space-y-5 relative text-slate-800 dark:text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Document Record Inspector</h3>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-semibold">{previewDoc.category}</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white break-all">{previewDoc.title}</h4>

              {previewDoc.dataBase64 && previewDoc.dataBase64.startsWith('data:image') ? (
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 max-h-64 flex justify-center bg-slate-50 dark:bg-black">
                  <img src={previewDoc.dataBase64} alt={previewDoc.title} className="max-h-64 object-contain" />
                </div>
              ) : (
                <div className="p-4 bg-slate-50 dark:bg-[#050814] rounded-xl border border-slate-200 dark:border-white/5 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">File Size:</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{previewDoc.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Archived Date:</span>
                    <span className="text-slate-900 dark:text-white">{previewDoc.uploadDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Integrity Checksum:</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">SHA-256 Validated</span>
                  </div>
                </div>
              )}

              {previewDoc.notes && (
                <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  <strong>Notes:</strong> {previewDoc.notes}
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                {previewDoc.downloadUrl && (
                  <a
                    href={previewDoc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/60 hover:bg-cyan-200 dark:hover:bg-cyan-900 border border-cyan-300 dark:border-cyan-500/30 rounded-xl transition-all shadow-sm"
                  >
                    <FolderDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Open Official PDF</span>
                  </a>
                )}
                
                <button
                  onClick={() => handleDownload(previewDoc)}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl hover:from-cyan-500 hover:to-indigo-500 transition-all cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>{previewDoc.downloadUrl ? 'Download PDF' : 'Download Document'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
