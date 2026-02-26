import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutStats } from '../data/content';

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-card-light dark:bg-[#0d0e1c] border-y border-border-light dark:border-border-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-700" />
              <div
                className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-darker"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=450&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">
                      Passionate about Clean Code
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Turning complex logic into elegant solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-6">
              Bridging Engineering & Data
            </h2>
            <p className="text-text-muted dark:text-slate-400 mb-4 leading-relaxed">
              Currently studying at the Faculty of Computer & Data Science, I discovered a unique intersection between data analysis and mobile development. This background gives me a distinct advantage — I don't just build apps, I build <strong className="text-text-light dark:text-text-dark">measurable experiences</strong>.
            </p>
            <p className="text-text-muted dark:text-slate-400 mb-8 leading-relaxed">
              My transition into Flutter development was driven by a desire to create systems that combine rigorous engineering with data-informed decision-making. Every line of code I write is guided by an analytical mindset focused on performance, scalability, and user impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-bg-light dark:bg-surface-darker border border-border-light dark:border-border-dark"
                >
                  <h4
                    className={`text-3xl font-bold mb-1 ${
                      stat.color === 'primary'
                        ? 'text-primary'
                        : 'text-accent'
                    }`}
                  >
                    {stat.value}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
