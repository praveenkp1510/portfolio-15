import React, { useState, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import { experiences } from '../../data/experiences';

export const Experience = () => {
  const [experienceRef] = useInView({ threshold: 0.3 });
  const [activeExperience, setActiveExperience] = useState("kambaa");

  const handleExperienceChange = useCallback((experienceId) => {
    setActiveExperience(experienceId);
  }, []);

  return (
    <section ref={experienceRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto section-shell">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 comic-title comic-text-shadow">
            Work <span className="text-primary-600">Experience</span>
          </h2>
          <div className="speech-bubble inline-block">
            My Professional Journey!
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Tabs */}
          <div className="lg:col-span-1">
            <div className="comic-panel p-4">
              <ul className="space-y-2">
                {Object.keys(experiences).map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => handleExperienceChange(key)}
                      className={`w-full text-left p-4 rounded-lg comic-nav-pill ${
                        activeExperience === key
                          ? "active"
                          : ""
                      }`}
                    >
                      <div className="font-medium comic-title">{experiences[key].title}</div>
                      <div className="text-sm opacity-75 mt-1">
                        {experiences[key].duration}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
              <div className="comic-panel p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2 comic-title">
                    {experiences[activeExperience].role}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-300">
                    <span className="font-medium">{experiences[activeExperience].title}</span>
                    <span>•</span>
                    <span>{experiences[activeExperience].duration}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {experiences[activeExperience].bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <span className="text-primary-600 mr-3 mt-1 flex-shrink-0 text-xl">💪</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Special highlight for E-Smart Accounting */}
                {activeExperience === 'kambaa' && (
                  <div className="mt-8 p-6 bg-primary-900/20 rounded-xl border-2 border-primary-800">
                    <h4 className="font-bold text-primary-600 mb-2 comic-title">
                      🏆 Key Achievement: E-Smart Accounting Software
                    </h4>
                    <p className="text-gray-300">
                      Led the development of a comprehensive accounting solution with focus on usability, 
                      performance, and modern React patterns. Successfully handled complex frontend logic 
                      and state management while maintaining clean, maintainable code.
                    </p>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
