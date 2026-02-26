import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { differenceCards } from '../data/content';

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    hoverBg: 'group-hover:bg-primary',
    border: 'hover:border-primary/50',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    hoverBg: 'group-hover:bg-accent',
    border: 'hover:border-accent/50',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-500',
    hoverBg: 'group-hover:bg-purple-500',
    border: 'hover:border-purple-500/50',
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-500',
    hoverBg: 'group-hover:bg-pink-500',
    border: 'hover:border-pink-500/50',
  },
};

export default function DifferenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="difference" className="py-16 md:py-24 bg-bg-light dark:bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            What Makes Me Different
          </h2>
          <p className="text-text-muted dark:text-slate-400">
            Beyond just writing code, I bring a holistic approach to product
            development.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differenceCards.map((card, index) => {
            const colors = colorMap[card.color];
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-card-light dark:bg-surface-darker border border-border-light dark:border-border-dark ${colors.border} transition-all duration-300 group card-glow hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text} mb-4 ${colors.hoverBg} group-hover:text-white transition-colors`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
