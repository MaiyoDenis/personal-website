import React from 'react';
import { AppProvider } from '@context';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import HeroSection from '@sections/HeroSection';
import AboutSection from '@sections/AboutSection';
import ServicesSection from '@sections/ServicesSection';
import StatsSection from '@sections/StatsSection';
import SkillsSection from '@sections/SkillsSection';
import ProjectsSection from '@sections/ProjectsSection';
import ContactSection from '@sections/ContactSection';
import ChatWidget from '@components/chat/ChatWidget';
import useDarkMode from '@hooks/useDarkMode';
import useScrollReveal from '@hooks/useScrollReveal';
import useSkillBars from '@hooks/useSkillBars';
import useStatsCounter from '@hooks/useStatsCounter';

function App() {
  const { darkMode } = useDarkMode();
  useScrollReveal();
  useSkillBars();
  useStatsCounter();

  return (
  
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <StatsSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    
  );
}

export default App;