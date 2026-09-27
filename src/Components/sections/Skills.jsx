import React, { useMemo } from 'react';
import { useInView } from '../../hooks/useInView';
import { skills } from '../../data/skills';

const SkillBar = ({ skill }) => {
  const barWidth = `${skill.level}%`;
  const progressColorClass = skill.level >= 90
    ? 'from-emerald-400 to-green-500'
    : skill.level >= 80
      ? 'from-lime-400 to-emerald-500'
      : 'from-amber-400 to-orange-500';

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-200">{skill.name}</span>
        <span className="text-primary-600 text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700/60 rounded-full h-2.5 overflow-hidden border border-gray-600">
        <div
          className={`bg-gradient-to-r ${progressColorClass} h-full rounded-full transition-[width] duration-500 ease-out`}
          style={{ width: barWidth }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const [skillsRef] = useInView({ threshold: 0.2 });

  const skillCategories = useMemo(() => [
    { title: "Languages", skills: skills.languages },
    { title: "Frameworks & Libraries", skills: skills.frameworks },
    { title: "Tools & Software", skills: skills.tools }
  ], []);

  return (
    <section ref={skillsRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto section-shell">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 comic-title comic-text-shadow">
            Technical <span className="text-primary-600">Skills</span>
          </h2>
          <div className="speech-bubble inline-block">
            A quick look at my technical stack and proficiency.
          </div>
        </div>

        <div className="comic-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="comic-card p-6"
            >
              <h3 className="text-xl font-bold text-primary-600 mb-6 comic-title">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="comic-panel rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary-600 mb-4 comic-title">Education</h3>
            <div className="text-gray-300">
              <h4 className="font-semibold mb-2">
                {skills.education.institution}
              </h4>
              <p className="mb-2">{skills.education.degree}</p>
              <p className="text-primary-600 font-medium mb-1">{skills.education.cgpa}</p>
              <p className="text-gray-400 text-sm">{skills.education.period}</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="comic-panel rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary-600 mb-4 comic-title">Certifications</h3>
            <ul className="space-y-2">
              {skills.certifications.map((cert, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
