import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const tagColorMap = {
    primary: 'bg-primary/10 text-primary',
    blue: 'bg-blue-500/10 text-blue-500',
    green: 'bg-green-500/10 text-green-500',
    orange: 'bg-orange-500/10 text-orange-500',
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-surface-darker border border-slate-200 dark:border-border-dark group card-glow hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-300" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                tagColorMap[project.tagColors[i]] || tagColorMap.primary
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">
          {project.title}
        </h3>

        {/* Problem & Solution */}
        <div className="mb-4 space-y-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Problem</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Solution</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{project.solution}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Key Features</p>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="text-xs px-2.5 py-1 rounded-md bg-bg-light dark:bg-bg-dark border border-slate-200 dark:border-border-dark text-slate-600 dark:text-slate-400"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* What I Learned */}
        <div className="mb-6 flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">What I Learned</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{project.learned}</p>
        </div>

        {/* Actions */}
        <div className="pt-5 border-t border-slate-100 dark:border-border-dark flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-9 px-4 rounded-lg bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center gap-2 h-9 px-4 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-16 md:py-24 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Selected works demonstrating problem solving and engineering
              quality.
            </p>
          </div>
          <a
            href="https://github.com/Mohamed0-0Tarek"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-10 px-6 items-center justify-center rounded-lg border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-medium hover:bg-surface-light dark:hover:bg-surface-darker transition-colors"
          >
            View All on GitHub
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="flex md:hidden justify-center mt-10">
          <a
            href="https://github.com/Mohamed0-0Tarek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full h-12 items-center justify-center rounded-lg border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-medium hover:bg-surface-light dark:hover:bg-surface-darker transition-colors"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
