import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/layout/Footer';
import ChatWidget from './components/chat/ChatWidget';
import useParticlesScript from './hooks/useParticlesScript';
import useTypingAnimation from './hooks/useTypingAnimation';
import useSkillBars from './hooks/useSkillBars';
import useStatsCounter from './hooks/useStatsCounter';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useParticlesScript();
  useTypingAnimation();
  useSkillBars();
  useStatsCounter();
  useScrollReveal();

  return (
    <div className="App">
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
