import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education, certifications } from '../../data/experiences';
import { 
  HiOutlineBriefcase, 
  HiOutlineAcademicCap, 
  HiOutlineBadgeCheck,
  HiOutlineLocationMarker,
  HiOutlineCalendar
} from 'react-icons/hi';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Career Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Work Experience &amp; <span className="gradient-text-accent">Track Record</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Timeline Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <HiOutlineBriefcase className="w-4 h-4" />
                      <span>{exp.role}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-slate-200 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                      <HiOutlineCalendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineLocationMarker className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Accomplishments Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10"
            >
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 inline-block mb-4">
                <HiOutlineAcademicCap className="w-6 h-6" />
              </div>
              
              <div className="text-xs font-bold text-indigo-400 tracking-wider uppercase mb-1">
                Formal Education
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                {education.degree}
              </h4>
              <p className="text-sm text-cyan-300 font-medium mb-1">
                {education.institution}
              </p>
              <div className="text-xs text-slate-400 mb-4">
                {education.period} • {education.location}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-white/[0.06]">
                {education.highlights}
              </p>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10"
            >
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block mb-4">
                <HiOutlineBadgeCheck className="w-6 h-6" />
              </div>
              
              <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-3">
                Certifications
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-sm font-bold text-white mb-0.5">
                      {cert.name}
                    </div>
                    <div className="text-xs text-emerald-400 font-medium mb-1">
                      {cert.issuer} • {cert.date}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
