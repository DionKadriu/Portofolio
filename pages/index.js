// filepath: /Users/dionkadriu/Desktop/Development/Portofolio/pages/index.js
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import HeroSection from '../Components/portofolio/HeroSection';
import SkillsSection from '../Components/portofolio/SkillsSection';
import ExperienceSection from '../Components/portofolio/ExperienceSection';
import ProjectsSection from '../Components/portofolio/ProjectsSection';
import EducationSection from '../Components/portofolio/EducationSection';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const timer = setTimeout(() => setIsVisible(true), 1500);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-225">
        <nav>
          {/* Add navigation buttons or links */}
        </nav>

        <div id="about">
          <HeroSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
      </div>
    </Layout>
  );
}