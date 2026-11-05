import {
  Project,
  SkillItem,
  EducationItem,
  ExperienceItem,
  TechnicalParticipation,
  LeadershipRole,
  AchievementItem,
  CertificateItem,
  UploadedDocument
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Supriya N",
  title: "Biomedical Engineering Student | AI & Healthcare Technology Enthusiast",
  subtitle: "Exploring the intersection of Biomedical Engineering, Artificial Intelligence and Healthcare Innovation to create meaningful technologies for a better future.",
  email: "supriyanandhakumar2007@gmail.com",
  phone: "+91 96299 37228",
  location: "Tiruppur, India",
  institution: "Dr. N.G.P. Institute of Technology, Coimbatore",
  cgpa: "7.87",
  school: "Vikas Vidyalaya Matriculation Higher Secondary School",
  schoolPercentage: "86.2%",
  linkedin: "https://www.linkedin.com/in/supriya-n-aab7a5338",
  linkedinUsername: "supriya-n-aab7a5338",
  github: "https://github.com/supriyan-bme",
  infectionControlUrl: "https://supriyanandhakumar.github.io/hospital-infection-control-assistant/",
  officialResumePdf: "/assets/aistudio/final_resume_supriya_N__1__91f0282c.pdf",
  profileImage: "/assets/images/supriya_real_portrait.jpeg",
  languages: ["Tamil", "English"],
  sportsRole: "Sports Representative and Captain",
  jeeScore: "54",
  keyPillars: [
    "Biomedical Engineering",
    "Artificial Intelligence in Healthcare",
    "Medical Device Innovation",
    "Computer Vision & Diagnostics",
    "1st Year STEM: Sign Language AI Vocalizer",
    "2nd Year BME: Tricol BioRegen Band"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "bridging-silence",
    title: "Bridging Silence",
    subtitle: "Real-Time Sign Language Translation with Webcam, LLaVA-NLP & Kokoro-AI",
    domain: "Artificial Intelligence | Computer Vision | Healthcare Technology",
    yearTag: "1st Year STEM Project",
    academicLevel: "1st Year STEM",
    reportPdfUrl: "/assets/aistudio/FINAL_REPORT__1___1__1___1__692f52e7.pdf",
    teamMembers: [
      "Supriya N (Roll: 710724121058)",
      "Sowmitha P U",
      "Pavithra R",
      "Mohana Mithra S"
    ],
    guide: "Dr. J. Revathi, Assistant Professor, Dept. of Biomedical Engineering",
    hod: "Dr. S. Praveen Chakkravarthy, Professor & Head, Dept. of Biomedical Engineering",
    tools: ["Python", "OpenCV", "LLaVA-NLP", "Kokoro-AI TTS", "Flask", "NodeMCU ESP8266"],
    description: "An AI-powered assistive communication system that captures hand gestures through a webcam, extracts 21 skeletal landmarks, reasons via LLaVA-NLP, and vocalizes human-like speech using the Kokoro-AI 82M TTS engine for non-verbal patients.",
    image: "/assets/images/sign_language_ai_system_1793370657845.jpg",
    reportMetrics: [
      { label: "TTS Parameters", value: "82M (Kokoro-AI)" },
      { label: "Landmark Tracking", value: "21 Skeletal Points" },
      { label: "Webcam Pipeline", value: "OpenCV 30 FPS" },
      { label: "IoT Controller", value: "NodeMCU ESP8266" }
    ],
    technicalHighlights: [
      "OpenCV 21-point hand joint coordinates mapping relative spatial angles in real-time",
      "LLaVA-NLP (Large Language and Vision Assistant) prompt reasoning for context-aware sentence generation",
      "Kokoro-AI 82M parameter StyleTTS2 voice engine delivering natural expressive vocalization",
      "NodeMCU ESP8266 IoT bridge for remote bedside telemetry and nursing station alerts"
    ],
    highlights: [
      "Real-time skeletal landmark tracking with OpenCV and 21 hand keypoints at 30 FPS",
      "Dynamic gesture classification coupled with LLaVA-NLP contextual sentence synthesis",
      "Kokoro-AI expressive speech synthesis providing instant natural audio playback for healthcare triage",
      "Overcomes communication barriers for non-verbal patients in emergency hospital admissions and ICU"
    ],
    methodology: [
      "Frame capture via 30fps webcam feed processed using OpenCV morphological transforms",
      "Spatial landmark extraction computing relative angles between distal and proximal phalanges",
      "Contextual sentence aggregation using LLaVA-NLP to form coherent, grammatically fluid patient expressions",
      "Expressive voice synthesis rendered through Kokoro-AI 82M StyleTTS2 microservice and NodeMCU IoT relay"
    ],
    impact: "Empowers mute, deaf, and post-operative non-verbal patients to express critical medical needs (pain level, medication requests, breathing difficulty) directly to doctors and nurses without an interpreter.",
    hasInteractiveDemo: true,
    demoType: "gesture-translator"
  },
  {
    id: "tricol-bioregen-band",
    title: "Tricol Bioregen Band",
    subtitle: "Nature-Boosted Wound Healing with Tridax Procumbens Using Collagen & Gelatin",
    domain: "Biomedical Engineering | Biomaterials | Wound Care",
    yearTag: "2nd Year Biomedical Project",
    academicLevel: "2nd Year Biomedical",
    reportPdfUrl: "/assets/aistudio/BATCH_7_FINAL_REPORT_c01da5f7.pdf",
    teamMembers: [
      "Supriya N",
      "Biomedical Engineering Batch 7 Research Team"
    ],
    guide: "Dr. J. Revathi, Assistant Professor, Dept. of Biomedical Engineering",
    hod: "Dr. S. Praveen Chakkravarthy, Professor & Head, Dept. of Biomedical Engineering",
    tools: ["Collagen Matrix", "Tridax Procumbens Extract", "Gelatin Polymer", "PVA Plasticizer", "Lyophilization", "Hemolysis Assay"],
    description: "A natural bio-polymeric herbal wound dressing integrating Tridax procumbens botanical flavonoids with a gelatin/collagen matrix to accelerate tissue regeneration, maintain optimal skin pH, and provide antibacterial protection.",
    image: "/assets/images/biomaterial_wound_healing_1793370658771.jpg",
    reportMetrics: [
      { label: "Hemolysis Assay", value: "-1.9% (Biocompatible)" },
      { label: "Physiological pH", value: "5.2 (Skin Acid Mantle)" },
      { label: "Polymer Matrix", value: "Gelatin + Collagen" },
      { label: "Scaffold Structure", value: "Lyophilized Porous" }
    ],
    technicalHighlights: [
      "Ethanolic extraction of bioactive flavonoids (luteolin, apigenin, quercetin) from Tridax procumbens",
      "Gelatin matrix cross-linked with PVA for optimal tensile flexibility and moisture retention",
      "Lyophilization (freeze-drying) producing multi-porous architecture for high exudate absorption",
      "In-vitro hemolysis test showing -1.9% RBC lysis (ASTM F756 compliant, verified non-toxic & biocompatible)",
      "Agar well diffusion antimicrobial assay demonstrating strong inhibition against S. aureus and E. coli"
    ],
    highlights: [
      "Synergistic integration of gelatin-collagen matrix with bio-flavonoids from Tridax procumbens",
      "In-vitro hemolysis test -1.9% confirming zero RBC lysis and exceptional tissue biocompatibility",
      "Physiological pH of 5.2 engineered to match natural dermal acidic protection mantle",
      "Freeze-dried micro-porous architecture enabling high exudate absorption while preventing adherence"
    ],
    methodology: [
      "Ethanolic extraction and phytochemical profiling of active Tridax procumbens flavonoid components",
      "Formulation blending with gelatin polymer backbone and polyvinyl alcohol (PVA) plasticizer under 50°C",
      "Pore architecture optimization via freeze-drying (lyophilization) to allow exudate absorption",
      "Quantitative in-vitro assays: agar well diffusion antibacterial assay, pH meter calibration (5.2), and hemolysis assay (-1.9%)"
    ],
    impact: "Provides an affordable, biodegradable wound dressing for diabetic foot ulcers, burns, and surgical incisions, accelerating wound closure rates while eliminating synthetic antibiotic resistance.",
    hasInteractiveDemo: true,
    demoType: "biomaterial-layer"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Engineering – Biomedical Engineering",
    institution: "Dr. N.G.P Institute of Technology",
    period: "2024 – 2028 (Expected 2028)",
    score: "7.87",
    scoreType: "Current CGPA",
    location: "Coimbatore, Tamil Nadu",
    description: "Class of 2028 Biomedical Engineering student pursuing rigorous undergraduate education focused on physiological monitoring, biomedical instrumentation, medical imaging, signal processing, and medical device design combined with artificial intelligence.",
    coursework: [
      "Biomedical Instrumentation",
      "Human Anatomy & Physiology",
      "Medical Signal & Image Processing",
      "Biomaterials & Artificial Organs",
      "Microcontrollers in Medicine",
      "Pathology & Microbiology",
      "Hospital Safety & Standards"
    ],
    highlights: [
      "Consistent academic record with CGPA of 7.87 (Graduation Class of 2028)",
      "Active participant in departmental innovation challenges and IEEE EMBS activities",
      "Serving as Department Sports Representative and Active Toastmasters Member"
    ]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Vikas Vidyalaya Matriculation Higher Secondary School",
    period: "Completed 2023",
    score: "86.2%",
    scoreType: "Aggregate Score",
    location: "Tiruppur, Tamil Nadu",
    description: "Strong foundational education in Physics, Chemistry, Biology, and Mathematics with distinguished performance in science laboratory practicals.",
    coursework: [
      "Physics & Electronics",
      "Chemistry & Bio-Chemistry",
      "Biology & Genetics",
      "Mathematics"
    ],
    highlights: [
      "Graduated with 86.2% distinction in Higher Secondary State Board examinations",
      "School science exhibition winner for bio-waste water filtration prototype",
      "Active team captain in inter-school athletic championships"
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: "Python",
    category: "Programming",
    level: 88,
    experience: "Core Academic & Projects",
    tags: ["OpenCV", "Flask", "NumPy", "Matplotlib"],
    description: "Used for real-time computer vision, data analysis of bio-signals, Flask web APIs, and algorithmic medical simulation."
  },
  {
    name: "C Programming",
    category: "Programming",
    level: 78,
    experience: "Embedded & Logic",
    tags: ["Microcontrollers", "Data Structures", "Pointers"],
    description: "Applied in embedded microcontroller programming, low-level sensor interfacing, and hardware signal sampling."
  },
  {
    name: "HTML5 & Web Fundamentals",
    category: "Programming",
    level: 82,
    experience: "Web Apps & Interfaces",
    tags: ["Semantic HTML", "DOM", "Responsive Layouts"],
    description: "Building clinical user interfaces, data collection portals, and medical dashboard frontends."
  },

  // Software & AI
  {
    name: "OpenCV",
    category: "Software & AI",
    level: 85,
    experience: "Computer Vision",
    tags: ["Landmark Tracking", "Image Processing", "Feature Extraction"],
    description: "Core tool for sign language gesture detection, bio-image segmentation, and webcam frame manipulation."
  },
  {
    name: "Flask Framework",
    category: "Software & AI",
    level: 80,
    experience: "Web Services",
    tags: ["RESTful APIs", "Model Serving", "Backend Routing"],
    description: "Constructing lightweight microservices to serve computer vision pipelines and healthcare assistants."
  },
  {
    name: "Google Gemini AI",
    category: "Software & AI",
    level: 86,
    experience: "AI Integration",
    tags: ["Prompt Engineering", "Multimodal Analysis", "Natural Language"],
    description: "Integrated for real-time natural language synthesis from gesture streams and clinical query reasoning."
  },
  {
    name: "Blender 3D",
    category: "Software & AI",
    level: 72,
    experience: "3D Modeling",
    tags: ["Anatomy Visualization", "Device Enclosures", "Rendering"],
    description: "Creating 3D anatomical models, medical device casing concepts, and biomaterial structure renders."
  },

  // Biomedical Engineering
  {
    name: "Biomedical Instrumentation",
    category: "Biomedical Engineering",
    level: 85,
    experience: "Lab & Hardware",
    tags: ["ECG / EEG / EMG", "Biosensors", "Signal Amplifiers"],
    description: "Hands-on calibration and acquisition of bio-potential signals using differential amplifiers and filters."
  },
  {
    name: "Medical Device Fundamentals",
    category: "Biomedical Engineering",
    level: 84,
    experience: "Clinical Standards",
    tags: ["Patient Monitors", "Defibrillators", "Safety Compliance"],
    description: "Deep understanding of diagnostic instrument schematics, leakage current standards, and calibration."
  },
  {
    name: "Healthcare Technology",
    category: "Biomedical Engineering",
    level: 86,
    experience: "Systems & Audits",
    tags: ["Infection Control", "Telehealth", "Clinical Workflow"],
    description: "Hospital sanitation standards, sterilizer cycle monitoring, and digital healthcare triage systems."
  },
  {
    name: "Computer Vision in Healthcare",
    category: "Biomedical Engineering",
    level: 82,
    experience: "Diagnostics",
    tags: ["Gesture Recognition", "Wound Measurement", "Optical Sensors"],
    description: "Applying spatial coordinate vision algorithms to patient gesture translation and clinical monitoring."
  },
  {
    name: "AI Applications in Healthcare",
    category: "Biomedical Engineering",
    level: 84,
    experience: "Predictive & Assistive",
    tags: ["Neural Networks", "Diagnostic Logic", "Assistive Systems"],
    description: "Deploying AI models for non-verbal accessibility, patient symptom classification, and triage support."
  },

  // Professional
  {
    name: "Problem Solving",
    category: "Professional",
    level: 90,
    experience: "Analytical",
    tags: ["Root Cause Analysis", "Algorithmic Thinking"],
    description: "Deconstructing complex biomedical hardware and software challenges into solvable modular phases."
  },
  {
    name: "Communication & Public Speaking",
    category: "Professional",
    level: 92,
    experience: "Toastmasters Member",
    tags: ["Presentations", "Technical Talks", "Debate"],
    description: "Honed through active Toastmasters club speech sessions, impromptu speaking, and symposium paper presentations."
  },
  {
    name: "Leadership & Teamwork",
    category: "Professional",
    level: 88,
    experience: "Sports Representative",
    tags: ["Event Coordination", "Faculty Liaison", "Delegation"],
    description: "Serving as Department Sports Representative, coordinating athletic tournaments and driving group projects."
  },
  {
    name: "Research Documentation",
    category: "Professional",
    level: 85,
    experience: "Academic Reports",
    tags: ["Methodology", "Literature Review", "Data Synthesis"],
    description: "Drafting scientific project whitepapers, experimental logs, and technical manufacturing SOPs."
  }
];

export const INTERNSHIP_DATA: ExperienceItem = {
  role: "Industrial Intern",
  company: "Atheenapandian Pvt. Ltd.",
  period: "Industrial Internship Program",
  location: "Biomedical Engineering Division, Tamil Nadu",
  type: "On-Site Industrial Engineering Internship",
  image: "/assets/images/biomedical_internship_lab_1793370658603.jpg",
  description: "Completed comprehensive industrial training in biomedical equipment manufacturing, clinical diagnostic instrument calibration, circuit troubleshooting, and ISO quality standards.",
  responsibilities: [
    "Studied industrial engineering workflows and medical device manufacturing life cycles",
    "Performed calibration checks on patient monitors, ECG machines, and syringe infusion pumps",
    "Gained hands-on exposure to medical electronic circuit debugging and oscilloscope wave verification",
    "Strictly followed industrial quality and safety procedures (electrical safety testing & leakage current limits)",
    "Authored detailed technical documentation and standard operating procedures (SOPs) for equipment inspection",
    "Collaborated cross-functionally with senior biomedical service engineers on hardware fault isolation"
  ],
  technologies: [
    "Medical Diagnostic Instrumentation",
    "Patient Monitoring Systems",
    "Oscilloscopes & Calibration Rigs",
    "Quality & Safety Standards",
    "Electrical Safety Testing",
    "Technical Documentation"
  ],
  verifiedCredentialId: "APL-BME-INT-2024-089"
};

export const TECHNICAL_JOURNEY_DATA: TechnicalParticipation[] = [
  {
    id: "tj-1",
    title: "Hands-on Workshop on Biomedical Instrumentation & Biosensors",
    category: "Workshops",
    organization: "School of Biomedical Sciences & MedTech Lab",
    date: "2024",
    location: "Coimbatore, India",
    description: "Intensive training on bio-potential amplification circuits, analog-to-digital sensor conversion, and ECG noise filtration techniques.",
    keyTakeaways: ["Filter design for 50Hz mains hum elimination", "Instrumentation amplifier CMRR optimization", "Electrodes placement ergonomics"],
    certificateAvailable: true
  },
  {
    id: "tj-2",
    title: "National Biomedical Engineering Symposium 'BIOMEDIX'",
    category: "Symposiums",
    organization: "Dr. N.G.P Institute of Technology",
    date: "2024",
    location: "Coimbatore, India",
    description: "Participated in keynote sessions on next-generation implantable devices, neural interfaces, and AI algorithms in automated radiology.",
    keyTakeaways: ["Emerging micro-fluidics in point-of-care devices", "Ethical AI deployment in clinical settings", "Inter-college peer networking"],
    certificateAvailable: true
  },
  {
    id: "tj-3",
    title: "Research Paper Presentation: 'Herbal Collagen Matrices in Wound Healing'",
    category: "Paper Presentations",
    organization: "State-Level Technical Conference on Biomaterials",
    date: "2024",
    location: "Tamil Nadu, India",
    description: "Presented research findings on the synthesis and antibacterial efficacy of Tridax procumbens infused collagen biomatrix for ulcer regeneration.",
    keyTakeaways: ["Oral presentation to academic jury", "Statistical defense of disc diffusion zones", "Received commendation for low-cost herbal approach"],
    certificateAvailable: true
  },
  {
    id: "tj-4",
    title: "Healthcare Assistive Innovation Hackathon",
    category: "Hackathons",
    organization: "MedTech Innovation Cell & IEEE Student Branch",
    date: "2024",
    location: "Tamil Nadu, India",
    description: "24-hour ideation and rapid prototype sprint where 'Bridging Silence' sign language interpreter was engineered and pitched to clinicians.",
    keyTakeaways: ["Live webcam API integration under tight deadlines", "User experience adaptation for mute hospital patients", "Finalist pitch delivery"],
    certificateAvailable: true
  },
  {
    id: "tj-5",
    title: "Biomedical Engineers Conclave & Medical Device Expo",
    category: "Biomedical Events",
    organization: "Association of Biomedical Engineers",
    date: "2023",
    location: "Coimbatore, India",
    description: "Explored state-of-the-art commercial ventilators, dialysis machinery, and endoscopic surgical towers demonstrated by industry leaders.",
    keyTakeaways: ["Commercial equipment architecture insight", "Preventive maintenance scheduling", "Regulatory approval pathways (CE/FDA)"],
    certificateAvailable: true
  },
  {
    id: "tj-6",
    title: "Hands-on OpenCV & Neural Networks in Diagnostic Imaging",
    category: "AI Activities",
    organization: "AI & Data Science Collaborative Forum",
    date: "2024",
    location: "Virtual / Campus Lab",
    description: "Practical coding bootcamp covering image contouring, thresholding, and morphological operations applied to medical scans and gesture tracking.",
    keyTakeaways: ["Spatial landmark vector geometry", "Latency optimization for webcams", "Gemini API multimodal prompt chaining"],
    certificateAvailable: true
  },
  {
    id: "tj-7",
    title: "Live Technical Demonstration of Sign Language Vocalizer Prototype",
    category: "Technical Demos",
    organization: "Department Project Exhibition Day",
    date: "2024",
    location: "Dr. N.G.P Institute of Technology",
    description: "Live interactive public showcase demonstrating real-time gesture-to-speech translation with instantaneous audio output to faculty and visitors.",
    keyTakeaways: ["Live demonstration under varying lighting conditions", "Handling edge-case hand orientations", "Audience praise for accessibility impact"],
    certificateAvailable: true
  }
];

export const CORE_SKILLS_EXPOSURE = [
  {
    title: "Biomedical Instrumentation",
    short: "Bio-signals & Amplifiers",
    desc: "Calibration of ECG, EEG, pulse oximetry, differential amplifiers, and sensor signal conditioning rigs.",
    icon: "Activity"
  },
  {
    title: "Medical Equipment Fundamentals",
    short: "Clinical Hardware Safety",
    desc: "Preventive maintenance, electrical safety protocols, calibration tests, and hospital device compliance.",
    icon: "Cpu"
  },
  {
    title: "Healthcare Technology",
    short: "Hospital Systems & Infection Control",
    desc: "Digital protocol management, sterile barrier tracking, and nosocomial infection reduction workflows.",
    icon: "ShieldAlert"
  },
  {
    title: "AI-Based Healthcare Applications",
    short: "Smart Diagnostics & Triage",
    desc: "Leveraging large language models and neural architectures for assistive health communication and triage.",
    icon: "Sparkles"
  },
  {
    title: "Computer Vision",
    short: "OpenCV & Landmark Tracking",
    desc: "Real-time webcam tracking, spatial coordinate calculations, and gesture feature classification.",
    icon: "Scan"
  },
  {
    title: "Biomedical Research & Innovation",
    short: "Biomaterials & Herbal Scaffolds",
    desc: "Formulation of collagen dressings, phytochemical extraction, and antimicrobial in-vitro evaluations.",
    icon: "Microscope"
  },
  {
    title: "Problem Solving & Documentation",
    short: "SOPs & Analytical Rigor",
    desc: "Meticulous lab journals, research whitepapers, flowchart specifications, and structured troubleshooting.",
    icon: "FileText"
  }
];

export const LEADERSHIP_DATA: LeadershipRole[] = [
  {
    title: "Sports Representative",
    organization: "Dr. N.G.P Institute of Technology",
    period: "2024 – Present",
    image: "/assets/images/toastmasters_public_speaking_1793370676806.jpg",
    description: "Elected student leader responsible for mobilizing athletic engagement, coordinating inter-departmental tournaments, and serving as the primary liaison between students and the Physical Education Department.",
    responsibilities: [
      "Organized annual inter-departmental sports meets and student athletic trials",
      "Acted as the official communication link between faculty advisors, physical education directors, and student athletes",
      "Managed logistics, team schedules, sports equipment inventory, and fair-play disputes",
      "Promoted health, physical fitness, and mental wellness across the student body"
    ],
    achievements: [
      "Achieved 40%+ increase in women student participation across track & field events",
      "Coordinated 12+ competitive inter-department match fixtures without scheduling delays",
      "Commended by Department Head for exemplary organizational responsibility"
    ]
  },
  {
    title: "Active Member – Toastmasters Club",
    organization: "Dr. N.G.P Institute of Technology Toastmasters",
    period: "2024 – Present",
    image: "/assets/images/toastmasters_public_speaking_1793370676806.jpg",
    description: "Committed speaker and evaluator developing executive public speaking, impromptu speech delivery, constructive peer evaluation, and meeting leadership.",
    responsibilities: [
      "Regularly delivered structured speech projects adhering to Toastmasters Pathways curriculum",
      "Served as Table Topics Master and Timer, facilitating dynamic impromptu speech sessions",
      "Provided constructive, analytical feedback evaluations to fellow speakers to encourage personal growth",
      "Actively cultivated articulate communication skills essential for international biomedical conferences"
    ],
    achievements: [
      "Completed foundational speech milestones with distinction",
      "Won Table Topics Speaker recognition for spontaneous critical reasoning",
      "Spearheaded public speaking workshops for first-year engineering peers"
    ]
  },
  {
    title: "Active Member – Road Safety Club",
    organization: "Dr. N.G.P Institute of Technology",
    period: "2024 – Present",
    image: "/assets/images/road_safety_campaign_1793719471672.jpg",
    description: "Active member contributing to campus and community road safety advocacy, pedestrian awareness drives, helmet compliance campaigns, and emergency first-responder assistance initiatives.",
    responsibilities: [
      "Participate in regional road safety awareness drives and helmet compliance rallies",
      "Coordinate emergency triage and basic first aid readiness workshops across campus",
      "Promote pedestrian safety, zebra-crossing awareness, and responsible vehicular mobility",
      "Liaise with local traffic authorities and student volunteer corps during community safety programs"
    ],
    achievements: [
      "Co-organized campus-wide Road Safety Awareness Rally in partnership with local traffic authorities",
      "Recognized for active volunteer service in student safety outreach and accident prevention campaigns"
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Developed AI-Based Healthcare Communication System",
    category: "Assistive AI Innovation",
    date: "2024",
    description: "Engineered 'Bridging Silence' uniting computer vision and Gemini AI to vocalize sign gestures for non-verbal patients.",
    iconName: "Volume2"
  },
  {
    id: "ach-2",
    title: "Engineered Innovative Herbal Collagen Wound Dressing",
    category: "Biomaterials Research",
    date: "2024",
    description: "Formulated 'Tricol Bioregen Band' utilizing Tridax procumbens extract and collagen matrix for accelerated tissue regeneration.",
    iconName: "Layers"
  },
  {
    id: "ach-3",
    title: "Successfully Completed Industrial Internship at Atheenapandian",
    category: "Industrial Engineering",
    date: "2024",
    description: "Graduated rigorous industrial training program covering medical equipment diagnostics, calibration, and safety compliance.",
    iconName: "CheckCircle2"
  },
  {
    id: "ach-4",
    title: "Active Leadership as Sports Rep, Toastmaster & Road Safety Member",
    category: "Campus Leadership",
    date: "2024 – Present",
    description: "Elected department sports coordinator, accomplished public speaker, and active Road Safety Club member driving peer wellness and civic safety.",
    iconName: "Award"
  }
];

export const CERTIFICATIONS_DATA: CertificateItem[] = [
  // 1. INTERNSHIP CATEGORY
  {
    id: "cert-atheenapandian-completion",
    title: "Expert Level Medical Equipment Training",
    issuer: "Atheenapandian Pvt. Ltd. (MSME & AICTE Approved)",
    issueDate: "June 2026",
    credentialId: "APPLDIPT202600745",
    category: "Internship",
    previewUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.32_PM_5fa38b64.jpeg",
    fileType: "image",
    defaultRotation: 0,
    scoreOrAward: "15-Day Industrial Training Program",
    skillsAcquired: ["Patient Monitor Calibration", "ECG Machines & Defibrillators", "Medical Electronics Debugging", "Electrical Safety Standards", "ISO Quality Verification"],
    description: "Completed comprehensive 15-day industrial internship in biomedical equipment manufacturing, clinical diagnostic calibration, oscilloscope testing, and medical device electrical safety verification."
  },
  {
    id: "cert-kmch-internship",
    title: "Biomedical Engineering Department Internship",
    issuer: "Kovai Medical Center and Hospital Limited (KMCH)",
    issueDate: "September 2026",
    credentialId: "KMCH-BME-INT-2026",
    category: "Internship",
    previewUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.33_PM_fd853261.jpeg",
    fileType: "image",
    defaultRotation: 0,
    scoreOrAward: "Hospital Clinical Engineering Training",
    skillsAcquired: ["Clinical Engineering Workflows", "Hospital Equipment Maintenance", "Sterilization Protocols", "NABH Accreditation Standards"],
    description: "Completed clinical internship training in the Biomedical Engineering Department at NABH-accredited Kovai Medical Center and Hospital (KMCH) from 22.09.2026 to 29.09.2026 under Sr. General Manager - HR."
  },
  {
    id: "cert-saag-medicare",
    title: "Certificate of Industrial Visit – SAAG Medicare",
    issuer: "SAAG Medicare (Ernakulam, Kerala)",
    issueDate: "March 2026",
    credentialId: "SAAG-IV-2026-03",
    category: "Internship",
    previewUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.33_PM__2__95f6ee1d.jpeg",
    fileType: "image",
    defaultRotation: 0,
    scoreOrAward: "Industrial Device Facility Exposure",
    skillsAcquired: ["Medical Device Infrastructure", "Healthcare Facility Logistics", "Clinical Equipment Observation"],
    description: "Appreciation certificate for attending industrial visit exploring medical equipment manufacturing and clinical healthcare infrastructure at SAAG Medicare."
  },

  // 2. WORKSHOPS CATEGORY
  {
    id: "cert-sm-ai-mojo",
    title: "AI-Powered Patient Health Records & Medical Coding",
    issuer: "SM AI MOJO TECH (Sree Mahalakshmi Technology Solutions)",
    issueDate: "September 2026",
    credentialId: "SMAIC 9 2026 254",
    category: "Workshops",
    previewUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.32_PM__1__453329b6.jpeg",
    fileType: "image",
    defaultRotation: 90,
    scoreOrAward: "Executive AI Training Certificate",
    skillsAcquired: ["AI Electronic Health Records (EHR)", "Automated Medical Coding (ICD-10)", "Clinical NLP", "Health Data Standardization"],
    description: "Professional training on artificial intelligence applied to electronic patient health records, clinical informatics, and automated medical coding conducted from 31.08.2026 to 08.09.2026."
  },
  {
    id: "cert-srec-aiml-workshop",
    title: "Workshop on AI & ML Applications in Technology",
    issuer: "Sri Ramakrishna Engineering College (SREC UTSAVA'26)",
    issueDate: "January 2026",
    credentialId: "SREC-UT26-AIML-01",
    category: "Workshops",
    previewUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.34_PM_1f00c6f1.jpeg",
    fileType: "image",
    defaultRotation: 90,
    scoreOrAward: "National Techno-Cultural Fest Workshop",
    skillsAcquired: ["Machine Learning Models", "Neural Networks", "Diagnostic AI Tools", "Computer Vision Pipelines"],
    description: "Hands-on participation in national level workshop examining applied AI algorithms, neural networks, and machine learning pipelines during SREC UTSAVA'26."
  },
  {
    id: "cert-spoken-tutorial-esim",
    title: "Completion of eSim Circuit Simulation Training",
    issuer: "Spoken Tutorial, IIT Bombay & SWAYAM Plus",
    issueDate: "October 2026",
    credentialId: "4203850340",
    category: "Workshops",
    previewUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__1___2__57fd597a.pdf",
    pdfUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__1___2__57fd597a.pdf",
    fileType: "pdf",
    scoreOrAward: "Score: 85.71% | 2 Academic Credits",
    skillsAcquired: ["eSim EDA Tool", "PCB Layout Schematics", "Analog Filter Simulation", "Bio-Potential Amplifier Modeling"],
    description: "Passed remote online exam conducted by IIT Bombay with 85.71% score and 2 academic credits, mastering electronic circuit simulation and PCB design."
  },
  {
    id: "cert-spoken-tutorial-blender",
    title: "Completion of Blender 3D Training",
    issuer: "Spoken Tutorial, IIT Bombay & EduPyramids",
    issueDate: "January 2026",
    credentialId: "4203850G3S",
    category: "Workshops",
    previewUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__6___1__40c10a27.pdf",
    pdfUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__6___1__40c10a27.pdf",
    fileType: "pdf",
    scoreOrAward: "Score: 72.50% | 2 Academic Credits",
    skillsAcquired: ["Blender 3D Modeling", "Spatial Anatomy Meshing", "Photorealistic Rendering", "Medical Device Prototyping"],
    description: "Completed proctored examination and training program on 3D spatial modeling, anatomical structure visualization, and medical animation."
  },
  {
    id: "cert-spoken-tutorial-html",
    title: "Completion of HTML Training",
    issuer: "Spoken Tutorial, IIT Bombay & EduPyramids",
    issueDate: "February 2026",
    credentialId: "4203850TP7",
    category: "Workshops",
    previewUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__5__f49f192e.pdf",
    pdfUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__5__f49f192e.pdf",
    fileType: "pdf",
    scoreOrAward: "Score: 70.00% | 1 Academic Credit",
    skillsAcquired: ["HTML5 Web Markup", "Web Accessibility", "Frontend DOM Structure", "Responsive Web Design"],
    description: "Passed proctored online exam on semantic HTML markup, web structure, and responsive document standards with IIT Bombay accreditation."
  },

  // 3. TECHNICAL EVENTS & COMPETITIONS
  {
    id: "cert-kalam-technical-event",
    title: "KALAM 2026 – Project Expo Technical Event",
    issuer: "Sri Shakthi Institute of Engineering and Technology",
    issueDate: "March 2026",
    credentialId: "KALAM26-PE-710724121058",
    category: "Technical Events",
    previewUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.33_PM__1__0db995a6.jpeg",
    fileType: "image",
    defaultRotation: 90,
    scoreOrAward: "Inter-Collegiate Fest Technical Participation",
    skillsAcquired: ["Technical Event Defense", "Live Prototype Demonstration", "Jury Evaluation", "Engineering Showcase"],
    description: "Participated in Project Expo technical event during KALAM 2026 inter-collegiate fest, presenting engineering prototypes to industry evaluators."
  },

  // 4. PAPER PRESENTATIONS
  {
    id: "cert-srec-paper-presentation",
    title: "Paper Presentation – Core Engineers",
    issuer: "Sri Ramakrishna Engineering College (MoE Innovation Cell & AICTE)",
    issueDate: "January 2026",
    credentialId: "SREC-PP-UT26-088",
    category: "Paper Presentations",
    previewUrl: "/assets/aistudio/supriya.N__4__2ddd970a.pdf",
    pdfUrl: "/assets/aistudio/supriya.N__4__2ddd970a.pdf",
    fileType: "pdf",
    scoreOrAward: "MoE Innovation Cell & AICTE Recognized",
    skillsAcquired: ["Research Paper Defense", "Technical Literature Review", "Oral Presentation", "Symposium Proceedings"],
    description: "Presented research paper in Core Engineers category at SREC UTSAVA'26 national level symposium, defended before faculty panel."
  },

  // 5. PROJECTS
  {
    id: "cert-srec-project-expo-pdf",
    title: "Project Expo – Core Engineers",
    issuer: "Sri Ramakrishna Engineering College (MoE Innovation Cell & AICTE)",
    issueDate: "January 2026",
    credentialId: "SREC-PE-UT26-104",
    category: "Projects",
    previewUrl: "/assets/aistudio/supriya.N__5__41cbde7b.pdf",
    pdfUrl: "/assets/aistudio/supriya.N__5__41cbde7b.pdf",
    fileType: "pdf",
    scoreOrAward: "National Project Expo Participation",
    skillsAcquired: ["Biomedical Hardware Demonstrations", "Interactive Sandbox", "Healthcare Innovation Pitching"],
    description: "Participated in Project Expo competition for core engineering students at SREC UTSAVA'26, demonstrating working biomedical prototypes."
  },

  // 6. LEADERSHIP AND ACHIEVEMENTS
  {
    id: "cert-nptel-biophotonics",
    title: "NPTEL Elite Online Certification – Biophotonics",
    issuer: "Indian Institute of Technology Kharagpur & SWAYAM",
    issueDate: "April 2026",
    credentialId: "NPTEL26GE26S1450504038",
    category: "Leadership and Achievements",
    previewUrl: "/assets/aistudio/NOC26GE26S145050403804265364__1__a4804c13.pdf",
    pdfUrl: "/assets/aistudio/NOC26GE26S145050403804265364__1__a4804c13.pdf",
    fileType: "pdf",
    scoreOrAward: "Elite Gold | Score: 90% | 4 Credits",
    skillsAcquired: ["Optical Biosensing", "Tissue Scattering Physics", "Fluorescence Imaging", "Laser Diagnostics in Medicine"],
    description: "Elite certification awarded by IIT Kharagpur with 90% consolidated score (25/25 Online Assignments, 64.5/75 Proctored Exam) and 4 university credits."
  },
  {
    id: "cert-nptel-transport-phenomena",
    title: "NPTEL Online Certification – Transport Phenomena in Biological Systems",
    issuer: "Indian Institute of Technology Madras & SWAYAM",
    issueDate: "October 2026",
    credentialId: "NPTEL26BT76S774100300",
    category: "Leadership and Achievements",
    previewUrl: "/assets/aistudio/NOC26BT76S774100300__1__98bf40c5.pdf",
    pdfUrl: "/assets/aistudio/NOC26BT76S774100300__1__98bf40c5.pdf",
    fileType: "pdf",
    scoreOrAward: "Score: 54% | 4 Academic Credits",
    skillsAcquired: ["Biophysical Transport Equations", "Fluid Mechanics in Tissues", "Membrane Diffusion", "Mass Transfer Modeling"],
    description: "12-week national certification course from IIT Madras examining fluid dynamics, diffusion, and thermal transport in biological organs."
  },
  {
    id: "cert-toastmasters-leadership",
    title: "Toastmasters International – Public Speaking & Meeting Leadership",
    issuer: "Dr. N.G.P. iTech Toastmasters Club",
    issueDate: "2024 – Present",
    credentialId: "TI-NGP-SPK-2024-14",
    category: "Leadership and Achievements",
    previewUrl: "/assets/images/toastmasters_public_speaking_1793370676806.jpg",
    fileType: "image",
    defaultRotation: 0,
    scoreOrAward: "Table Topics Master & Speaker Recognition",
    skillsAcquired: ["Impromptu Speech Delivery", "Analytical Peer Evaluations", "Pathways Milestone", "Executive Meeting Leadership"],
    description: "Active speaker delivering structured speech projects, serving as Table Topics Master, and fostering communicative confidence."
  },
  {
    id: "cert-road-safety-club",
    title: "Road Safety Club – Campus Safety Outreach & First Aid Volunteer",
    issuer: "Road Safety Club, Dr. N.G.P Institute of Technology",
    issueDate: "2024 – Present",
    credentialId: "RSC-NGP-VOL-2024",
    category: "Leadership and Achievements",
    previewUrl: "/assets/images/road_safety_campaign_1793719471672.jpg",
    fileType: "image",
    defaultRotation: 0,
    scoreOrAward: "Campus Safety & First Aid Outreach Service",
    skillsAcquired: ["Emergency Triage Coordination", "Helmet Awareness Drives", "Pedestrian Advocacy", "Community Road Safety Rallies"],
    description: "Elected club member coordinating campus road safety drives, helmet compliance rallies, and basic first-aid emergency preparedness."
  }
];

export const INITIAL_DOCUMENTS: UploadedDocument[] = [
  {
    id: "doc-project-2nd-year",
    title: "2nd_Year_Project_Report_Tricol_BioRegen_Band.pdf",
    category: "Project Report",
    fileType: "application/pdf",
    uploadDate: "2026-11-01",
    fileSize: "1.2 MB",
    downloadUrl: "/assets/aistudio/BATCH_7_FINAL_REPORT_c01da5f7.pdf",
    isPreloaded: true,
    notes: "Official 2nd Year BME Project Report: Nature-Boosted Wound Healing using Tridax Procumbens with Collagen/Gelatin. Batch 7, Dr. N.G.P. Institute of Technology."
  },
  {
    id: "doc-project-1st-year",
    title: "1st_Year_Project_Report_Bridging_Silence.pdf",
    category: "Project Report",
    fileType: "application/pdf",
    uploadDate: "2026-05-15",
    fileSize: "980 KB",
    downloadUrl: "/assets/aistudio/FINAL_REPORT__1___1__1___1__692f52e7.pdf",
    isPreloaded: true,
    notes: "Official 1st Year STEM Project Report: Real-Time Sign Language Translation with Webcam using LLaVA-NLP & Kokoro-AI TTS. Dr. N.G.P. Institute of Technology."
  },
  {
    id: "doc-resume",
    title: "Supriya_N_Final_Resume.pdf",
    category: "Resume",
    fileType: "application/pdf",
    uploadDate: "2026-11-04",
    fileSize: "165 KB",
    downloadUrl: "/assets/aistudio/final_resume_supriya_N__1__91f0282c.pdf",
    isPreloaded: true,
    notes: "Official two-page undergraduate resume: CGPA 7.87, Vikas Vidyalaya (86.2%), KMCH & Atheenapandian internships, 3 projects, and Sports Captaincy."
  },
  {
    id: "doc-nptel-biophotonics",
    title: "NPTEL_Elite_Certificate_Biophotonics_IIT_Kharagpur.pdf",
    category: "Certificate",
    fileType: "application/pdf",
    uploadDate: "2026-04-20",
    fileSize: "310 KB",
    downloadUrl: "/assets/aistudio/NOC26GE26S145050403804265364__1__a4804c13.pdf",
    isPreloaded: true,
    notes: "Elite Certificate from IIT Kharagpur (Score: 90%, 4 Credits) in Biophotonics & Medical Optics."
  },
  {
    id: "doc-nptel-transport",
    title: "NPTEL_Certificate_Transport_Phenomena_IIT_Madras.pdf",
    category: "Certificate",
    fileType: "application/pdf",
    uploadDate: "2026-10-25",
    fileSize: "295 KB",
    downloadUrl: "/assets/aistudio/NOC26BT76S774100300__1__98bf40c5.pdf",
    isPreloaded: true,
    notes: "NPTEL Certificate from IIT Madras (Score: 54%, 4 Credits) in Transport Phenomena in Biological Systems."
  },
  {
    id: "doc-srec-paper",
    title: "SREC_UTSAVA26_Paper_Presentation_Certificate.pdf",
    category: "Research Paper",
    fileType: "application/pdf",
    uploadDate: "2026-01-31",
    fileSize: "140 KB",
    downloadUrl: "/assets/aistudio/supriya.N__4__2ddd970a.pdf",
    isPreloaded: true,
    notes: "National Level Technical Paper Presentation Certificate in Core Engineers Category, SREC UTSAVA'26."
  },
  {
    id: "doc-srec-expo",
    title: "SREC_UTSAVA26_Project_Expo_Certificate.pdf",
    category: "Project Report",
    fileType: "application/pdf",
    uploadDate: "2026-01-31",
    fileSize: "142 KB",
    downloadUrl: "/assets/aistudio/supriya.N__5__41cbde7b.pdf",
    isPreloaded: true,
    notes: "Project Expo Participation Certificate from Sri Ramakrishna Engineering College & AICTE MoE Innovation Cell."
  },
  {
    id: "doc-spoken-esim",
    title: "IIT_Bombay_Spoken_Tutorial_eSim_Certificate.pdf",
    category: "Technical Training",
    fileType: "application/pdf",
    uploadDate: "2026-10-14",
    fileSize: "210 KB",
    downloadUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__1___2__57fd597a.pdf",
    isPreloaded: true,
    notes: "IIT Bombay Spoken Tutorial Certificate in eSim Electronic Circuit Simulation (Score: 85.71%, 2 Credits)."
  },
  {
    id: "doc-spoken-blender",
    title: "IIT_Bombay_Spoken_Tutorial_Blender_Certificate.pdf",
    category: "Technical Training",
    fileType: "application/pdf",
    uploadDate: "2026-01-24",
    fileSize: "205 KB",
    downloadUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__6___1__40c10a27.pdf",
    isPreloaded: true,
    notes: "IIT Bombay Spoken Tutorial Certificate in Blender 3D Training (Score: 72.50%, 2 Credits)."
  },
  {
    id: "doc-spoken-html",
    title: "IIT_Bombay_Spoken_Tutorial_HTML_Certificate.pdf",
    category: "Technical Training",
    fileType: "application/pdf",
    uploadDate: "2026-02-20",
    fileSize: "198 KB",
    downloadUrl: "/assets/aistudio/SUPRIYA-N-Participant-Certificate__5__f49f192e.pdf",
    isPreloaded: true,
    notes: "IIT Bombay Spoken Tutorial Certificate in HTML Web Development (Score: 70.00%, 1 Credit)."
  },
  {
    id: "doc-atheenapandian-cert",
    title: "Atheenapandian_Medical_Equipment_Training_Certificate.jpeg",
    category: "Certificate",
    fileType: "image/jpeg",
    uploadDate: "2026-06-03",
    fileSize: "420 KB",
    downloadUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.32_PM_5fa38b64.jpeg",
    isPreloaded: true,
    notes: "Certificate of Completion (APPLDIPT202600745) for 15-day Expert Level Medical Equipment Training at Atheenapandian Pvt. Ltd."
  },
  {
    id: "doc-kmch-cert",
    title: "KMCH_Hospital_Biomedical_Department_Internship.jpeg",
    category: "Certificate",
    fileType: "image/jpeg",
    uploadDate: "2026-09-29",
    fileSize: "380 KB",
    downloadUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.33_PM_fd853261.jpeg",
    isPreloaded: true,
    notes: "Internship Certificate in Biomedical Engineering Department from Kovai Medical Center and Hospital (KMCH)."
  },
  {
    id: "doc-saag-medicare-cert",
    title: "SAAG_Medicare_Industrial_Visit_Certificate.jpeg",
    category: "Certificate",
    fileType: "image/jpeg",
    uploadDate: "2026-03-30",
    fileSize: "350 KB",
    downloadUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.33_PM__2__95f6ee1d.jpeg",
    isPreloaded: true,
    notes: "Official certificate appreciating participation in SAAG Medicare Industrial Visit (Ernakulam, Kerala)."
  },
  {
    id: "doc-sm-ai-mojo-cert",
    title: "SM_AI_MOJO_TECH_Patient_Records_AI_Coding.jpeg",
    category: "Certificate",
    fileType: "image/jpeg",
    uploadDate: "2026-09-08",
    fileSize: "410 KB",
    downloadUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.32_PM__1__453329b6.jpeg",
    isPreloaded: true,
    notes: "Training Certificate in AI-Powered Patient Health Records & Medical Coding from SM AI MOJO TECH."
  },
  {
    id: "doc-srec-aiml-cert",
    title: "SREC_UTSAVA26_AIML_Workshop_Certificate.jpeg",
    category: "Certificate",
    fileType: "image/jpeg",
    uploadDate: "2026-01-31",
    fileSize: "395 KB",
    downloadUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.34_PM_1f00c6f1.jpeg",
    isPreloaded: true,
    notes: "Workshop Participation Certificate on AI & ML Applications in Technology, SREC UTSAVA'26."
  },
  {
    id: "doc-kalam-expo-cert",
    title: "KALAM2026_Project_Expo_Technical_Event.jpeg",
    category: "Certificate",
    fileType: "image/jpeg",
    uploadDate: "2026-03-14",
    fileSize: "405 KB",
    downloadUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_9.53.33_PM__1__0db995a6.jpeg",
    isPreloaded: true,
    notes: "Certificate of Participation in Project Expo Technical Event, KALAM 2026, Sri Shakthi Institute of Engineering and Technology."
  }
];

export const RESUME_DATA = {
  header: {
    name: "SUPRIYA N",
    headline: "B.E. Biomedical Engineering | Dr. N.G.P. Institute of Technology | India",
    phone: "+91 96299 37228",
    email: "supriyanandhakumar2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/supriya-n-aab7a5338",
    linkedinDisplay: "linkedin.com/in/supriya-n-aab7a5338",
    location: "Tiruppur, India",
    pdfUrl: "/assets/aistudio/final_resume_supriya_N__1__91f0282c.pdf"
  },
  academicBackground: [
    {
      degree: "B.E. Biomedical Engineering",
      institution: "Dr. N.G.P. Institute of Technology",
      period: "2024 – Present",
      score: "7.87",
      scoreType: "CGPA"
    },
    {
      degree: "Higher Secondary",
      institution: "Vikas Vidyalaya Matriculation Higher Secondary School",
      period: "Completed 2023",
      score: "86.2%",
      scoreType: "Percentage"
    }
  ],
  experience: [
    {
      title: "Sports Representative and Captain",
      organization: "Dr. N.G.P Institute of Technology",
      period: "2025 – Present",
      description: "Captain of the college sports team, organizes sports events, and motivates peers to participate in athletics and team sports."
    },
    {
      title: "Toastmasters Club Member",
      organization: "Dr. N.G.P Institute of Technology",
      period: "2024 – Present",
      description: "Active participant in speech sessions and debates, developing strong public speaking, communication, and leadership skills."
    },
    {
      title: "KMCH Hospital – Internship",
      organization: "Kovai Medical Center and Hospital Limited",
      period: "6 Days",
      description: "Completed a 6-day internship in the Biomedical Engineering Department, gaining real-time experience of how a biomedical engineer works in a hospital setting and the responsibilities they carry."
    },
    {
      title: "Atheenapandian Pvt. Ltd. – Internship",
      organization: "Atheenapandian Private Limited",
      period: "15 Days",
      description: "Completed a 15-day internship in a medical device plant, understanding the production process, quality checks, and safety rules followed in manufacturing healthcare equipment."
    }
  ],
  descriptionOfActivities: [
    {
      index: 1,
      title: "Paper Presentation – SREC UTSAVA'26",
      details: "Presented research on 'A Real Time Sign Language Translation with Webcam' at Sri Ramakrishna Engineering College on 31st Jan 2026."
    },
    {
      index: 2,
      title: "Project Expo – SREC UTSAVA'26",
      details: "Demonstrated live interactive prototype of 'A Real Time Sign Language Translation with Webcam' at Sri Ramakrishna Engineering College on 31st Jan 2026."
    },
    {
      index: 3,
      title: "IIT Bombay Spoken Tutorial – eSim Training",
      details: "Successfully completed electronic circuit simulation training in eSim with an 85.71% score."
    },
    {
      index: 4,
      title: "IIT Bombay Spoken Tutorial – Blender Training",
      details: "Completed 3D computer graphics modeling and simulation training in Blender with a 72.50% score."
    },
    {
      index: 5,
      title: "IIT Bombay Spoken Tutorial – HTML Training",
      details: "Completed comprehensive web development and HTML interface programming training with a 70.00% score."
    },
    {
      index: 6,
      title: "NPTEL Elite Course – Biophotonics",
      details: "Awarded Elite Certificate by IIT Kharagpur for completing Biophotonics course with 90% score."
    },
    {
      index: 7,
      title: "NPTEL Course – Transport Phenomena in Biological Systems",
      details: "Completed biological transport modeling course conducted by IIT Madras with a 54% score."
    },
    {
      index: 8,
      title: "Industrial Visit & Conference",
      details: "Attended Industrial Visit to SAAG Medicare and participated in an innovation conference at T-Hub on 30th March 2026."
    }
  ],
  projects: [
    {
      name: "A Real-Time Sign Language Translation with Webcam",
      tools: ["OpenCV", "Gemini AI", "Python", "Flask"],
      description: "Developed a system using a webcam and AI to translate sign language gestures into text and speech, helping improve communication for speech- and hearing-impaired individuals."
    },
    {
      name: "Tricol BioRegen Band – Nature Boosted Wound Healing Using Tridax Procumbens with Collagen",
      tools: ["Tridax Procumbens Extract", "Collagen Matrix", "Gelatin", "Hemolysis Assay"],
      description: "Developed a natural, bio-polymeric herbal wound dressing combining Tridax procumbens extract with a collagen/gelatin matrix to accelerate wound healing and prevent infection."
    },
    {
      name: "Hospital Infection Control Assistant",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://supriyanandhakumar.github.io/hospital-infection-control-assistant/",
      description: "Designed an interactive web-based assistant to help healthcare staff and visitors follow hospital infection control protocols, maintain hygiene guidelines, and reduce infection risks."
    }
  ],
  skills: [
    "Biomedical Engineering",
    "Biomedical Instrumentation",
    "Medical Device Basics",
    "Computer Vision",
    "AI in Healthcare",
    "Python",
    "C Programming",
    "HTML",
    "OpenCV",
    "Flask",
    "Blender",
    "eSim",
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Leadership",
    "Time Management"
  ],
  languages: ["Tamil", "English"],
  extracurriculars: [
    "Captain of College Sports Team & Department Sports Representative (2025 – Present)",
    "Active Member of Toastmasters Club (2024 – Present)",
    "Active Member of Road Safety Club (2024 – Present)",
    "JEE Entrance Exam Score: 54"
  ]
};
