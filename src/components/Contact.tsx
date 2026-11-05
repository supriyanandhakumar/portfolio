import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    if (PERSONAL_INFO.phone) {
      navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#070b1d]/40">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-200/40 dark:bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200/40 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2 font-semibold">
            <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal">
            Interested in biomedical innovation, medical device internships, research collaborations, or discussing healthcare AI? I would love to connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 space-y-6 shadow-sm">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal">
                  Always open to technical dialogue, internship opportunities, and academic brainstorming.
                </p>
              </div>

              {/* Email Block */}
              <div className="p-4 bg-slate-50 dark:bg-[#050814] rounded-2xl border border-slate-200 dark:border-white/5 space-y-1 relative group shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-medium">Direct Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono font-bold text-cyan-800 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-200 transition-colors block truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone Block */}
              <div className="p-4 bg-slate-50 dark:bg-[#050814] rounded-2xl border border-slate-200 dark:border-white/5 space-y-1 relative group shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-medium">Direct Phone</span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-mono font-bold text-cyan-800 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-200 transition-colors block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Block */}
              <div className="p-4 bg-slate-50 dark:bg-[#050814] rounded-2xl border border-slate-200 dark:border-white/5 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-medium">Current Base</span>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-normal pl-6">
                  Available for opportunities across India & global remote teams.
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-2 font-medium">
                  Professional Networks:
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-50 dark:bg-[#050814] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-[#0077b5]/50 rounded-xl transition-all flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span className="font-semibold">LinkedIn Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-50 dark:bg-[#050814] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-purple-500/50 rounded-xl transition-all flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    <Github className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                    <span className="font-semibold">GitHub Profile</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Friendly Note */}
            <div className="p-5 glass-panel rounded-2xl border border-cyan-200 dark:border-cyan-500/20 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 font-normal shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>
                "Technology is the bridge between human fragility and medical potential. Let's engineer something meaningful together."
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal">
                  Fill in your details below and I will respond to your inquiry promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You for Reaching Out!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 font-normal">
                    Your message has been composed. Your email client was also prompted to dispatch the note directly to Supriya N.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 mb-1.5 font-medium">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Er. / Recruiter Name"
                        required
                        className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 mb-1.5 font-medium">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="colleague@domain.com"
                        required
                        className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 mb-1.5 font-medium">
                      Subject / Topic of Discussion
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Research Collaboration"
                      required
                      className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-300 mb-1.5 font-medium">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your inquiry, project scope, or opportunity details..."
                      required
                      className="w-full bg-white dark:bg-[#050814] border border-slate-300 dark:border-white/10 rounded-xl p-4 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message to Supriya'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
