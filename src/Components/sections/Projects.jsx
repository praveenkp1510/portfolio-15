import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { TechBadge } from '../ui/TechBadge';
import { projects as projectsData } from '../../data/projects';
import { Button } from '../ui/Button';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
  const [projectsRef] = useInView({ threshold: 0.1 });
  const [activeProjectId, setActiveProjectId] = useState(null);
  
  const {
    filteredProjects
  } = useProjectFilter(projectsData);

  const activeProject = useMemo(
    () => (activeProjectId ? projectsData.find(p => p.id === activeProjectId) : null),
    [activeProjectId]
  );

  const closeModal = useCallback(() => setActiveProjectId(null), []);

  const resolveAssetUrl = useCallback((url) => {
    if (!url) return url;
    if (/^https?:\/\//i.test(url)) return url;
    const base = import.meta.env.BASE_URL || '/';
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    const normalizedUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${normalizedBase}${normalizedUrl}`;
  }, []);

  useEffect(() => {
    if (!activeProjectId) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProjectId, closeModal]);

  const ProjectCard = ({ project }) => (
    <button
      type="button"
      className="comic-card group relative overflow-hidden text-left w-full"
      onClick={() => setActiveProjectId(project.id)}
      aria-label={`View details for ${project.title}`}
    >
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary-600 comic-title">
            {project.title}
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-400 border border-primary-500/30">
            {project.status || 'In Progress'}
          </span>
        </div>

        <p className="mb-4 text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-gray-400">Click to view details</span>
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-button inline-flex items-center gap-2 px-4 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </button>
  );

  return (
    <section ref={projectsRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto section-shell">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 comic-title comic-text-shadow">
            My <span className="text-primary-600">Projects</span>
          </h2>
          <div className="speech-bubble inline-block">
            Full list of completed and delivered projects.
          </div>
        </div>

        <div className="comic-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70"
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${activeProject.title}`}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-4xl comic-panel rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#121212] border-b md:border-b-0 md:border-r border-[#2b2b2b]">
                <img
                  src={resolveAssetUrl(activeProject.imageUrl)}
                  alt={activeProject.title}
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold comic-title">
                      {activeProject.title}
                    </h3>
                    <div className="mt-2 inline-flex px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-400 border border-primary-500/30">
                      {activeProject.status || 'In Progress'}
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" onClick={closeModal} aria-label="Close project details">
                    ✕
                  </Button>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                {activeProject.usefulForUsers && (
                  <div className="mb-6 bg-[#121212] border border-[#2b2b2b] rounded-xl p-4">
                    <h4 className="text-lg font-bold text-gray-100 mb-2">How it helps users</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {activeProject.usefulForUsers}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-100 mb-3">Tech stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, idx) => (
                      <TechBadge key={idx} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeProject.liveLink && activeProject.liveLink !== '#' && (
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-button inline-flex items-center gap-2 px-5 py-2.5"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Open Live Demo
                    </a>
                  )}

                  {activeProject.appStoreLink && activeProject.appStoreLink !== '#' && (
                    <a
                      href={activeProject.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-nav-pill inline-flex items-center gap-2 px-5 py-2.5"
                    >
                      View on Play Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
