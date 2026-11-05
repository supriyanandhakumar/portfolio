export interface Project {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  tools: string[];
  description: string;
  image: string;
  highlights: string[];
  methodology: string[];
  impact: string;
  hasInteractiveDemo?: boolean;
  demoType?: 'gesture-translator' | 'biomaterial-layer' | 'infection-control';
  yearTag: string;
  academicLevel: '1st Year STEM' | '2nd Year Biomedical';
  reportPdfUrl: string;
  teamMembers: string[];
  guide: string;
  hod: string;
  reportMetrics: { label: string; value: string }[];
  technicalHighlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Software & AI' | 'Biomedical Engineering' | 'Professional';
  level: number; // 0 - 100
  experience: string;
  tags: string[];
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  location: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  image: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  verifiedCredentialId: string;
}

export interface TechnicalParticipation {
  id: string;
  title: string;
  category: 'Workshops' | 'Symposiums' | 'Paper Presentations' | 'Hackathons' | 'Biomedical Events' | 'AI Activities' | 'Technical Demos';
  organization: string;
  date: string;
  location: string;
  description: string;
  keyTakeaways: string[];
  certificateAvailable: boolean;
}

export interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  image?: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  category: 'Internship' | 'Workshops' | 'Technical Events' | 'Paper Presentations' | 'Projects' | 'Leadership and Achievements' | string;
  previewUrl: string;
  fileType: 'image' | 'pdf';
  description: string;
  skillsAcquired?: string[];
  defaultRotation?: number; // 0, 90, 180, 270
  pdfUrl?: string;
  scoreOrAward?: string;
}

export interface UploadedDocument {
  id: string;
  title: string;
  category: 'Resume' | 'Certificate' | 'Research Paper' | 'Project Report' | 'Technical Training' | 'Other';
  fileType: string;
  uploadDate: string;
  fileSize: string;
  downloadUrl?: string;
  isPreloaded?: boolean;
  dataBase64?: string;
  notes?: string;
  thumbnailUrl?: string;
  credentialRefId?: string;
}
