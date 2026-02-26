import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const GITHUB_URL = 'https://github.com/Mohamed0-0Tarek';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mohamed-tarek-1b491a335/';
const EMAIL = 'dev.mohamedtarek7@gmail.com';

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
    { icon: Github, href: GITHUB_URL, label: 'GitHub' },
    { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card-light dark:bg-bg-dark border-t border-border-light dark:border-border-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <h2 className="text-text-light dark:text-text-dark text-xl font-bold">
                Mohamed Tarek
              </h2>
            </div>
            <p className="text-text-muted dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
              Building the future of mobile experiences, one pixel at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-bg-light dark:bg-surface-darker border border-border-light dark:border-border-dark flex items-center justify-center text-text-muted dark:text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-light dark:border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted dark:text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Mohamed Tarek. Built with{' '}
            <Heart size={14} className="text-red-500 fill-red-500" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
