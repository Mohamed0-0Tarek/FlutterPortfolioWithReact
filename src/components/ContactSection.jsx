import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Calendar, Send, User, MessageSquare, Github, Linkedin } from 'lucide-react';

const EMAIL = 'dev.mohamedtarek7@gmail.com';
const GITHUB_URL = 'https://github.com/Mohamed0-0Tarek';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mohamed-tarek-1b491a335/';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${EMAIL}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-light dark:bg-[#0d0e1c]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-light dark:text-text-dark mb-6 tracking-tight">
            Ready to build something{' '}
            <span className="text-primary">extraordinary?</span>
          </h2>
          <p className="text-lg text-text-muted dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently available for freelance projects and open to
            full-time opportunities. Let's discuss how I can help your team ship
            better apps, faster.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center w-full px-4 sm:px-0 gap-4 mb-10"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto h-14 sm:px-8 rounded-lg bg-primary hover:bg-primary-hover text-white text-lg font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 sm:px-8 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark text-text-light dark:text-text-dark text-lg font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row justify-center w-full px-4 sm:px-0 gap-4 mb-16"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 sm:h-10 px-5 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={16} />
            GitHub Profile
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 sm:h-10 px-5 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:border-primary hover:text-primary transition-colors"
          >
            <Mail size={16} />
            {EMAIL}
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-4"
        >
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-12 pl-11 pr-4 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
            />
          </div>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 pl-11 pr-4 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
            />
          </div>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-4 top-4 text-slate-400" />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all cursor-pointer"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
