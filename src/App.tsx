/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Internship } from './components/Internship';
import { TechnicalJourney } from './components/TechnicalJourney';
import { BeyondClassroom } from './components/BeyondClassroom';
import { Leadership } from './components/Leadership';
import { Achievements } from './components/Achievements';
import { DocumentsSection } from './components/DocumentsSection';
import { BeyondAcademics } from './components/BeyondAcademics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DocumentVaultModal } from './components/DocumentVaultModal';
import { ResumeModal } from './components/ResumeModal';
import { BiomedicalGraphicBackground } from './components/BiomedicalGraphicBackground';
import { INITIAL_DOCUMENTS } from './data/portfolioData';
import { UploadedDocument } from './types/portfolio';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  
  // Theme state: default to Light Plate Mode (false) as requested
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('supriya_theme_mode');
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
    } catch (e) {
      console.error(e);
    }
    return false; // Default: Light Porcelain / Plate Mode
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('supriya_theme_mode', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('supriya_theme_mode', 'light');
      }
    } catch (e) {
      console.error(e);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  // Persistent Document Vault state - ensure all INITIAL_DOCUMENTS are present and up to date
  const [documents, setDocuments] = useState<UploadedDocument[]>(() => {
    try {
      const saved = localStorage.getItem('supriya_documents_vault');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const customDocs = parsed.filter((d: UploadedDocument) => !d.isPreloaded);
          return [...INITIAL_DOCUMENTS, ...customDocs];
        }
      }
    } catch (e) {
      console.error('Error loading documents from localStorage', e);
    }
    return INITIAL_DOCUMENTS;
  });

  // Sync to localStorage whenever documents change
  useEffect(() => {
    try {
      localStorage.setItem('supriya_documents_vault', JSON.stringify(documents));
    } catch (e) {
      console.error('Error saving documents to localStorage', e);
    }
  }, [documents]);

  const handleUploadDocument = (newDoc: UploadedDocument) => {
    setDocuments((prev) => [newDoc, ...prev]);
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#050814] dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-200 transition-colors duration-300">
      
      {/* Animated Graphic Background with Moving Figures & ECG Wave */}
      <BiomedicalGraphicBackground isDarkMode={isDarkMode} />

      {/* Top Navigation Bar with Theme Switcher */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
        documentCount={documents.length}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Showcase */}
        <Projects
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* Industrial Internship Experience */}
        <Internship
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* Technical Journey & Participation */}
        <TechnicalJourney
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* Beyond the Classroom - Core Skills & Exposure */}
        <BeyondClassroom />

        {/* Leadership & Responsibility */}
        <Leadership />

        {/* Achievements & Certifications Showcase */}
        <Achievements
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* Separate Section for Uploaded Documents & PDFs */}
        <DocumentsSection
          documents={documents}
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* Beyond Academics */}
        <BeyondAcademics />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* Document & Certificate Vault Modal */}
      <DocumentVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        documents={documents}
        onUploadDocument={handleUploadDocument}
        onDeleteDocument={handleDeleteDocument}
        onOpenResumePreview={() => {
          setIsVaultOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Curated Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
