import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';

const RESUME_DOWNLOAD_URL = 'https://drive.usercontent.google.com/download?id=1gW_el4Q3GwX291eV6b9vB095oVF-rvf3&export=download&authuser=0';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-grid-pattern opacity-10" />
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 dark:bg-surface-darker border border-primary/20 dark:border-border-dark mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-text-light dark:text-text-dark mb-4 md:mb-6 leading-[1.1]"
        >
          Data-Driven{' '}
          <br className="hidden md:block" />
          <span className="gradient-text">Mobile Engineer</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-text-muted dark:text-slate-400 max-w-2xl mb-8 md:mb-10 leading-relaxed"
        >
          Building smart, data-driven mobile experiences that users love. I craft high-performance Flutter applications with a focus on clean architecture and seamless UX.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center w-full sm:w-auto gap-4 px-4 sm:px-0"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto h-12 sm:px-8 rounded-lg bg-text-light dark:bg-primary hover:bg-text-light/90 dark:hover:bg-primary-hover text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowDown
              size={18}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href={RESUME_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 sm:px-8 rounded-lg bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark text-text-light dark:text-text-dark font-bold text-base hover:bg-surface-light dark:hover:bg-surface-dark transition-all flex items-center justify-center gap-2"
          >
            <FileDown size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
