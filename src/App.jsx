import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DifferenceSection from './components/DifferenceSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import LearningSection from './components/LearningSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <DifferenceSection />
          <TechStackSection />
          <ProjectsSection />
          <LearningSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
