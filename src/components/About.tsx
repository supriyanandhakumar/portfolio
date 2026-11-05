import React, { useState } from 'react';
import { 
  Activity, 
  Sparkles, 
  Cpu, 
  Eye, 
  Microscope, 
  Building2, 
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Stethoscope
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      title: "Biomedical Engineering",
      icon: Activity,
      color: "from-cyan-500 to-blue-600",
      tag: "Core Academic Foundation",
      summary: "Bridging mechanical, electrical, and computational principles with physiological anatomy to solve acute healthcare challenges.",
      deepDive: "Currently pursuing B.E. at Dr. N.G.P. iTech with rigorous exposure to bio-potential acquisition (ECG, EMG, EEG), transducer design, bio-impedance measurement, and medical safety compliance."
    },
    {
      title: "Artificial Intelligence in Healthcare",
      icon: Sparkles,
      color: "from-purple-500 to-indigo-600",
      tag: "Predictive & Assistive Tech",
      summary: "Designing intelligent neural pipelines and multimodal models to empower non-verbal patients and automate early clinical alerts.",
      deepDive: "Leveraging Google Gemini AI and machine learning architectures for natural speech vocalization from gesture vectors, and automated hospital sterilization triage algorithms."
    },
    {
      title: "Medical Device Innovation",
      icon: Cpu,
      color: "from-pink-500 to-rose-600",
      tag: "Hardware Calibration & Safety",
      summary: "Understanding the complete lifecycle of clinical instrumentation from transducer sensing to patient monitor verification.",
      deepDive: "Gained direct industrial experience at Atheenapandian Pvt. Ltd. calibrating patient monitors, checking leakage currents, operating oscilloscopes, and inspecting surgical diagnostic rigs."
    },
    {
      title: "Computer Vision",
      icon: Eye,
      color: "from-emerald-500 to-teal-600",
      tag: "Spatial Landmark Analysis",
      summary: "Engineering real-time video stream interpreters utilizing OpenCV to capture intricate fine-motor hand gestures and morphological markers.",
      deepDive: "Hands-on experience processing 30fps webcam feeds, tracking 21 spatial finger joint vectors, and transforming optical data into clinical communication tokens."
    },
    {
      title: "Bridging Silence (1st Year STEM)",
      icon: Eye,
      color: "from-emerald-500 to-teal-600",
      tag: "Assistive AI & Computer Vision",
      summary: "Webcam-based real-time sign language interpreter translating 21 skeletal hand landmarks into natural speech for non-verbal patients.",
      deepDive: "Executed as 1st year STEM innovation project with team members Supriya N (Roll: 710724121058), Sowmitha P U, Pavithra R, and Mohana Mithra S. Combines OpenCV 30 FPS video parsing, LLaVA-NLP reasoning, and Kokoro-AI 82M TTS."
    },
    {
      title: "Tricol BioRegen Band (2nd Year BME)",
      icon: Microscope,
      color: "from-amber-500 to-orange-600",
      tag: "Biomaterials & Herbal Wound Care",
      summary: "Nature-boosted wound healing bio-dressing incorporating Tridax procumbens botanical flavonoids with a gelatin-collagen matrix.",
      deepDive: "2nd Year Biomedical Engineering project under Dr. J. Revathi. Lab validated with in-vitro hemolysis test (-1.9% negligible RBC lysis, ASTM F756 compliant) and physiological pH of 5.2 matching human skin acid mantle."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-200/30 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <HeartPulse className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Identity & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Supriya N</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Biomedical Engineering student (Class of 2028) at Dr. N.G.P Institute of Technology, combining physiological science, computer vision, and machine learning to build compassionate, life-enhancing technologies.
          </p>
        </div>

        {/* Narrative & Career Philosophy */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/10 space-y-5">
            <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-400">
              <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Engineering Mission</h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Healthcare technology is entering a transformative era where artificial intelligence and bio-electronic instrumentation converge. My academic journey is driven by a deep conviction: medical devices should not only diagnose but actively democratize access to quality care.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              From developing <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Bridging Silence (1st Year STEM Project)</strong> for emergency sign language vocalization with LLaVA-NLP and Kokoro-AI, to engineering <strong className="text-purple-700 dark:text-purple-300 font-semibold">Tricol BioRegen Band (2nd Year BME Project)</strong> with nature-boosted Tridax procumbens wound dressing, my focus is translating clinical theory into tangible, human-centered prototypes.
            </p>

            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono">
              <div>
                <span className="text-slate-400 dark:text-slate-500 uppercase block font-medium">Institution</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">Dr. N.G.P. iTech</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 uppercase block font-medium">Location</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">Coimbatore, India</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 uppercase block font-medium">Graduation</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Class of 2028</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Interdisciplinary Mindset</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal">Merging biological anatomy with computational algorithms (OpenCV, Gemini AI, Python).</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Clinical & Industrial Grounding</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal">Direct industrial experience at Atheenapandian handling patient monitors and ISO safety standards.</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-pink-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Empathetic Leadership</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal">Elected Department Sports Representative, Toastmasters speaker & Road Safety Club member.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Core Pillars Visual Cards */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Key Pillars of Expertise</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">Click any card to explore academic depth and practical application</p>
            </div>
            <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 hidden sm:block font-semibold">
              Interactive Matrix
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillar === idx;

              return (
                <div
                  key={pillar.title}
                  onClick={() => setSelectedPillar(isSelected ? null : idx)}
                  className={`glass-panel p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                    isSelected 
                      ? 'border-cyan-500 bg-white dark:bg-slate-900/90 shadow-lg shadow-cyan-500/10' 
                      : 'border-slate-200/90 dark:border-white/10 hover:border-cyan-400/50 hover:bg-white dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Subtle top color glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-80`}></div>

                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-[1px] shadow-sm`}>
                      <div className="w-full h-full bg-white dark:bg-[#070b1a] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-700 dark:text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold block">{pillar.tag}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Expanded deep dive section */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-cyan-500/20 text-xs text-slate-700 dark:text-cyan-200/90 leading-relaxed animate-in fade-in duration-300 bg-cyan-50/50 dark:bg-transparent p-3 rounded-xl">
                      <span className="font-semibold text-slate-900 dark:text-white block mb-1">Academic & Project Application:</span>
                      {pillar.deepDive}
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors font-medium">
                    <span>{isSelected ? "Collapse Details" : "Learn More"}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-cyan-600 dark:text-cyan-400' : 'group-hover:translate-x-1'}`} />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
