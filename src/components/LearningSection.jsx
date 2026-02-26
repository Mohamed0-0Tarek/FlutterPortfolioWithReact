import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { learningTopics } from '../data/content';

export default function LearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="learning"
      className="py-16 md:py-24 bg-card-light dark:bg-[#0d0e1c] border-y border-border-light dark:border-border-dark"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Continuous Growth
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            What I'm Learning Now
          </h2>
          <p className="text-text-muted dark:text-slate-400">
            I believe in continuous improvement. Here's what I'm currently
            investing my time in.
          </p>
        </motion.div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-xl bg-bg-light dark:bg-surface-darker border border-border-light dark:border-border-dark hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-text-light dark:text-text-dark mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-text-muted dark:text-slate-400 mb-3">
                      {topic.description}
                    </p>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${topic.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 text-right">
                      {topic.progress}%
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
