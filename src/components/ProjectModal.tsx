import React, { useState } from 'react';
import { 
  X, 
  Camera, 
  Volume2, 
  Layers, 
  Activity, 
  Check, 
  FileText,
  FolderDown,
  Award,
  ExternalLink,
  Cpu,
  TestTube2
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenVault: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenVault }) => {
  if (!project) return null;

  // State for Sign Language Demo (1st Year Project: Bridging Silence)
  const [selectedGesture, setSelectedGesture] = useState<string>("Need Medical Assistance");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [lastSpoken, setLastSpoken] = useState<string>("");

  const gestures = [
    { 
      name: "Need Medical Assistance", 
      translation: "Nurse, I urgently need medical assistance, experiencing severe discomfort.", 
      confidence: "98.7%", 
      pose: "Open palm over chest",
      llavaInterpretation: "Patient displays high distress hand posture mapped to emergency nurse triage call."
    },
    { 
      name: "Pain Level 5", 
      translation: "My surgical pain is currently at level 5 out of 10.", 
      confidence: "97.4%", 
      pose: "Hand splayed, 5 fingers vertical",
      llavaInterpretation: "Numeric ordinal gesture identified: 5 fingers vertical corresponding to Wong-Baker pain scale 5."
    },
    { 
      name: "Call Doctor", 
      translation: "Please notify the on-call physician for evaluation.", 
      confidence: "99.1%", 
      pose: "Index & thumb L-shape against wrist",
      llavaInterpretation: "Physician summons token generated; IoT transmission queued to NodeMCU station."
    },
    { 
      name: "Need Water", 
      translation: "Could I please have a glass of drinking water?", 
      confidence: "96.8%", 
      pose: "Curled fingers to mouth",
      llavaInterpretation: "Hydration request gesture recognized; bedside nurse prompt displayed."
    },
    { 
      name: "Thank You", 
      translation: "Thank you so much for your attentive care.", 
      confidence: "99.4%", 
      pose: "Hand outward from chin",
      llavaInterpretation: "Politeness token recognized; audio vocalizer synthesis triggered."
    }
  ];

  // State for Biomaterial Layer Explorer (2nd Year Project: Tricol Bioregen Band)
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const biomaterialLayers = [
    {
      name: "Gelatin-Collagen Bio-Polymer Matrix",
      role: "Structural Extracellular Scaffold & Cell Support",
      thickness: "120 µm",
      description: "Porous micro-fibrillar bio-polymeric matrix synthesized from pharmaceutical gelatin and collagen, mimicking native extracellular dermis to facilitate fibroblast migration.",
      metric: "-1.9% Hemolysis (ASTM F756 Compliant)",
      color: "from-cyan-500 to-blue-600",
      spec: "Natural biodegradable structural backbone"
    },
    {
      name: "Tridax Procumbens Bioactive Flavonoid Extract",
      role: "Epithelial Regeneration & Phytochemical Defense",
      thickness: "45 µm",
      description: "Ethanolic extract rich in quercetin, luteolin, and apigenin flavonoids known for potent anti-inflammatory, hemostatic, and tissue proliferation properties.",
      metric: "Enhanced Epithelialization",
      color: "from-emerald-500 to-teal-600",
      spec: "Botanical active principle from fresh leaves"
    },
    {
      name: "Polyvinyl Alcohol (PVA) Crosslinker & Plasticizer",
      role: "Tensile Flexibility & Moisture Vapor Control",
      thickness: "60 µm",
      description: "Biocompatible synthetic polymer cross-linked at 50°C to impart mechanical elasticity, preventing dressing brittleness upon drying and maintaining wound bed hydration.",
      metric: "Optimal Tensile Flexibility",
      color: "from-indigo-500 to-purple-600",
      spec: "Controlled elasticity & tear resistance"
    },
    {
      name: "Lyophilized Porous Exudate Capillary Network",
      role: "High-Volume Exudate Absorption & Bacterial Barrier",
      thickness: "90 µm",
      description: "Freeze-dried micro-porous structure engineered through lyophilization, providing high capillary uptake of purulent discharge while maintaining dermal acid mantle at pH 5.2.",
      metric: "pH 5.2 Skin Mantle Match",
      color: "from-pink-500 to-rose-600",
      spec: "Lyophilized sponge architecture"
    }
  ];

  // Trigger real Web Speech API (synthesizing the Kokoro-AI StyleTTS output)
  const handleVocalizeSpeech = (text: string) => {
    setIsTranslating(true);
    setLastSpoken(text);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsTranslating(false);
      utterance.onerror = () => setIsTranslating(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsTranslating(false), 900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 dark:bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#090e24] border border-slate-300 dark:border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800 dark:text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4 bg-slate-50/95 dark:bg-[#070b1a]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest font-semibold">{project.yearTag}</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">{project.domain}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.reportPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-sm"
              title="Open full official PDF report in new tab"
            >
              <FolderDown className="w-4 h-4 text-cyan-200" />
              <span>Official PDF Report</span>
              <ExternalLink className="w-3 h-3 text-cyan-200" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 relative group shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 dark:from-[#070b1a] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-white bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 font-medium">
                  {project.subtitle}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              
              {/* Institutional Supervision Box */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/90 dark:border-white/5 space-y-2 bg-slate-50/70 dark:bg-slate-900/50">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-bold uppercase">
                  <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Institutional Research Credentials</span>
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div><strong>Guide:</strong> {project.guide}</div>
                  <div><strong>HoD:</strong> {project.hod}</div>
                  <div><strong>Team:</strong> {project.teamMembers.join(' · ')}</div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/90 dark:border-white/5 space-y-2.5">
                <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">Core Stack & Instruments</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-2.5 py-1 text-xs font-mono bg-cyan-50 dark:bg-white/5 border border-cyan-200 dark:border-white/10 text-cyan-800 dark:text-cyan-300 rounded-lg font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical & Engineering Impact */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/90 dark:border-white/5 space-y-1.5">
                <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">Project Impact</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {project.impact}
                </p>
              </div>

              {/* Direct PDF Link & Vault trigger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={project.reportPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl transition-all shadow-sm text-center"
                >
                  <FolderDown className="w-4 h-4 text-cyan-200" />
                  <span>Open PDF Report</span>
                </a>

                <button
                  onClick={onOpenVault}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 rounded-xl transition-all shadow-sm"
                >
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Document Vault</span>
                </button>
              </div>

            </div>

          </div>

          {/* 4 Quantitative Metrics from Official Project Report */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.reportMetrics.map((metric, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-medium">{metric.label}</span>
                <span className="text-lg font-bold font-mono text-cyan-700 dark:text-cyan-400 mt-1 block">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* Interactive Simulation Demo Stage: Project 1 (Bridging Silence) */}
          {project.demoType === 'gesture-translator' && (
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-200 dark:border-cyan-500/30 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <Camera className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Real-Time Sign Language AI Simulator</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">OpenCV 21-Landmarks · LLaVA-NLP Reasoning · Kokoro-AI 82M TTS</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-200 dark:border-cyan-500/20 font-medium self-start sm:self-auto">
                  Webcam Interface Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Simulated Webcam Viewport */}
                <div className="md:col-span-7 bg-slate-950 dark:bg-[#050814] text-white rounded-2xl p-5 border border-slate-800 dark:border-cyan-500/20 relative flex flex-col justify-between min-h-[280px] shadow-inner">
                  
                  {/* Top HUD bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      WEBCAM CAPTURE: 30 FPS ACTIVE
                    </span>
                    <span>RES: 1280x720 · NODEMCU READY</span>
                  </div>

                  {/* Center HUD Visual with 21-point hand tracking */}
                  <div className="my-6 flex flex-col items-center justify-center text-center">
                    <div className="relative w-44 h-44 border-2 border-cyan-400/40 rounded-2xl flex items-center justify-center bg-cyan-950/20">
                      
                      {/* Skeletal tracking points */}
                      <div className="absolute inset-2 flex flex-col justify-between p-2">
                        <div className="flex justify-between">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"></span>
                        </div>
                        <div className="flex justify-around">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-pink-400"></span>
                        </div>
                        <div className="flex justify-center">
                          <span className="w-3.5 h-3.5 rounded-full bg-cyan-300 ring-4 ring-cyan-500/30"></span>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-cyan-300 font-semibold px-2 py-1 bg-black/70 rounded">
                        21 Keypoints Locked
                      </span>
                    </div>

                    <div className="mt-3 text-xs font-mono text-slate-300">
                      Detected: <strong className="text-cyan-400">{selectedGesture}</strong>
                    </div>
                  </div>

                  {/* Bottom Speech Audio Bar */}
                  <div className="pt-3 border-t border-slate-800 dark:border-white/10 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-300 truncate">
                      <span className="text-slate-500 font-mono text-[10px] uppercase block">Kokoro-AI Natural Speech Vocalizer:</span>
                      "{gestures.find(g => g.name === selectedGesture)?.translation}"
                    </div>
                    
                    <button
                      onClick={() => handleVocalizeSpeech(gestures.find(g => g.name === selectedGesture)?.translation || "")}
                      disabled={isTranslating}
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl hover:from-cyan-500 hover:to-indigo-500 transition-all shrink-0 cursor-pointer shadow-md"
                    >
                      <Volume2 className={`w-4 h-4 ${isTranslating ? 'animate-bounce' : ''}`} />
                      <span>{isTranslating ? 'Speaking...' : 'Vocalize Voice'}</span>
                    </button>
                  </div>

                </div>

                {/* Gesture Selector & LLaVA Reasoning Panel */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">
                    Select Test Gesture Frame:
                  </div>

                  <div className="space-y-2">
                    {gestures.map((g) => (
                      <button
                        key={g.name}
                        onClick={() => setSelectedGesture(g.name)}
                        className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                          selectedGesture === g.name
                            ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-400 text-cyan-900 dark:text-cyan-200 font-semibold shadow-sm'
                            : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{g.name}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{g.pose}</div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">{g.confidence}</span>
                      </button>
                    ))}
                  </div>

                  {/* LLaVA Reasoning Box */}
                  <div className="p-3 bg-slate-50 dark:bg-[#070b1a] rounded-xl border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                    <span className="text-cyan-700 dark:text-cyan-400 font-bold block mb-1">LLaVA-NLP Clinical Parser:</span>
                    {gestures.find(g => g.name === selectedGesture)?.llavaInterpretation}
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* Interactive Simulation Demo Stage: Project 2 (Tricol Bioregen Band) */}
          {project.demoType === 'biomaterial-layer' && (
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-200 dark:border-purple-500/30 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <TestTube2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Biomaterial Matrix & Formulation Architecture</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Tridax Procumbens Extract · Gelatin Backbone · Lyophilized Scaffold</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                    Hemolysis: -1.9%
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-500/30">
                    pH: 5.2
                  </span>
                </div>
              </div>

              {/* Layer Selection Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {biomaterialLayers.map((layer, idx) => (
                  <button
                    key={layer.name}
                    onClick={() => setActiveLayer(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeLayer === idx
                        ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-400 shadow-md ring-2 ring-purple-400/20'
                        : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-purple-300'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 uppercase block font-semibold">Layer 0{idx + 1}</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 mt-0.5">{layer.name.split(' ')[0]} {layer.name.split(' ')[1]}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">{layer.metric}</span>
                  </button>
                ))}
              </div>

              {/* Active Layer Deep Dive Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 border border-purple-200 dark:border-purple-500/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono uppercase text-purple-700 dark:text-purple-400 font-bold">{biomaterialLayers[activeLayer].role}</span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{biomaterialLayers[activeLayer].name}</h4>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 self-start sm:self-auto">
                    {biomaterialLayers[activeLayer].spec}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {biomaterialLayers[activeLayer].description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block uppercase font-medium">Thickness</span>
                    <span className="text-slate-800 dark:text-slate-200 font-bold">{biomaterialLayers[activeLayer].thickness}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-medium">Biological Metric</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-bold">{biomaterialLayers[activeLayer].metric}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-medium">Validation Assay</span>
                    <span className="text-purple-700 dark:text-purple-300 font-bold">In-Vitro Lab Verified</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Highlights & Methodology Breakdown from Reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
            
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Key Innovations & Experimental Findings
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0 mt-1.5"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Technical & Laboratory Methodology
              </h3>
              <ul className="space-y-2">
                {project.methodology.map((m, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0 mt-1.5"></span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Project Technical Highlights Bullet Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070b1a] border border-slate-200 dark:border-white/10 space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider">
              Detailed Architecture & Laboratory Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {project.technicalHighlights.map((th, thIdx) => (
                <div key={thIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                  <span>{th}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
