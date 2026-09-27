import React from 'react';
import { useInView } from '../../hooks/useInView';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';
import { FaDownload } from 'react-icons/fa';

export const About = () => {
  const [aboutRef] = useInView({ threshold: 0.3 });

  return (
    <section ref={aboutRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto section-shell">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 comic-title comic-text-shadow">
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="speech-bubble inline-block">
            Who I am and what I build.
          </div>
        </div>

        <div className="comic-panel rounded-2xl p-8 md:p-12">
          <div className="max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {personalInfo.hero.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-4 comic-title">What I Do</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">▸</span>
                    Build responsive, user-friendly web applications with ReactJS
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">▸</span>
                    Develop mobile applications using React Native
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">▸</span>
                    Create modern UI designs with Tailwind CSS
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">▸</span>
                    Collaborate with cross-functional teams to deliver quality products
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-4 comic-title">Current Focus</h3>
                <p className="text-gray-300">
                  Currently focusing on full stack development — strengthening backend fundamentals,
                  building APIs, and improving end-to-end application architecture while continuing
                  to craft clean, responsive front-end experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resume.downloadUrl}
              download={personalInfo.resume.filename}
              className="inline-flex items-center gap-2 comic-button"
            >
              <FaDownload />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
