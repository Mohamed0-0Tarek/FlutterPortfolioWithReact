import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, FileDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/content';

const RESUME_URL = 'https://drive.google.com/file/d/1gW_el4Q3GwX291eV6b9vB095oVF-rvf3/view?usp=sharing';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-border-light dark:border-border-dark shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="size-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            M
          </div>
          <span className="text-text-light dark:text-text-dark text-lg font-bold tracking-tight">
            Mohamed Tarek
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-text-muted dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative size-9 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark flex items-center justify-center text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Resume Button */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-9 items-center justify-center rounded-lg px-4 gap-2 bg-transparent border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-medium hover:bg-surface-light dark:hover:bg-surface-darker transition-colors"
          >
            <FileDown size={15} />
            Resume
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden sm:flex h-9 items-center justify-center rounded-lg px-5 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden size-9 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark flex items-center justify-center text-text-muted dark:text-slate-300 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg-light dark:bg-bg-dark border-b border-border-light dark:border-border-dark"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="py-3 px-4 text-left text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-surface-light dark:hover:bg-surface-darker rounded-lg text-base font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-border-light dark:border-border-dark">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-10 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark"
                >
                  Resume
                </a>
                <a href="#contact" onClick={() => setMobileOpen(false)} className="flex-1 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                  Let's Talk
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
