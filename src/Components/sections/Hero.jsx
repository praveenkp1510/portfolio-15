import React, { useCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';

export const Hero = () => {
  const [heroRef] = useInView({ threshold: 0.3 });
  const scrollToSection = useScrollToSection();
  const profileImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&background=22c55e&color=111827&size=512&bold=true`;

  const handleBrowseProjects = useCallback(() => {
    scrollToSection('projects');
  }, [scrollToSection]);

  const handleGetInTouch = useCallback(() => {
    scrollToSection('contact');
  }, [scrollToSection]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto section-shell">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Text Content with Speech Bubble */}
          <div className="text-center lg:text-left">
            <div className="speech-bubble mb-8">
              {personalInfo.greeting}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight comic-title comic-text-shadow">
              <span className="text-primary-600">
                {personalInfo.hero.title}
              </span>
              <br />
              <span className="text-comic-panel">Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl text-gray-300">
              {personalInfo.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleBrowseProjects}
                variant="primary"
                size="lg"
                className="comic-button w-full sm:w-auto"
              >
                Browse Projects
              </Button>
              <Button
                onClick={handleGetInTouch}
                variant="outline"
                size="lg"
                className="comic-button w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image with Comic Panel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Comic panel background */}
              <div className="absolute inset-0 comic-panel rounded-3xl overflow-hidden">
                <div className="absolute inset-4 rounded-full border-4 border-primary-500/70" />
                {/* Profile image */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-[#2b2b2b] shadow-xl">
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
