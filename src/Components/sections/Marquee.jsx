import React from 'react';
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiRedux, SiFirebase, SiPostman, SiVite } from 'react-icons/si';

const techs = [
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
  { name: 'React Native', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Redux Toolkit', icon: SiRedux, color: 'text-purple-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400' },
  { name: 'PostgreSQL', icon: FaDatabase, color: 'text-indigo-400' },
  { name: 'Figma UI/UX', icon: FaFigma, color: 'text-pink-400' },
  { name: 'Git / GitHub', icon: FaGitAlt, color: 'text-orange-400' },
  { name: 'Postman APIs', icon: SiPostman, color: 'text-orange-500' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
];

export const Marquee = () => {
  return (
    <div className="w-full py-8 border-y border-white/[0.06] bg-[#0b0f1a]/60 backdrop-blur-md overflow-hidden relative">
      {/* Gradient Fades for Left and Right Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center gap-6 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...techs, ...techs].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all cursor-default select-none shadow-sm"
            >
              <Icon className={`w-5 h-5 ${tech.color}`} />
              <span className="text-sm font-semibold text-slate-200 tracking-wide">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
