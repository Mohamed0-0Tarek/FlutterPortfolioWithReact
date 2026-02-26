import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { techStack } from '../data/content';

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="stack"
      className="py-16 md:py-24 bg-card-light dark:bg-[#0d0e1c] border-y border-border-light dark:border-border-dark"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
              My Tech Stack
            </h2>
            <p className="text-text-muted dark:text-slate-400 mb-6 leading-relaxed">
              I leverage modern tools and frameworks to build robust mobile
              applications. My core expertise revolves around the Flutter
              ecosystem, supported by strong web and backend knowledge.
            </p>
            <a
              href="#projects"
              className="text-primary hover:text-accent font-medium inline-flex items-center gap-1 transition-colors"
            >
              See my projects <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Grid */}
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-bg-light dark:bg-surface-darker border border-border-light dark:border-border-dark hover:border-primary transition-all duration-300 hover:-translate-y-1 tech-glow cursor-default"
                >
                  <Icon size={36} style={{ color: tech.color }} strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
