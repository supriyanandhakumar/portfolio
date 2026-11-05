import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  FileBadge, 
  Building, 
  Calendar, 
  Award, 
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { CertificateItem } from '../types/portfolio';

interface CertificateViewerModalProps {
  certificate: CertificateItem | null;
  certificatesList: CertificateItem[];
  onClose: () => void;
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const CertificateViewerModal: React.FC<CertificateViewerModalProps> = ({
  certificate,
  certificatesList,
  onClose,
  onSelectCertificate
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const modalRef = useRef<HTMLDivElement>(null);

  // Initialize rotation from certificate default when certificate changes
  useEffect(() => {
    if (certificate) {
      setZoom(1);
      setRotation(certificate.defaultRotation || 0);
      setPosition({ x: 0, y: 0 });
    }
  }, [certificate]);

  // Handle Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!certificate) return;
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key.toLowerCase() === 'r') {
        handleRotate();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, isFullscreen]);

  if (!certificate) return null;

  const currentIndex = certificatesList.findIndex(c => c.id === certificate.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < certificatesList.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      onSelectCertificate(certificatesList[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectCertificate(certificatesList[currentIndex + 1]);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setRotation(certificate.defaultRotation || 0);
    setPosition({ x: 0, y: 0 });
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  const handleDownload = () => {
    const fileUrl = certificate.previewUrl;
    const extension = certificate.fileType === 'pdf' ? 'pdf' : 'jpeg';
    const cleanFileName = `Supriya_N_${certificate.title.replace(/[^a-zA-Z0-9]/g, '_')}.${extension}`;

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = cleanFileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Mouse Drag handling for panning when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const categoryGradients: Record<string, string> = {
    'Internship': 'from-cyan-500 to-blue-600',
    'Workshops': 'from-purple-500 to-indigo-600',
    'Technical Events': 'from-emerald-500 to-teal-600',
    'Paper Presentations': 'from-amber-500 to-orange-600',
    'Projects': 'from-blue-600 to-indigo-700',
    'Leadership and Achievements': 'from-rose-500 to-pink-600'
  };

  const badgeColor = categoryGradients[certificate.category] || 'from-indigo-500 to-purple-600';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className={`relative bg-white dark:bg-[#070b1a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 text-slate-800 dark:text-slate-100 ${
          isFullscreen 
            ? 'w-full h-full rounded-none fixed inset-0 z-50' 
            : 'w-full max-w-6xl max-h-[94vh]'
        }`}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-[#090e24]/90 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
          
          {/* Certificate Title & Category Pill */}
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${badgeColor} flex items-center justify-center text-white shrink-0 shadow-sm`}>
              <FileBadge className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                  {certificate.category}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                  {currentIndex + 1} of {certificatesList.length}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {certificate.title}
              </h3>
            </div>
          </div>

          {/* Viewer Interactive Controls Strip */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            
            {/* Zoom Controls (Images only) */}
            {certificate.fileType === 'image' && (
              <div className="hidden sm:flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-0.5">
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out (-)"
                  disabled={zoom <= 0.5}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-semibold select-none">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  title="Zoom In (+)"
                  disabled={zoom >= 3.0}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {(zoom !== 1 || rotation !== (certificate.defaultRotation || 0)) && (
                  <button
                    onClick={handleResetZoom}
                    title="Reset View"
                    className="p-1.5 rounded-lg text-cyan-600 dark:text-cyan-400 hover:bg-white dark:hover:bg-white/10 transition-colors ml-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* Rotate Button (Available for all image certificates to orient properly) */}
            {certificate.fileType === 'image' && (
              <button
                onClick={handleRotate}
                title="Rotate 90° Clockwise (R)"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            )}

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Direct Download Button */}
            <button
              onClick={handleDownload}
              title="Download Certificate File"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Certificate Display Area */}
        <div 
          className="relative flex-1 bg-slate-100/80 dark:bg-[#030611] overflow-hidden flex items-center justify-center p-3 sm:p-6 select-none min-h-[350px] sm:min-h-[460px]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          {/* Navigation Chevron Left */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              title="Previous Certificate (Left Arrow)"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-xl transition-all hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Navigation Chevron Right */}
          {hasNext && (
            <button
              onClick={handleNext}
              title="Next Certificate (Right Arrow)"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-xl transition-all hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Render PDF vs Image */}
          {certificate.fileType === 'pdf' ? (
            <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl max-h-[72vh]">
              <iframe
                src={`${certificate.previewUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title={certificate.title}
                className="w-full h-[65vh] rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg bg-white"
              />
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={certificate.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 rounded-xl hover:bg-cyan-100 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full PDF in New Tab</span>
                </a>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                transformOrigin: 'center center'
              }}
            >
              <img
                src={certificate.previewUrl}
                alt={certificate.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl shadow-2xl border border-slate-300/80 dark:border-white/10 pointer-events-auto"
                draggable={false}
              />
            </div>
          )}

          {/* Rotation Helper Pill if rotated */}
          {rotation !== 0 && certificate.fileType === 'image' && (
            <div className="absolute bottom-3 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-cyan-300 border border-cyan-500/30 z-10">
              Rotated {rotation}°
            </div>
          )}
        </div>

        {/* Certificate Metadata & Details Footer */}
        <div className="px-5 sm:px-8 py-4 bg-white dark:bg-[#070b1a] border-t border-slate-200 dark:border-white/10 space-y-3 shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 space-y-1.5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                  <Building className="w-3.5 h-3.5" />
                  <span>{certificate.issuer}</span>
                </span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{certificate.issueDate}</span>
                </span>
                {certificate.credentialId && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="font-mono text-[11px] text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-500/30">
                      ID: {certificate.credentialId}
                    </span>
                  </>
                )}
                {certificate.scoreOrAward && (
                  <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30 font-bold">
                    {certificate.scoreOrAward}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Verified Skills Tags */}
            <div className="md:col-span-4 flex flex-wrap gap-1.5 justify-start md:justify-end">
              {certificate.skillsAcquired && certificate.skillsAcquired.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
